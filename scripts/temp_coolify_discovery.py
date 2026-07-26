#!/usr/bin/env python3
"""Temporary, read-only Coolify/Traefik discovery for the user's own server."""

from __future__ import annotations

import json
import re
import socket
import ssl
import subprocess
import urllib.error
import urllib.parse
import urllib.request
from typing import Any

HOST = "162.55.51.178"
PORTS = [22, 53, 80, 443, 2375, 2376, 3000, 4000, 4001, 5000, 6001, 6002, 8000, 8080, 8443]


def http_get(url: str, *, host_header: str | None = None, timeout: int = 15) -> dict[str, Any]:
    headers = {"User-Agent": "mecangroup-deployment-diagnostic/1.0", "Accept": "*/*"}
    if host_header:
        headers["Host"] = host_header
    request = urllib.request.Request(url, method="GET", headers=headers)
    context = ssl._create_unverified_context() if url.startswith("https://") else None
    try:
        with urllib.request.urlopen(request, timeout=timeout, context=context) as response:
            raw = response.read(64_000)
            return summarize_response(response.status, response.geturl(), response.headers, raw)
    except urllib.error.HTTPError as exc:
        raw = exc.read(64_000)
        return summarize_response(exc.code, exc.geturl(), exc.headers, raw)
    except Exception as exc:  # noqa: BLE001 - diagnostic boundary
        return {"error": f"{type(exc).__name__}: {exc}"}


def summarize_response(status: int, final_url: str, headers: Any, raw: bytes) -> dict[str, Any]:
    text = raw.decode("utf-8", errors="replace")
    # Keep only non-sensitive diagnostic markers; never emit cookies, CSRF values or form contents.
    domains = sorted(
        {
            item.rstrip(".,;:'\"/)")
            for item in re.findall(
                r"(?:https?://)?(?:[a-zA-Z0-9-]+\.)+(?:sslip\.io|nip\.io|[a-zA-Z]{2,})(?::\d+)?",
                text,
            )
            if "w3.org" not in item and "schema.org" not in item
        }
    )[:30]
    versions = sorted(set(re.findall(r"(?:Coolify|version)[^0-9]{0,12}(v?\d+\.\d+(?:\.\d+)?(?:-[\w.]+)?)", text, re.I)))[:10]
    title_match = re.search(r"<title[^>]*>(.*?)</title>", text, re.I | re.S)
    title = re.sub(r"\s+", " ", title_match.group(1)).strip()[:160] if title_match else None
    compact = re.sub(r"\s+", " ", text)
    markers = [
        marker
        for marker in ["Coolify", "Login", "Unauthenticated", "Invalid token", "OK", "No available server"]
        if marker.lower() in compact.lower()
    ]
    return {
        "status": status,
        "final_url": final_url,
        "content_type": headers.get("content-type") if headers else None,
        "server": headers.get("server") if headers else None,
        "location": headers.get("location") if headers else None,
        "title": title,
        "markers": markers,
        "domains": domains,
        "versions": versions,
    }


def fetch_json(url: str, timeout: int = 25) -> Any:
    req = urllib.request.Request(url, headers={"User-Agent": "mecangroup-deployment-diagnostic/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as response:
        return json.load(response)


def certificate_summary() -> dict[str, Any]:
    result: dict[str, Any] = {}
    try:
        command = (
            f"timeout 15 openssl s_client -connect {HOST}:443 -servername {HOST} -showcerts </dev/null 2>/dev/null "
            "| openssl x509 -noout -subject -issuer -dates -ext subjectAltName"
        )
        completed = subprocess.run(["bash", "-lc", command], check=False, capture_output=True, text=True, timeout=20)
        result["default_certificate"] = completed.stdout.strip().splitlines()[:30]
    except Exception as exc:  # noqa: BLE001
        result["default_certificate_error"] = f"{type(exc).__name__}: {exc}"
    return result


def certificate_transparency() -> dict[str, Any]:
    candidates = [f"{HOST}.sslip.io", f"{HOST.replace('.', '-')}.sslip.io", f"{HOST}.nip.io"]
    discovered: set[str] = set()
    errors: list[str] = []
    for parent in candidates:
        endpoints = [
            "https://api.certspotter.com/v1/issuances?"
            + urllib.parse.urlencode({"domain": parent, "include_subdomains": "true", "expand": "dns_names"}),
            "https://crt.sh/?" + urllib.parse.urlencode({"q": f"%.{parent}", "output": "json"}),
        ]
        for endpoint in endpoints:
            try:
                payload = fetch_json(endpoint)
                if isinstance(payload, list):
                    for row in payload:
                        if not isinstance(row, dict):
                            continue
                        values = row.get("dns_names") or []
                        if isinstance(values, str):
                            values = [values]
                        common_name = row.get("common_name")
                        if isinstance(common_name, str):
                            values.append(common_name)
                        name_value = row.get("name_value")
                        if isinstance(name_value, str):
                            values.extend(name_value.splitlines())
                        for value in values:
                            if isinstance(value, str) and any(suffix in value for suffix in ("sslip.io", "nip.io")):
                                discovered.add(value.strip().lower())
            except Exception as exc:  # noqa: BLE001
                errors.append(f"{parent}: {urllib.parse.urlparse(endpoint).netloc}: {type(exc).__name__}: {exc}")
    return {"dns_names": sorted(discovered)[:200], "errors": errors[:10]}


def main() -> None:
    output: dict[str, Any] = {"host": HOST}

    ports: dict[str, str] = {}
    for port in PORTS:
        try:
            with socket.create_connection((HOST, port), timeout=5):
                ports[str(port)] = "open"
        except ConnectionRefusedError:
            ports[str(port)] = "refused"
        except TimeoutError:
            ports[str(port)] = "timeout_or_filtered"
        except OSError as exc:
            ports[str(port)] = f"error:{type(exc).__name__}:{exc}"
    output["ports"] = ports

    try:
        output["reverse_dns"] = socket.gethostbyaddr(HOST)[0]
    except Exception as exc:  # noqa: BLE001
        output["reverse_dns"] = f"error:{type(exc).__name__}:{exc}"

    panel_paths = [
        "/",
        "/login",
        "/api/health",
        "/api/v1/health",
        "/api/v1/version",
        "/api/v1/teams",
        "/api/v1/applications",
        "/api/v1/resources",
        "/mcp",
    ]
    output["panel"] = {path: http_get(f"http://{HOST}:8000{path}") for path in panel_paths}

    output["proxy_ip"] = {
        "http": http_get(f"http://{HOST}/"),
        "https": http_get(f"https://{HOST}/"),
    }

    candidate_hosts = [
        f"coolify.{HOST}.sslip.io",
        f"mecangroup.{HOST}.sslip.io",
        f"mecangroup-guncel.{HOST}.sslip.io",
        f"app.{HOST}.sslip.io",
        f"coolify.{HOST.replace('.', '-')}.sslip.io",
        f"mecangroup.{HOST.replace('.', '-')}.sslip.io",
    ]
    output["candidate_hosts"] = {
        name: {
            "http": http_get(f"http://{HOST}/", host_header=name),
            "https": http_get(f"https://{HOST}/", host_header=name),
        }
        for name in candidate_hosts
    }

    output["certificate"] = certificate_summary()
    output["certificate_transparency"] = certificate_transparency()

    try:
        payload = fetch_json(f"https://api.check-host.cc/ip/{HOST}")
        data = payload.get("data") if isinstance(payload, dict) else None
        output["public_ip_intelligence"] = {
            "ptr": data.get("ptr") if isinstance(data, dict) else None,
            "open_ports": data.get("open_ports") if isinstance(data, dict) else None,
            "tls_certs": data.get("tls_certs") if isinstance(data, dict) else None,
            "domains": data.get("domains") if isinstance(data, dict) else None,
            "tech_stack": data.get("tech_stack") if isinstance(data, dict) else None,
        }
    except Exception as exc:  # noqa: BLE001
        output["public_ip_intelligence_error"] = f"{type(exc).__name__}: {exc}"

    print(json.dumps(output, indent=2, ensure_ascii=False, sort_keys=True))


if __name__ == "__main__":
    main()

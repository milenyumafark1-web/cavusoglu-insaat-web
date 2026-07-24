import { useEffect, useState } from "react";

const words = ["uygulama gücü.", "saha deneyimi.", "kalite taahhüdü."];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(words[0]);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">(
    "waiting",
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const word = words[index];

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("deleting"), 3000);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed.length === 0) {
        setIndex((index + 1) % words.length);
        setPhase("typing");
        return;
      }
      const t = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        40,
      );
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (displayed.length === word.length) {
        setPhase("waiting");
        return;
      }
      const t = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        70,
      );
      return () => clearTimeout(t);
    }
  }, [displayed, phase, index]);

  return (
    <>
      {displayed}
      <span className="inline-block w-[2px] bg-[#d4b071] animate-pulse">
        &nbsp;
      </span>
    </>
  );
}

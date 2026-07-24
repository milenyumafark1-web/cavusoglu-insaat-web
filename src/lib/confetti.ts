export function fireConfetti() {
  const colors = ["#d4b071", "#e2c38e", "#9b6f2e", "#f5f1e9", "#191b18"];
  const container = document.createElement("div");
  container.style.cssText =
    "position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;";
  document.body.appendChild(container);

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    const size = Math.random() * 8 + 4;
    const x = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 1.5 + 1.5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const rotation = Math.random() * 360;

    piece.style.cssText = `
      position:absolute;
      left:${x}%;
      top:-10px;
      width:${size}px;
      height:${size * 0.6}px;
      background:${color};
      transform:rotate(${rotation}deg);
      animation:confetti-fall ${duration}s ${delay}s ease-in forwards;
    `;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 3500);
}

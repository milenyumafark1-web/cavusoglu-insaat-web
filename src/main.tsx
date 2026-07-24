import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Image protection
document.addEventListener("contextmenu", (e) => {
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault();
  }
});

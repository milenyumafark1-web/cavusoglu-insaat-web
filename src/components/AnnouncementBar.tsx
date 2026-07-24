import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[51] bg-[#9b6f2e] px-10 py-2.5 text-center text-[0.7rem] font-semibold tracking-wide text-white">
      <span>
        Yeni proje: <strong>Amasya Suluova 256 Konut</strong> başlatıldı
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/70 transition-colors hover:text-white"
        aria-label="Duyuruyu kapat"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

import { useEffect } from "react";

export default function KoFiWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("agustinxyz", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Donate",
          "floating-chat.donateButton.background-color": "#794bc4",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No renderiza nada, solo ejecuta el script
}

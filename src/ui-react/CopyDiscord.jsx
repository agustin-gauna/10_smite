import { useState } from "react";

const discordUser = "akapatro";

export default function CopyDiscord() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(discordUser);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <span className="relative">
      <span
        onClick={copyToClipboard}
        className="text-purple-400 cursor-pointer hover:text-purple-500 transition-all duration-300 ease-in-out font-bold"
      >
        Hacé click
      </span>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-7 bg-purple-400 text-white text-sm px-2 py-1 rounded-md shadow-lg transition-all duration-300 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-5px]"
        }`}
      >
        ¡Copiado!
      </div>
    </span>
  );
}

"use client";

import { useState } from "react";
import outlineIcons from "@/components/icons/outline";
import solidIcons from "@/components/icons/solid";

const email = "ahmed.magdy.1138@gmail.com";

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copied) {
      try {
        // Try using the clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for unsupported environments
          const textarea = document.createElement("textarea");
          textarea.value = email;
          textarea.style.position = "absolute";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      } catch (err) {
        console.error("Failed to copy the email:", err);
      }
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex-center gap-2 rounded-xl bg-gray-950 px-6 py-3 text-sm text-gray-100 transition-colors duration-[350ms] hover:bg-gray-800"
    >
      {copied ? <solidIcons.Check /> : <outlineIcons.Copy />}
      {copied ? "Email copied!" : "Copy my email address"}
    </button>
  );
}

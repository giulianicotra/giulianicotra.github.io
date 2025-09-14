"use client";
import { useState, useEffect } from "react";
import i18n from "@/app/i18n/config";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(null); // inizialmente null per SSR

  useEffect(() => {
    setLang(i18n.language || "EN"); // imposta la lingua solo sul client
  }, []);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  // Evita il render finché la lingua non è definita
  if (!lang) return null;

  return (
    <div className="flex items-center gap-1 select-none">
      <button
        onClick={() => changeLang("EN")}
        className={`transition-colors duration-200 px-1 ${
          lang === "EN" ? "text-white" : "text-white/60"
        }`}
        style={{ mixBlendMode: "difference" }}
      >
        EN
      </button>
      <span
        className="mx-1 text-white/60"
        style={{ mixBlendMode: "difference" }}
      >
        |
      </span>
      <button
        onClick={() => changeLang("IT")}
        className={`transition-colors duration-200 px-1 ${
          lang === "IT" ? "text-white" : "text-white/60"
        }`}
        style={{ mixBlendMode: "difference" }}
      >
        ITA
      </button>
    </div>
  );
}

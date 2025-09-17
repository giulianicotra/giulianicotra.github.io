"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent select-none"
      style={{ height: "64px" }}
    >
      <div className="relative w-full h-full" style={{ height: "64px" }}>
        {/* Logo a sinistra */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <a href="/">
            <img
              src="/logo_orizzontale_b-small.webp"
              alt="NICO logo"
              className="w-16 h-auto mix-blend-difference"
            />
          </a>
        </div>

        {/* Menu centrale (solo desktop) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 text-white text-sm font-bold mix-blend-difference">
          <a
            href="#about"
            className="transition-colors duration-200 text-white/50 hover:text-white cursor-pointer"
            style={{ mixBlendMode: "difference" }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("navbar.about")}
          </a>
          <a
            href="#projects"
            className="transition-colors duration-200 text-white/50 hover:text-white cursor-pointer"
            style={{ mixBlendMode: "difference" }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#contact"
            className="transition-colors duration-200 text-white/50 hover:text-white cursor-pointer"
            style={{ mixBlendMode: "difference" }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("navbar.contact")}
          </a>
        </nav>

        {/* Language Switcher a destra (desktop) */}
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 gap-2 items-center text-white text-xs font-light mix-blend-difference">
          <LanguageSwitcher />
        </div>

        {/* Bottone hamburger (mobile) */}
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white mix-blend-difference z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Overlay menu mobile */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col justify-center items-center gap-8 text-lg z-40">
            <a
              href="#about"
              className="text-white hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.about")}
            </a>
            <a
              href="#projects"
              className="text-white hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.projects")}
            </a>
            <a
              href="#contact"
              className="text-white hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.contact")}
            </a>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </header>
  );
}

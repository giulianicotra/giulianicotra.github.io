"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionAbout() {
  const { t } = useTranslation();

  // -------------------------
  // GSAP Animazioni
  // -------------------------
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reset",
        },
      });

      tl.fromTo(".about-giulia", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(".about-img", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "+=0.1")
        .fromTo(".about-text", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 }, "+=0.1");

      const handleAboutClick = (e) => {
        if (
          e.target.matches('a[href="#about"]') ||
          (e.target.closest && e.target.closest('a[href="#about"]'))
        ) {
          tl.progress(0).play();
        }
      };
      document.addEventListener("click", handleAboutClick);
      return () => document.removeEventListener("click", handleAboutClick);
    });
    return () => ctx.revert();
  }, []);

  // -------------------------
  // JSX
  // -------------------------
  return (
    <section
      id="about"
      className="about-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Contenuto principale */}
      <div className="relative w-full max-w-5xl px-4 flex flex-col items-center scale-75">
        {/* Titolo */}
        <h2
          className="text-6xl font-medium relative mb-4 about-giulia"
          style={{ fontFamily: "Open Sauce Sans, sans-serif", zIndex: 10 }}
        >
          Giulia
        </h2>

        {/* Immagine */}
        <div
          className="w-80 h-80 bg-gray-300 flex items-center justify-center -mt-7 rounded-md shadow-lg relative mb-2 about-img"
          style={{ border: "0px solid #222", boxShadow: "0 8px 32px rgba(0,0,0,0.25)", zIndex: 20 }}
        >
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" fill="#e5e5e5" />
            <rect x="4" y="14" width="16" height="6" rx="3" fill="#e5e5e5" />
          </svg>
        </div>

        {/* Testo */}
        <p
          className="text-center w-full text-lg -mt-7 mb-6 relative about-text"
          style={{
            fontFamily: "Open Sauce Sans, sans-serif",
            background: "rgba(0,0,0,0.0)",
            zIndex: 30,
            maxWidth: "100%",
          }}
        >
          {t("about.bio")}
        </p>

        {/* CV */}
        <a
          href={t("about.cvHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-lg text-white text-lg font-bold transition-transform duration-300 hover:scale-105 animate-pulse-custom"
          style={{
            fontFamily: "Open Sauce Sans, sans-serif",
            backgroundColor: "#8a2be2",
            boxShadow: "0 0 16px #8a2be2, 0 0 32px #fff0, 0 0 8px #8a2be2",
            textShadow: "0 0 8px #fff, 0 0 16px #8a2be2",
            zIndex: 30,
          }}
        >
          {t("about.cv")}
        </a>
      </div>

      {/* Freccia di scroll */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl animate-bounce z-30 text-white hidden lg:block"
        style={{ filter: "drop-shadow(0 0 8px #fff)" }}
        onClick={() => {
          const el = document.querySelector("#projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to projects"
      >
        ↓
      </button>
    </section>
  );
}

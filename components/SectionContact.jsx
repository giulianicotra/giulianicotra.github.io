"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionContact() {
  // -------------------------
  // Refs
  // -------------------------
  const videoRef = useRef(null);

  // -------------------------
  // Stati
  // -------------------------
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // -------------------------
  // Traduzione
  // -------------------------
  const { t } = useTranslation();

  // -------------------------
  // Neon color
  // -------------------------
  const neonColor = "rgb(200, 50, 50)";

  // -------------------------
  // Rileva mobile
  // -------------------------
  useEffect(() => {
    const mobile = typeof window !== "undefined" && window.innerWidth <= 768;
    setIsMobile(mobile);
  }, []);

  // -------------------------
  // GSAP Animazioni e scrollTrigger
  // -------------------------
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reset",
          onEnter: () => {
            if (videoRef.current && !isMobile) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          }
        },
      });

      tl.fromTo(".contact-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(".contact-button", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "+=0.1")
        .fromTo(".contact-links", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "+=0.1");

      const handleContactClick = (e) => {
        if (
          e.target.matches('a[href="#contact"]') ||
          (e.target.closest && e.target.closest('a[href="#contact"]'))
        ) {
          if (videoRef.current && !isMobile) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
          if (tl) tl.progress(0).play();
        }
      };

      document.addEventListener("click", handleContactClick);
      return () => document.removeEventListener("click", handleContactClick);
    });
    return () => ctx.revert();
  }, [isMobile]);

  // -------------------------
  // Tap-to-play per mobile
  // -------------------------
  const handleTapPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setHasPlayed(true);
    }
  };

  // -------------------------
  // JSX
  // -------------------------
  return (
    <section
      id="contact"
      className="contact-section relative min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-4"
    >
      {/* Titolo e bottone */}
      <div className="flex flex-col items-center">
        <h2 className="contact-title text-3xl sm:text-4xl text-center -mb-2">
          {t("contact.interested")}
        </h2>
        <a
          href="mailto:giulia11nico@gmail.com"
          className="contact-button px-6 py-2 text-white text-base tracking-wider rounded-lg animate-pulse-custom transition-transform duration-300 hover:scale-105"
          style={{
            fontFamily: "Open Sauce Sans, sans-serif",
            backgroundColor: neonColor,
            boxShadow: `0 0 16px ${neonColor}, 0 0 32px #fff0, 0 0 8px ${neonColor}`,
            textShadow: `0 0 8px #fff, 0 0 16px ${neonColor}`,
          }}
        >
          {t("contact.emailMe")}
        </a>
      </div>

      {/* Video */}
      <div className="relative w-full max-w-sm aspect-video bg-neutral-900 border-neutral-700 flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={"/main.mp4"}
          muted
          playsInline
          autoPlay={!isMobile}
          className="w-full h-full object-cover"
        />
        {/* Overlay tap-to-play per mobile */}
        {isMobile && !hasPlayed && (
          <div
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer bg-black/50"
            onClick={handleTapPlay}
          />
        )}
      </div>

      {/* Link social */}
      <div className="contact-links absolute bottom-20 flex gap-4">
        <a
          href="http://www.linkedin.com/in/nicogiulia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-white/60">·</span>
        <a
          href="https://www.instagram.com/nicovol.2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          Instagram
        </a>
        <span className="text-white/60">·</span>
        <a
          href="https://vimeo.com/user132547346?fl=pp&fe=sh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          Vimeo
        </a>
      </div>
    </section>
  );
}

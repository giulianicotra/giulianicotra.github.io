"use client";
import { useEffect, useRef, useState } from "react";
import Slideshow from "./Slideshow";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionProjects() {
  // -------------------------
  // Stati
  // -------------------------
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // -------------------------
  // Refs
  // -------------------------
  const teaserRef = useRef(null);
  const mainVideoRef = useRef(null);

  // -------------------------
  // Traduzione
  // -------------------------
  const { t } = useTranslation();

  // -------------------------
  // Costanti
  // -------------------------
  const neonColor = "rgb(18, 113, 255)";

  const arkeSlides = [
    { type: "image", src: "/ar/1.webp", duration: 5000 },
    { type: "image", src: "/ar/2.webp", duration: 5000 },
    { type: "image", src: "/ar/3.webp", duration: 5000 },
    { type: "image", src: "/ar/4.webp", duration: 5000 },
    { type: "image", src: "/ar/5.webp", duration: 5000 },
    { type: "image", src: "/ar/6.webp", duration: 5000 },
    { type: "image", src: "/ar/7.webp", duration: 5000 },
    { type: "image", src: "/ar/8.webp", duration: 5000 },
  ];

  const oltreSlides = [
    { type: "image", src: "/oltre/image00003.webp", duration: 5000 },
    { type: "image", src: "/oltre/image00011.webp", duration: 5000 },
    { type: "image", src: "/oltre/screen.webp", duration: 5000 },
    { type: "image", src: "/oltre/000463590021.webp", duration: 5000 },
    { type: "image", src: "/oltre/100_0738.webp", duration: 5000 },
    { type: "image", src: "/oltre/000463590026.webp", duration: 5000 },
  ];

  // -------------------------
  // Gestione Mobile
  // -------------------------
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // -------------------------
  // GSAP Animazioni
  // -------------------------
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reset",
        },
      }).from(".project-item", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.7,
      });
    });
    return () => ctx.revert();
  }, []);

  // -------------------------
  // Gestione video teaser
  // -------------------------

  // Tap-to-play mobile
  const handleTapPlay = () => {
    if (teaserRef.current) {
      teaserRef.current.play().catch((err) => console.warn("Play failed:", err));
      setShowPoster(false);
      setHasPlayed(true);
    }
  };

  // -------------------------
  // JSX
  // -------------------------
  return (
    <section id="projects" className="projects-section relative min-h-screen bg-black text-white overflow-hidden">

      {/* --------------------- Video Background --------------------- */}
      <a
        href="https://vimeo.com/1114303813"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-screen z-0 block"
      >
        <iframe
          src="https://player.vimeo.com/video/1114303813?h=851b2e2d93&autoplay=1&loop=1&muted=1&playsinline=1&title=0&byline=0&portrait=0&background=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Sound Choreographies"
          className="w-full h-full object-cover pointer-events-none"
        />
      </a>

      {/* --------------------- Contenuto principale --------------------- */}
      <div className="relative z-10 -mt-52" style={{ fontFamily: "Open Sauce Sans, sans-serif" }}>
        {/* Titolo e sottotitolo */}
        <div className="w-full relative px-12 py-16">
          <h2 className="text-5xl font-medium mb-2">{t("projects.project1.title")}</h2>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="w-full md:w-1/3 pr-8 mb-8 md:mb-0 relative z-10">
              <p className="text-sm text-white/80">{t("projects.project1.subtitle")}</p>
            </div>
            <div className="w-full md:w-2/3 relative z-10">
              <p className="text-base text-white/80 mb-4">{t("projects.project1.description")}</p>
              <a
                href="https://dev.epicgames.com/community/learning/tutorials/EP72/fortnite-epic-games-store-sonifying-motion-in-unreal-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-white text-base tracking-wider rounded-lg mt-4 inline-block animate-pulse-custom transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: neonColor,
                  boxShadow: `0 0 16px ${neonColor}, 0 0 32px #fff0, 0 0 8px ${neonColor}`,
                  textShadow: `0 0 8px #fff, 0 0 16px ${neonColor}`,
                }}
              >
                {t("projects.project1.tutorial")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- Progetto AR/kè --------------------- */}
      <div className="bg-black p-4 min-h-screen" style={{ fontFamily: "Open Sauce Sans, sans-serif" }}>
        <div className="project-item flex flex-col items-center justify-center mt-16 px-12">
          <div className="w-full max-w-2xl aspect-[5/4] bg-neutral-800 flex items-center justify-center rounded-sm mb-8 overflow-hidden z-0">
            <Slideshow slides={arkeSlides} />
          </div>
          <div className="w-full max-w-5xl text-center -mt-32 z-10">
            <h2 className="text-3xl font-medium mb-4">AR/kè</h2>
            <p className="text-base text-white/80" dangerouslySetInnerHTML={{ __html: t("projects.project2.description") }} />
            <ul className="text-sm text-white/80 mt-4 list-disc list-inside inline-block text-left">
              <li>{t("projects.project2.listItems.0")}</li>
              <li>{t("projects.project2.listItems.1")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --------------------- Progetto Oltre l'intreccio della mente --------------------- */}
      <section id="oltrelintreccio" className="relative bg-black text-white overflow-hidden" style={{ fontFamily: "Open Sauce Sans, sans-serif" }}>
        <Slideshow slides={oltreSlides} />
        <div className="relative z-10 px-4 -mt-52">
          <div className="w-full relative px-12 py-16">
            <h2 className="text-5xl font-medium mb-2">Oltre l'intreccio della mente</h2>
            <div className="flex flex-col md:flex-row mt-4">
              <div className="w-full md:w-1/3 pr-8 mb-8 md:mb-0 relative z-10">
                <p className="text-sm text-white/60">{t("projects.project3.subtitle")}</p>
              </div>
              <div className="w-full md:w-2/3 relative z-10">
                <p className="text-base text-white/80 mb-4" dangerouslySetInnerHTML={{ __html: t("projects.project3.description") }} />
                <ul className="text-sm text-white/80 mt-4 list-disc list-inside inline-block text-left">
                  <li>{t("projects.project3.listItems.0")}</li>
                  <li>{t("projects.project3.listItems.1")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video teaser */}
        <div className="relative w-full max-w-xl aspect-[9/16] rounded-sm mx-auto overflow-hidden bg-neutral-800 cursor-pointer">
          <video
            ref={teaserRef}
            src={"/oltre/oltreteaser.mp4"}
            className="absolute top-1/2 left-1/2 w-full h-full max-w-full max-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            muted
            playsInline
            loop
            autoPlay={!isMobile}
            controls={false}
          />
          {isMobile && !hasPlayed && <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer bg-black/50" onClick={handleTapPlay} />}
          <span className="text-white text-lg">▶</span></div>
      </section>

      {/* --------------------- Progetto Synthetic Sound Generator --------------------- */}
      <section id="synthetic-sound-generator" className="relative bg-black text-white py-48" style={{ fontFamily: "Open Sauce Sans, sans-serif" }}>
        <div className="flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-2xl aspect-video bg-neutral-800 flex items-center justify-center rounded-sm mb-8 overflow-hidden mx-auto">
            <video
              ref={mainVideoRef}
              src={isMobile ? "/soundgenerator_mobile.mp4" : "/soundgenerator.mp4"}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop={false}
              controls
            />
          </div>
          <div className="w-full max-w-3xl text-center px-4">
            <h2 className="text-3xl font-medium mb-2">{t("projects.project4.title")}</h2>
            <p className="text-sm text-white/60 mb-2">2023</p>
            <p className="text-base text-white/80 leading-relaxed">{t("projects.project4.description")}</p>
          </div>
        </div>
      </section>

      {/* --------------------- Sezione progetti intermedi --------------------- */}
      <section
        id="mid-projects"
        className="relative bg-black text-white py-24"
        style={{ fontFamily: "Open Sauce Sans, sans-serif" }}
      >
        <div className="max-w-6xl mx-auto px-4">  

          {/* Spazio prima della griglia */}
          <div className="h-24"></div> 

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ReCa(be)ria */}
            <div className="project-item flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-medium mb-1">{t("projects.othproj1.title")}</h3>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj1.subtitle1")}</h4>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj1.subtitle2")}</h4>
              <p className="text-sm text-white/80">{t("projects.othproj1.description")}</p>
            </div>

            {/* Addiction */}
            <div className="project-item flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-medium mb-1">Addiction</h3>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj2.subtitle1")}</h4>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj2.subtitle2")}</h4>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj2.subtitle3")}</h4>
              <p className="text-sm text-white/80">{t("projects.othproj2.description")}</p>
            </div>

            {/* Argerich */}
            <div className="project-item flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-medium mb-1">Argerich</h3>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj3.subtitle1")}</h4>
              <h4 className="text-sm text-white/60 mb-2">{t("projects.othproj3.subtitle2")}</h4>
              <p className="text-sm text-white/80" dangerouslySetInnerHTML={{ __html: t("projects.othproj3.description") }}></p>
            </div>

          </div>

          {/* Spazio dopo la griglia */}
          <div className="h-24"></div>

        </div>
      </section>

      {/* --------------------- Freccia finale --------------------- */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl animate-bounce z-30 text-white hidden lg:block"
        style={{ filter: "drop-shadow(0 0 8px #fff)" }}
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to contact section"
      >
        ↓
      </button>
    </section>
  );
}

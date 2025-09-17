"use client";
import { useRef, useEffect } from "react";
import "./style.scss";


export default function Hero() {
  useEffect(() => {
    // Aggiungi un riferimento al contenitore del gradiente
    const gradientsContainer = document.querySelector(".gradients-container");

    if (gradientsContainer) {
      gradientsContainer.classList.remove("hidden-initially");
    }

    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      document.body.classList.add("is-firefox");
    }

    // Rimuovi la classe che nasconde l'elemento dopo il controllo
    if (gradientsContainer) {
      gradientsContainer.style.opacity = '1';
    }

    let curX = 0, curY = 0;
    let tgX = 0, tgY = 0;

    const interBubble = document.querySelector(".interactive");
    if (!interBubble) return;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }
    move();

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Sfondo gradiente */}
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 20 -10
                "
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container hidden-initially">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>


          {/* Logo centrale con effetto neon ridotto e senza grassetto */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src="/nico_eff_w.png"
            alt="NICO Logo"
            className="w-[30vw] max-w-[400px] opacity-90 select-none pointer-events-none"
            style={{
              filter: 'drop-shadow(0 0 2px #fff) drop-shadow(0 0 0px #fff)'
            }}
          />
        </div>
        {/* Freccia animata */}
        <button
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl animate-bounce z-10 text-white hidden lg:block"
            style={{ filter: 'drop-shadow(0 0 8px #fff)' }}
            onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll down"
        >
            ↓
        </button>
    </section>
  );
}
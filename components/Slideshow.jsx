"use client";
import { useEffect, useRef, useState } from "react";

export default function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const [isVideoBlocked, setIsVideoBlocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const currentSlide = slides[currentIndex];
    let timer;

    if (currentSlide.type === "video" && videoRefs.current[currentIndex]) {
      const video = videoRefs.current[currentIndex];

      video.currentTime = 0;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoBlocked(false))
          .catch(() => setIsVideoBlocked(true));
      }

      timer = setTimeout(() => nextSlide(), currentSlide.duration);
    } else {
      timer = setTimeout(() => nextSlide(), currentSlide.duration);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false;
      video.play();
      setIsVideoBlocked(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 flex items-center justify-center bg-black relative"
            style={{ width: `${100 / slides.length}%` }}
          >
            {slide.type === "video" ? (
              <>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
                {isVideoBlocked && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 bg-black/30"
                    onClick={() => handleVideoClick(index)}
                  >
                  </div>
                )}
              </>
            ) : (
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

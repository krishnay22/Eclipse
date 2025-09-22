"use client";

import { useEffect, useRef, useState } from "react";
import video from "../../public/video/immersive.mp4";

const FontEclipseMasking = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Add styles to hide scrollbar globally
    const style = document.createElement("style");
    style.textContent = `
      /* Hide scrollbar for webkit browsers (Chrome, Safari) */
      ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
      
      /* Hide scrollbar for Firefox */
      html {
        scrollbar-width: none;
      }
      
      /* Ensure scroll functionality remains */
      body {
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
      }
    `;
    document.head.appendChild(style);
    // Load Google Font
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Check if GSAP is already loaded
    if (window.gsap && window.ScrollTrigger) {
      setScriptsLoaded(true);
      return;
    }

    // Load GSAP
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    const loadScripts = async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        );
        setScriptsLoaded(true);
      } catch (error) {
        console.error("Failed to load GSAP scripts:", error);
      }
    };

    loadScripts();

    return () => {
      if (fontLink && fontLink.parentNode) {
        fontLink.parentNode.removeChild(fontLink);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptsLoaded && textRef.current && containerRef.current) {
      const timer = setTimeout(() => {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger);
          window.ScrollTrigger.getAll().forEach((t) => t.kill());

          // Opposite animation: shrink text from huge to normal
          window.gsap.fromTo(
            textRef.current,
            { scale: 300 }, // start big (video fully visible)
            {
              scale: 1, // shrink to normal size (text mask appears)
              duration: 1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                refreshPriority: -1,
              },
            }
          );

          window.ScrollTrigger.refresh();
        } catch (error) {
          console.error("GSAP Animation Error:", error);
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        if (window.ScrollTrigger) {
          window.ScrollTrigger.getAll().forEach((t) => t.kill());
        }
      };
    }
  }, [scriptsLoaded]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Pinned Section */}
      <div
        ref={containerRef}
        className="relative w-full h-screen"
        style={{ fontFamily: "'Abril Fatface', serif" }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} />
        </video>

        {/* Mask Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-black flex justify-center items-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <h2
            ref={textRef}
            className="text-8xl font-normal select-none whitespace-nowrap text-white"
            style={{
              fontSize: "180px",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            Eclipse
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FontEclipseMasking;

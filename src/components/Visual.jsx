import React, { useEffect, useRef } from "react";
import video from "../../public/video/eye.mp4";

function Visual() {
  const videoRef = useRef(null);
  const hasPlayedRef = useRef(false); // ✅ track if video already played once

  useEffect(() => {
    const videoEl = videoRef.current;

    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio === 1 &&
            !hasPlayedRef.current
          ) {
            videoEl.play();
            hasPlayedRef.current = true; // ✅ mark as played
          }
        });
      },
      { threshold: 1.0 } // ✅ only when 100% visible
    );

    observer.observe(videoEl);

    return () => {
      if (videoEl) observer.unobserve(videoEl);
    };
  }, []);

  return (
    <div className="relative h-[135vh] bg-black text-white overflow-hidden">
      {/* --- Top Section (slightly overlapping video) --- */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 w-full max-w-3xl text-center px-4">
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
          The Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Experience a new dimension of reality with{" "}
          <span className="font-semibold text-white">next-gen VR</span>.
          Immersive visuals, lifelike depth, and seamless interaction transport
          you beyond the screen — into worlds that feel real.
        </p>
      </div>

      {/* --- Video Section (Centered) --- */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          controls={false}
          className="h-[400px] object-contain"
        />
      </div>

      {/* --- Bottom Section (below video) --- */}
      <div className="absolute bottom-35 left-1/2 -translate-x-1/2 z-30 w-full max-w-3xl text-center px-4">
        {/* --- Centered Feature Highlights with bullets --- */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-lg md:text-xl text-gray-300">
          <span>360° View</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
          <span>Immersive Worlds</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
          <span>Seamless Motion</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
          <span>Spatial Audio</span>
        </div>
      </div>
    </div>
  );
}

export default Visual;

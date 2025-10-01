import { useEffect, useRef, useState } from "react";

export default function AutoPlayVideo() {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Video autoplay was prevented:", error);
      });
    }

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-black h-screen min-h-screen flex items-start justify-center pt-8 md:pt-0">
        <section
          className="w-[95%] md:w-[85%] lg:w-[75%] h-[60vh] md:h-[75vh] lg:h-[83vh]"
          style={{
            position: "relative",
            background: "#000",
          }}
        >
          <video
            ref={videoRef}
            src="/video/Vr.mp4"
            muted
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            aria-label="An auto-playing video of a virtual reality experience"
          />
        </section>
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            opacity: showContent ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        >
          {/* Neon Text */}
          <h2
            className="text-xl md:text-2xl lg:text-3xl px-4"
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "600",
              textShadow: "0 0 10px #fff, 0 0 20px #fff",
            }}
          >
            Vision Of The Future.
          </h2>

          {/* Button */}
          <button
            className="
              bg-transparent           
              border border-white      
              text-white
              text-sm md:text-base                 
              font-bold                  
              uppercase                  
              tracking-wider             
              py-2 px-6 md:py-3 md:px-8                  
              rounded-full               
              transition-colors          
              duration-300               
              ease-in-out                
              hover:bg-white             
              hover:text-black           
            "
          >
            Buy
          </button>
        </div>
      </div>
      <div className="bg-black w-full h-20"></div>
    </>
  );
}

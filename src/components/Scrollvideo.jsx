import { useEffect, useRef, useState } from "react";

export default function AutoPlayVideo() {
  const videoRef = useRef(null);
  // ✅ 1. State to control the visibility of the content
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Video autoplay was prevented:", error);
      });
    }

    // ✅ 2. Set a timer to show the content after 6 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6000); // 6000 milliseconds = 6 seconds

    // ✅ 3. Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array [] ensures this effect runs only once.

  return (
    <>
      <div className="bg-black h-screen min-h-screen flex items-start justify-center">
        <section
          style={{
            position: "relative",
            width: "75%",
            height: "83vh",
            background: "#000",
          }}
        >
          <video
            ref={videoRef}
            src="/video/Vr.mp4"
            // ✅ Muted is essential for autoplay to work in most browsers.
            muted
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            aria-label="An auto-playing video of a virtual reality experience"
          />
        </section>
        <div
          style={{
            // Positioning for the whole group
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            // Layout for items inside (text and button)
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem", // Space between the text and the button
            // Fade-in animation logic
            opacity: showContent ? 1 : 0, // Controlled by state
            transition: "opacity 2s ease-in-out", // Smooth transition
          }}
        >
          {/* Neon Text */}
          <h2
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: "1.8rem",
              fontWeight: "600",
              textShadow: " 0 0 10px #fff, 0 0 20px #fff",
            }}
          >
            Vision Of The Future.
          </h2>

          {/* Tailwind CSS Button */}
          <button
            className="
              bg-transparent           
              border-1 border-white      
              text-white                 
              font-bold                  
              uppercase                  
              tracking-wider             
              py-3 px-8                  
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

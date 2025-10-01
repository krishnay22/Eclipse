import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import image from "../../public/image/image01.png";
import image1 from "../../public/image/image03.png";
import image2 from "../../public/image/image04.png";
import image3 from "../../public/image/image05.png";
import image4 from "../../public/image/image06.png";

const AppleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);

  // State for swipe/drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const carouselRef = useRef(null);
  const wheelTimeoutRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: image,
      background: "bg-gradient-to-br from-gray-900 to-black",
    },
    {
      id: 2,
      image: image1,
      background: "bg-gradient-to-br from-gray-900 to-black",
    },
    {
      id: 3,
      image: image2,
      background: "bg-gradient-to-br from-purple-900 to-black",
    },
    {
      id: 4,
      image: image3,
      background: "bg-gradient-to-br from-blue-900 to-black",
    },
    {
      id: 5,
      image: image4,
      background: "bg-gradient-to-br from-green-900 to-black",
    },
  ];

  // --- Carousel Logic ---
  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  // --- Auto Play (only if in view) ---
  useEffect(() => {
    let interval;
    if (isPlaying && isInView) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isInView, nextSlide]);

  // --- Keyboard Navigation ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // --- Wheel Navigation ---
  useEffect(() => {
    const handleWheel = (e) => {
      if (wheelTimeoutRef.current) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        setIsPlaying(false);
        if (e.deltaX > 20) nextSlide();
        else if (e.deltaX < -20) prevSlide();
        wheelTimeoutRef.current = setTimeout(() => {
          wheelTimeoutRef.current = null;
        }, 500);
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    return () => {
      if (carouselElement)
        carouselElement.removeEventListener("wheel", handleWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [nextSlide, prevSlide]);

  // --- Intersection Observer (70%) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    );

    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  // --- Drag/Swipe ---
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setIsPlaying(false);
  };
  const handleDragMove = () => {
    if (!isDragging) return;
  };
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <>
      <div className="bg-[#161617] w-full h-20 md:h-30"></div>
      <div
        ref={carouselRef}
        className="relative w-full min-h-screen bg-[#161617] overflow-hidden select-none font-sans"
      >
        {/* Header */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-[80px] z-20 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#8a8a8a] mb-4 md:mb-6">
            Get the highlights.
          </h1>
        </div>

        {/* Slides */}
        <div
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex items-start pt-20 sm:pt-24 md:pt-32 pl-4 sm:pl-8 md:pl-[80px] transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide *
                (window.innerWidth < 640
                  ? window.innerWidth * 0.85
                  : window.innerWidth < 768
                  ? 280
                  : 330)
              }px)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-shrink-0 transition-all duration-500"
                style={{
                  width:
                    window.innerWidth < 640
                      ? `${window.innerWidth * 0.8}px`
                      : window.innerWidth < 768
                      ? "260px"
                      : "420px",
                  marginRight: window.innerWidth < 640 ? "20px" : "20px",
                  opacity: currentSlide === index ? 1 : 0.5,
                }}
              >
                <div className="w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div
        className={`fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 sm:gap-4 md:gap-6 transition-all duration-300 ease-out ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Dot Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-3 sm:px-4 sm:py-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-5 sm:w-6"
                  : "bg-white/50 hover:bg-white/70 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="bg-black/30 backdrop-blur-sm rounded-full p-2.5 sm:p-3 text-white hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          ) : (
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
          )}
        </button>
      </div>

      <div className="bg-[#161617] w-full h-20 sm:h-32 md:h-40"></div>
    </>
  );
};

export default AppleCarousel;

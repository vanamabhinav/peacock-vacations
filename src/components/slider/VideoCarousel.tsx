"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HeroSectionSlide from "./HeroSectionSlide";
import { useState, useRef, useEffect, useCallback } from "react";
import { Icon } from "../ui/Icon";
import { VideoHandle } from "../video/Video";

export default function VideoCarousel() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const videoRefs = useRef<(VideoHandle | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  const playPromises = useRef<(Promise<void> | null)[]>([]);

  // Safe video play function
  const safePlayVideo = async (index: number) => {
    const videoRef = videoRefs.current[index];
    if (!videoRef) return;

    try {
      // Wait for any pending play promise to resolve
      if (playPromises.current[index]) {
        await playPromises.current[index];
      }

      const playPromise = videoRef.play();
      playPromises.current[index] = playPromise;
      await playPromise;
    } catch (error: unknown) {
      // Ignore AbortError - it's expected when switching videos quickly
      if (error instanceof DOMException && error.name !== "AbortError") {
        console.warn("Video play error:", error);
      }
    } finally {
      playPromises.current[index] = null;
    }
  };

  // Safe video pause function
  const safePauseVideo = async (index: number) => {
    const videoRef = videoRefs.current[index];
    if (!videoRef) return;

    try {
      // Wait for any pending play promise to resolve before pausing
      if (playPromises.current[index]) {
        await playPromises.current[index];
      }
      videoRef.pause();
    } catch (error: unknown) {
      // Ignore errors during pause
      if (error instanceof Error) {
        console.warn("Video pause error:", error.message);
      }
    } finally {
      playPromises.current[index] = null;
    }
  };

  // Toggle Mute
  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  // Initialize first video
  useEffect(() => {
    if (!isReady) return;

    const timer = setTimeout(() => {
      safePlayVideo(0);
    }, 100); // Small delay to ensure video is ready

    return () => clearTimeout(timer);
  }, [isReady]);

  // Handle Slide change
  const handleSlideChange = useCallback(async (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;

    // Pause all videos safely
    await Promise.all(
      videoRefs.current.map((_, index) => safePauseVideo(index))
    );

    // Small delay before playing new video
    setTimeout(() => {
      safePlayVideo(newIndex);
    }, 50);

    setActiveIndex(newIndex);
  }, []);

  // Slide Next when the video ends
  const handleVideoEnd = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  // Handle Dot Click
  const handleDotClick = useCallback((index: number) => {
    swiperRef.current?.slideToLoop(index);
  }, []);

  // Set video ref and mark as ready
  const setVideoRef = useCallback(
    (ref: VideoHandle | null, index: number) => {
      videoRefs.current[index] = ref;

      // Mark as ready when first video ref is set
      if (index === 0 && ref && !isReady) {
        setIsReady(true);
      }
    },
    [isReady]
  );

  // Cleanup
  useEffect(() => {
    const currentVideoRefs = videoRefs.current;
    return () => {
      currentVideoRefs.forEach((_, index) => {
        safePauseVideo(index);
      });
    };
  }, []);

  const slides = [
    {
      id: "india-360",
      videoUrl:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
      title: "Incredible India 360°",
      description:
        "Experience the diverse beauty of India from every angle. Discover stunning landscapes, rich culture, and unforgettable adventures.",
      ctaText: "Explore India",
      ctaLink: "/destinations/india",
    },
    {
      id: "adventure-india",
      videoUrl:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Adventure.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop",
      title: "Adventure Awaits",
      description:
        "Embark on thrilling adventures across India's diverse terrains. From mountain peaks to river rapids, your next adventure starts here.",
      ctaText: "Book Adventure",
      ctaLink: "/destinations/adventure",
    },
    {
      id: "nature-india",
      videoUrl:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Nature.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
      title: "Nature's Paradise",
      description:
        "Immerse yourself in India's pristine natural beauty. From lush forests to serene lakes, discover untouched wilderness.",
      ctaText: "Discover Nature",
      ctaLink: "/destinations/nature",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        spaceBetween={-0.1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroSectionSlide
              ref={(ref) => setVideoRef(ref, index)}
              {...slide}
              muted={isMuted}
              onVideoEnd={handleVideoEnd}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation dots */}
      <div className="right-16 bottom-16 z-10 absolute flex space-x-2 bg-transparent">
        {slides.map((_, index) => (
          <button
            className={`rounded-full w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out ${
              activeIndex === index ? "bg-sandybrown w-8" : "bg-white"
            }`}
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mute/Unmute button */}
      <button
        className="right-16 bottom-28 z-10 absolute hover:scale-110 transition-transform duration-200 cursor-pointer"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        <Icon
          name={isMuted ? "customize/mute" : "customize/unmute"}
          className="drop-shadow-lg w-10 h-10 text-white"
        />
      </button>
    </div>
  );
}

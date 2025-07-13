"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HeroSectionSlide from "./HeroSectionSlide";
import { useState, useRef, useEffect } from "react";
import { Icon } from "../ui/Icon";
import { VideoHandle } from "../video/Video";

export default function VideoCarousel() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef<(VideoHandle | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Toggle Mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    videoRefs?.current[0]?.play();
  }, []);

  // Handle Slide change
  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    videoRefs.current.map((videoRef: VideoHandle | null) => {
      videoRef?.pause();
    });
    videoRefs.current[newIndex]?.play();
    setActiveIndex(newIndex);
  };

  // Slide Next when the video ends automatically
  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Handle Dot Click to navigate to slide
  const handleDotClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  // Cleanup each video component on unmount
  useEffect(() => {
    const currentVideoRefs = videoRefs.current;
    return () => {
      currentVideoRefs.forEach((videoRef) => {
        videoRef?.pause();
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
      {/* Slider wrapper */}
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
        {/* Slides with Each Custom Slide component */}
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <HeroSectionSlide
                ref={(ref) => {
                  videoRefs.current[index] = ref;
                }}
                {...slide}
                muted={isMuted}
                onVideoEnd={handleVideoEnd}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation dots for video carousel */}
      <div className="right-16 bottom-16 z-10 absolute flex space-x-2 bg-transparent">
        {slides.map((_, index) => {
          return (
            <button
              className={`rounded-full w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out ${
                activeIndex === index ? "bg-sandybrown w-8" : "bg-white"
              }`}
              key={index}
              onClick={() => handleDotClick(index)}
            ></button>
          );
        })}
      </div>

      {/* Button for Mute / Unmute toggle */}
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

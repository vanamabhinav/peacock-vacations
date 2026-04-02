import Link from "next/link";
import Video, { VideoHandle } from "../video/Video";

export interface HeroVideoSlide {
  videoSrc: string;
  posterUrl?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  muted: boolean;
  ref: React.Ref<VideoHandle>;
  isActive: boolean;
  onVideoEnd?: () => void;
}

function HeroSectionSlide(slide: HeroVideoSlide) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        maxHeight: "calc(100vh - 104px)",
        minHeight: "calc(100vh - 104px)",
      }}
    >
      {/* Video background */}
      <Video
        ref={slide.ref}
        muted={slide.muted}
        src={slide.videoSrc}
        isActive={slide.isActive}
        onVideoEnd={slide.onVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for darkening the video if needed */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Text content overlay */}
      <div className="absolute inset-0 flex items-center ml-8 sm:ml-16 max-w-xl lg:max-w-2xl pointer-events-auto">
        <div className="space-y-4">
          <h1 className="drop-shadow-lg font-clashdisplay font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {slide.title}
          </h1>
          <p className="opacity-90 drop-shadow-lg max-w-lg font-cabinetgrotesk text-white text-base sm:text-lg md:text-xl leading-relaxed">
            {slide.description}
          </p>
          {slide.ctaText && (
            <Link
              href={slide.ctaLink || "#"}
              className="inline-block bg-amber-400 hover:bg-amber-500 shadow-lg mt-6 px-6 py-3 rounded-lg font-inter font-semibold text-gray-900 text-sm sm:text-base transition-colors duration-300"
            >
              {slide.ctaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

HeroSectionSlide.displayName = "HeroSectionSlide";

export default HeroSectionSlide;

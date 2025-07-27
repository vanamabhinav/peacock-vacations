"use client";
import { useRef, useEffect, useImperativeHandle } from "react";

interface VideoProps {
  muted: boolean;
  src: string;
  onVideoEnd?: () => void;
  isActive: boolean;
  className?: string;
  ref: React.Ref<VideoHandle>;
}

export interface VideoHandle {
  play: () => Promise<void>;
  pause: () => void;
}

function Video({
  muted,
  src,
  onVideoEnd,
  className,
  isActive,
  ref,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    play: async () => {
      if (videoRef.current) {
        return videoRef.current.play();
      }
      return Promise.resolve();
    },
    pause: () => videoRef.current?.pause(),
  }));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onVideoEnd?.();
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onVideoEnd]);
  if (!isActive) {
    // Render a black box with the same aspect ratio as your video
    return (
      <div
        className={className}
        style={{
          background: "black",
          width: "100%",
          height: "100%",
        }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted={muted}
      playsInline
      className={className}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

Video.displayName = "Video";

export default Video;

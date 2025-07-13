"use client";
import { useRef, useEffect, useImperativeHandle } from "react";

interface VideoProps {
  muted: boolean;
  src: string;
  onVideoEnd?: () => void;
  className?: string;
  ref: React.Ref<VideoHandle>;
}

export interface VideoHandle {
  play: () => Promise<void>;
  pause: () => void;
}

function Video({ muted, src, onVideoEnd, className, ref }: VideoProps) {
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

  return (
    <video
      ref={videoRef}
      autoPlay
      muted={muted}
      playsInline
      className={className}
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

Video.displayName = "Video";

export default Video;

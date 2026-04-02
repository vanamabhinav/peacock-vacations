"use client";
import { useRef, useImperativeHandle } from "react";
import InnerVideo from "next-video";

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

  if (!isActive) {
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
    <InnerVideo
      ref={videoRef}
      autoPlay
      muted={muted}
      playsInline
      className={className}
      src={src}
      onEnded={onVideoEnd}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      controls={false}
    />
  );
}

Video.displayName = "Video";

export default Video;

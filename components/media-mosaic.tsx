"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Play } from "lucide-react";

import { MediaLightbox } from "@/components/media-lightbox";

type MosaicImage = {
  src: string;
  alt: string;
};

type MediaMosaicProps = {
  images: MosaicImage[];
  video?: {
    src: string;
    label: string;
  };
  className?: string;
};

export function MediaMosaic({ images, video, className = "" }: MediaMosaicProps) {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <div className={`grid gap-3 sm:gap-4 lg:grid-cols-12 ${className}`}>
      {images.slice(0, 6).map((image, index) => (
        <button
          type="button"
          key={image.src}
          onClick={() => setSelectedMedia({ type: "image", src: image.src, alt: image.alt })}
          aria-label={`Expand image: ${image.alt}`}
          className={`group relative min-h-44 overflow-hidden rounded-[1.5rem] bg-muted shadow-sm ring-1 ring-black/5 ${
            index === 0
              ? "col-span-2 aspect-[4/3] sm:aspect-[16/10] lg:col-span-6 lg:row-span-2 lg:aspect-auto"
              : "col-span-1 aspect-square lg:col-span-3"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
          <span className="absolute bottom-3 left-3 max-w-[85%] text-xs font-medium leading-5 text-white drop-shadow-sm">
            {image.alt}
          </span>
          <span className="absolute right-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/85 px-2 text-[10px] font-bold tracking-[0.12em] text-primary backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />
          </span>
        </button>
      ))}
      {video ? (
        <button
          type="button"
          onClick={() => setSelectedMedia({ type: "video", src: video.src, alt: video.label })}
          aria-label={`Expand video: ${video.label}`}
          className="group relative col-span-2 aspect-video overflow-hidden rounded-[1.5rem] bg-deep-green text-left shadow-sm ring-1 ring-black/5 lg:col-span-6"
        >
          <video
            src={video.src}
            playsInline
            preload="metadata"
            muted
            aria-label={video.label}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            Video
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-bright-gold text-deep-green shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </span>
          </span>
          <span className="absolute bottom-3 left-3 max-w-[75%] text-xs font-medium leading-5 text-white">
            {video.label}
          </span>
          <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white">
            <Maximize2 className="h-3.5 w-3.5" />
          </span>
        </button>
      ) : null}
      </div>
      <MediaLightbox
        open={selectedMedia !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMedia(null);
        }}
        type={selectedMedia?.type ?? "image"}
        src={selectedMedia?.src ?? ""}
        alt={selectedMedia?.alt ?? ""}
      />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import { MediaLightbox } from "@/components/media-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const media = [
  {
    type: "image" as const,
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.46.jpeg",
    alt: "Recycled bottles arranged as hanging planters",
  },
  {
    type: "image" as const,
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.47 (1).jpeg",
    alt: "A planted vertical garden tower",
  },
  {
    type: "video" as const,
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.03.mp4",
    alt: "Community garden project in progress",
  },
  {
    type: "image" as const,
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.45 (1).jpeg",
    alt: "Plants growing in a recycled container",
  },
  {
    type: "video" as const,
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.04 (2).mp4",
    alt: "Preparing soil for the garden",
  },
  {
    type: "image" as const,
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.44.jpeg",
    alt: "Seedlings in a raised growing bed",
  },
];

export function CommunityMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<(typeof media)[number] | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".media-intro", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap.from(".media-frame", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: 0.12,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-20 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-14">
      <div className="media-intro max-w-md">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">In the garden</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Small materials, practical ideas, shared work.
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          A look at the hands-on work behind the project, from preparing soil to giving reused containers a second life.
        </p>
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            aria-label="Previous project photo"
            onClick={() => swiperRef.current?.slidePrev()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next project photo"
            onClick={() => swiperRef.current?.slideNext()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="media-frame overflow-hidden rounded-[1.75rem] bg-muted">
        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true }}
          spaceBetween={12}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 2.25 },
          }}
          className="community-swiper"
        >
          {media.map((item) => (
            <SwiperSlide key={item.src}>
              <button
                type="button"
                onClick={() => setSelectedMedia(item)}
                aria-label={`Expand ${item.type}: ${item.alt}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-stone-200 text-left"
              >
                {item.type === "image" ? (
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 80vw, 38vw" className="object-cover" />
                ) : (
                  <>
                    <video
                      src={item.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      aria-label={item.alt}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white">
                      <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                    </span>
                  </>
                )}
                <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25 group-focus-visible:bg-black/25" />
                <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </section>
  );
}

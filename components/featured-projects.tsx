"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";

const projectImages = [
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.47 (1).jpeg",
    alt: "A planted vertical garden tower",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.46.jpeg",
    alt: "Recycled bottles arranged as hanging planters",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.45 (1).jpeg",
    alt: "Leafy greens growing in a reused container",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.44.jpeg",
    alt: "Seedlings growing in a raised garden bed",
  },
];

const projectVideos = [
  {
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.03.mp4",
    title: "Building the garden",
  },
  {
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.04 (2).mp4",
    title: "Preparing the growing space",
  },
  {
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.04 (3).mp4",
    title: "Learning by doing",
  },
];

export function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const tabId = useId();

  return (
    <section className="mt-12" aria-labelledby={`${tabId}-heading`}>
      <div className="flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            See it in practice
          </p>
          <h3 id={`${tabId}-heading`} className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One project, <em>different ways to experience it.</em>
          </h3>
        </div>

        <div className="inline-flex w-fit rounded-full bg-muted p-1" role="tablist" aria-label="Featured project media">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "images"}
            aria-controls={`${tabId}-images`}
            onClick={() => setActiveTab("images")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "images"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            Images
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "videos"}
            aria-controls={`${tabId}-videos`}
            onClick={() => setActiveTab("videos")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "videos"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Play className="h-4 w-4 fill-current" />
            Videos
          </button>
        </div>
      </div>

      {activeTab === "images" ? (
        <div id={`${tabId}-images`} role="tabpanel" className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectImages.map((image) => (
            <div key={image.src} className="group overflow-hidden rounded-[1.5rem] bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={850}
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      ) : (
        <div id={`${tabId}-videos`} role="tabpanel" className="mt-5 grid gap-5 md:grid-cols-3">
          {projectVideos.map((video) => (
            <div key={video.src} className="overflow-hidden rounded-[1.5rem] bg-black">
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                aria-label={video.title}
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="bg-white px-4 py-3">
                <p className="text-sm font-medium text-foreground">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

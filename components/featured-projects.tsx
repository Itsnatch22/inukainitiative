"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";
import gsap from "gsap";

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
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.45.jpeg",
    alt: "Plants growing in a recycled container",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.45 (2).jpeg",
    alt: "A close view of the garden project",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.46 (1).jpeg",
    alt: "A practical growing system made from reused materials",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.47.jpeg",
    alt: "Community garden materials ready for use",
  },
  {
    src: "/media/WhatsApp Image 2026-09-05 at 22.42.48 (1).jpeg",
    alt: "A community garden detail",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.06.jpeg",
    alt: "Community members gathered during a project activity",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.06 (1).jpeg",
    alt: "A close view of people participating in the project",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.07.jpeg",
    alt: "A hands-on community activity",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.07 (1).jpeg",
    alt: "People working together outdoors",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.07 (2).jpeg",
    alt: "A practical solution being demonstrated",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.07 (3).jpeg",
    alt: "Community participation in action",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.08.jpeg",
    alt: "A community-led learning moment",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.08 (1).jpeg",
    alt: "Shared work during a field activity",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.08 (2).jpeg",
    alt: "A practical project taking shape",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.08 (3).jpeg",
    alt: "Community members learning by doing",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.09.jpeg",
    alt: "People contributing to a shared project",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.09 (1).jpeg",
    alt: "A project detail from the field",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.09 (2).jpeg",
    alt: "A community activity in progress",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.09 (3).jpeg",
    alt: "Collaborative work outdoors",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.10.jpeg",
    alt: "A practical demonstration",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.10 (1).jpeg",
    alt: "Community members sharing an activity",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.10 (2).jpeg",
    alt: "A close view of hands-on work",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.10 (3).jpeg",
    alt: "People working on a local solution",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.11.jpeg",
    alt: "A community project nearing completion",
  },
  {
    src: "/media/WhatsApp Image 2026-09-09 at 17.09.11 (1).jpeg",
    alt: "A final view of the shared activity",
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
  {
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.04 (1).mp4",
    title: "Working together",
  },
  {
    src: "/media/WhatsApp Video 2026-09-05 at 22.42.04.mp4",
    title: "Growing practical solutions",
  },
  {
    src: "/media/WhatsApp Video 2026-09-09 at 17.09.06.mp4",
    title: "A new day of community action",
  },
];

export function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const tabId = useId();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".featured-projects-copy", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap.from(".featured-project-card", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        delay: 0.12,
        stagger: 0.06,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-12" aria-labelledby={`${tabId}-heading`}>
      <div className="featured-projects-copy flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
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
            <div key={image.src} className="featured-project-card group overflow-hidden rounded-[1.5rem] bg-muted">
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
            <div key={video.src} className="featured-project-card overflow-hidden rounded-3xl bg-black">
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                aria-label={video.title}
                className="aspect-4/5 h-full w-full object-cover"
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

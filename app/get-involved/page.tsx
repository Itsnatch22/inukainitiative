import type { Metadata } from "next";
import Link from "next/link";

import { Donate } from "@/components/donate";
import { MediaMosaic } from "@/components/media-mosaic";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Find practical ways to support, join, and contribute to INUKA 34's work in Kajiado County.",
};

const waysToHelp = [
  {
    title: "Support community-led action",
    description:
      "Join efforts that connect climate action, sustainable food systems, environmental restoration, and community wellbeing.",
  },
  {
    title: "Share skills and knowledge",
    description:
      "Bring training, mentorship, enterprise support, technical knowledge, or local experience that can strengthen community solutions.",
  },
  {
    title: "Build lasting opportunity",
    description:
      "Help develop green enterprises, food-growing systems, practical innovations, and livelihoods that communities can own and sustain.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-8 lg:px-12">
      <section className="rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-14 lg:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/75">
          Get involved
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            There is more than one way to <em>strengthen a community.</em>
          </h1>
          <p className="max-w-lg text-base leading-7 text-primary-foreground/80">
            Whether you bring time, skills, resources, or partnership, your
            contribution can help communities in Kajiado build resilience,
            opportunity, and lasting prosperity.
          </p>
        </div>
      </section>

      <Donate />

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        <MediaMosaic
          images={[
            { src: "/media/WhatsApp Image 2026-09-07 at 12.24.51.jpeg", alt: "People taking part in a community activity" },
            { src: "/media/WhatsApp Image 2026-09-07 at 12.24.50.jpeg", alt: "A community-led project in progress" },
            { src: "/media/WhatsApp Image 2026-09-07 at 12.19.39.jpeg", alt: "People collaborating on practical work" },
            { src: "/media/WhatsApp Image 2026-09-07 at 10.34.17.jpeg", alt: "A hands-on sustainable project" },
            { src: "/media/WhatsApp Image 2026-09-05 at 22.42.45.jpeg", alt: "Plants growing in a recycled container" },
            { src: "/media/WhatsApp Image 2026-09-05 at 22.42.47.jpeg", alt: "Community garden materials ready for use" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.07 (2).jpeg", alt: "A practical solution being demonstrated" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.07 (3).jpeg", alt: "Community participation in action" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.08 (1).jpeg", alt: "Shared work during a field activity" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.08 (2).jpeg", alt: "A practical project taking shape" },
          ]}
          video={{ src: "/media/WhatsApp Video 2026-09-09 at 17.09.06.mp4", label: "Community participation in action" }}
        />
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">See the invitation</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Participation starts with <em>showing up.</em>
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            From sharing skills to building partnerships, involvement is most meaningful when it grows from real relationships and practical action.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Ways to contribute
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Start where your contribution can <em>make a difference.</em>
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {waysToHelp.map((way, index) => (
            <article
              key={way.title}
              className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-foreground">
                <em>{way.title}</em>
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {way.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 rounded-[1.75rem] border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Let&apos;s talk
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Want to help create <em>lasting change?</em>
          </h2>
        </div>
        <div>
          <p className="text-base leading-7 text-muted-foreground">
            We welcome conversations with communities, schools, local
            organizations, businesses, partners, and people who want to support
            climate-resilient and inclusive development.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact the team
          </Link>
        </div>
      </section>
    </div>
  );
}

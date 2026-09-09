import type { Metadata } from "next";
import Link from "next/link";

import { MediaMosaic } from "@/components/media-mosaic";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore INUKA 34's four thematic areas of climate action, agroecology, economic empowerment, and holistic community development.",
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-8 lg:px-12">
      <section className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Programs & activities</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Four connected areas for <em>resilience and lasting prosperity.</em>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          INUKA 34&apos;s thematic areas translate our mission into practical action for a resilient, self-reliant, and prosperous Kajiado County.
        </p>
      </section>

      <MediaMosaic
        className="mt-12"
        images={[
          { src: "/media/WhatsApp Image 2026-09-07 at 12.24.50.jpeg", alt: "People engaging with a community project" },
          { src: "/media/WhatsApp Image 2026-09-07 at 12.24.50 (1).jpeg", alt: "A practical activity supporting local livelihoods" },
          { src: "/media/WhatsApp Image 2026-09-07 at 12.24.51.jpeg", alt: "Community members learning together" },
          { src: "/media/WhatsApp Image 2026-09-07 at 10.34.18 (1).jpeg", alt: "A sustainable growing project" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.48 (1).jpeg", alt: "A community garden detail" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.46 (1).jpeg", alt: "A practical growing system made from reused materials" },
          { src: "/media/WhatsApp Image 2026-09-09 at 17.09.10.jpeg", alt: "A practical demonstration" },
          { src: "/media/WhatsApp Image 2026-09-09 at 17.09.10 (1).jpeg", alt: "Community members sharing an activity" },
          { src: "/media/WhatsApp Image 2026-09-09 at 17.09.11.jpeg", alt: "A community project nearing completion" },
          { src: "/media/WhatsApp Image 2026-09-09 at 17.09.11 (1).jpeg", alt: "A final view of the shared activity" },
        ]}
        video={{ src: "/media/WhatsApp Video 2026-09-09 at 17.09.06.mp4", label: "INUKA 34 program activity" }}
      />

      <section className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program) => (
          <article key={program.title} className="h-full rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {program.category}
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground"><em>{program.title}</em></h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{program.description}</p>
            <Link
              href={`/programs/${program.slug}`}
              className="mt-6 inline-flex text-sm font-semibold text-primary hover:text-primary/80"
            >
              Explore this area →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">Get involved</p>
          <h2 className="mt-3 text-4xl font-semibold">Ready to support <em>community-led change?</em></h2>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 lg:mt-0"
        >
          Contact the team
        </Link>
      </section>
    </div>
  );
}

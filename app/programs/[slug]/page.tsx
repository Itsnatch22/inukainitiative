import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaMosaic } from "@/components/media-mosaic";
import { getProgram, programs } from "@/lib/programs";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return { title: "Program not found" };
  }

  return {
    title: program.shortTitle,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-8 lg:px-12">
      <Link href="/programs" className="text-sm font-medium text-primary hover:text-primary/80">
        ← All programs
      </Link>
      <section className="mt-6 grid gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-border md:grid-cols-[1fr_0.9fr] md:p-12 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Program {program.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {program.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{program.description}</p>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] bg-muted">
          <Image
            src={program.image}
            alt={program.imageAlt}
            width={900}
            height={700}
            priority
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
      </section>

      <MediaMosaic
        className="mt-12"
        images={[
          { src: program.image, alt: program.imageAlt },
          { src: "/media/WhatsApp Image 2026-09-07 at 12.19.38.jpeg", alt: "Community members taking part in practical work" },
          { src: "/media/WhatsApp Image 2026-09-07 at 12.24.50 (1).jpeg", alt: "People learning through shared activity" },
          { src: "/media/WhatsApp Image 2026-09-07 at 12.38.53.jpeg", alt: "A community-led solution in practice" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.45 (2).jpeg", alt: "A close view of the garden project" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.48 (1).jpeg", alt: "A community garden detail" },
        ]}
        video={{ src: "/media/WhatsApp Video 2026-09-05 at 22.42.04 (3).mp4", label: `${program.shortTitle} activity in progress` }}
      />

      <section className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="rounded-[1.5rem] bg-primary p-8 text-primary-foreground">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/75">
            Our goal
          </p>
          <p className="mt-4 text-2xl font-semibold leading-tight">{program.goal}</p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">What we focus on</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {program.focus.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
                <span className="mr-2 text-accent">*</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] bg-secondary px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Continue exploring</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Connect this work with <em>the wider mission.</em>
          </h2>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 lg:mt-0"
        >
          Talk to the team
        </Link>
      </section>
    </div>
  );
}

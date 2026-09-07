import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturedProjects } from "@/components/featured-projects";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "See how INUKA 34 connects climate action, sustainable livelihoods, and community empowerment in practical projects.",
};

export default function OurWorkPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-8 lg:px-12">
      <section className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-border md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:items-center lg:gap-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our work
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Practical ideas, built with the <em>people who will sustain them.</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            We champion local knowledge, practical innovation, and solutions communities can understand, afford, own, and sustain.
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] bg-muted">
          <Image
            src="/media/WhatsApp Image 2026-09-05 at 22.42.44.jpeg"
            alt="Seedlings growing in a raised garden bed"
            width={900}
            height={700}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Featured project
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Connecting climate action with <em>food and opportunity.</em>
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            The garden project demonstrates how water-efficient growing systems,
            reused materials, and local creativity can respond to food security,
            waste reduction, and environmental challenges at the same time.
          </p>
          <p>
            It is also about skills, confidence, and ownership. A practical
            solution becomes more valuable when people can learn from it, adapt
            it, and connect it to stronger livelihoods.
          </p>
        </div>
      </section>

      <FeaturedProjects />

      <section className="mt-20 rounded-[2rem] bg-secondary px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What matters to us
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              We do not just plant trees. We plant <em>food, opportunities, skills, livelihoods, and hope.</em>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Every project is part of a wider ecosystem of change connecting
              restoration, food security, waste reduction, innovation, and
              community empowerment.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Join the work
          </Link>
        </div>
      </section>
    </div>
  );
}

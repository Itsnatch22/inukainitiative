"use client";

import Link from "next/link";
import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative isolate h-[560px] overflow-hidden bg-deep-green text-white sm:h-[620px]">
      <Image
        src="/media/ostrich.jpeg"
        alt="An ostrich moving through the Kajiado landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="hero-content relative z-30 mx-auto flex h-full w-full max-w-screen-2xl items-center px-4 py-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-bright-gold">
            Rising for a resilient tomorrow
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Restoring nature, empowering people, and strengthening <em>livelihoods.</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
            INUKA 34 partners with communities in Kajiado County to build climate resilience, sustainable livelihoods, and inclusive economic opportunities for lasting prosperity.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-bright-gold px-5 py-3 text-sm font-semibold text-deep-green transition-colors hover:bg-white"
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "See how Inuka 034 Initiative turns practical ideas into community-led projects.",
};

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
];

export default function OurWorkPage() {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-4 py-12 sm:px-8 lg:px-12">
      <section className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-border md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:items-center lg:gap-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our work
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Practical ideas, built with the people who use them.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            We focus on projects that are useful, learnable, and possible to
            carry forward locally. The vertical garden is one example of that
            approach.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Growing more with less space.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            This garden project experiments with vertical growing, reused
            materials, and simple structures that can fit into a small
            footprint.
          </p>
          <p>
            The work is hands-on: preparing soil, adapting containers, planting
            seedlings, and learning what helps them thrive. It is as much about
            sharing knowledge as it is about the finished garden.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-5 sm:grid-cols-3">
        {projectImages.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-[1.5rem] bg-muted"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={850}
              className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] bg-secondary px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What matters to us
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Projects should leave people with something they can keep using.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              A useful skill, a stronger connection, a shared resource, or the
              confidence to try the next idea.
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

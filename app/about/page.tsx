import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Inuka 034 Initiative, its mission, values, and the community-centered approach behind its work.",
};

const values = [
  {
    title: "Belonging",
    description: "Creating welcoming spaces where neighbors feel recognized, included, and valued.",
  },
  {
    title: "Opportunity",
    description: "Supporting learning, growth, and practical pathways for all ages and backgrounds.",
  },
  {
    title: "Trust",
    description: "Building steady relationships rooted in respect, transparency, and consistency.",
  },
  {
    title: "Connection",
    description: "Helping people find shared purpose across the strengths and needs of their community.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-4 py-12 sm:px-8 lg:px-12">
      <section className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-border md:grid-cols-[1.05fr_0.95fr] md:p-12 lg:gap-14">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">About us</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A community rooted in care, opportunity, and shared growth.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Inuka 034 Initiative is a community-centered organization that brings people together around practical support, meaningful participation, and everyday belonging.
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] bg-muted">
          <video
            src="/media/WhatsApp Video 2026-09-05 at 22.42.04 (1).mp4"
            width={700}
            height={560}
            className="h-full w-full object-cover"
            aria-label="Community members working together outdoors"
            muted
            autoPlay
            loop
          />
        </div>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Mission</p>
          <h2 className="text-2xl font-semibold text-foreground">We help communities feel connected and supported.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Our mission is to create trusted, accessible spaces where people can gather, learn, and participate in initiatives that strengthen everyday life.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Vision</p>
          <h2 className="text-2xl font-semibold text-foreground">A more vibrant, connected, and resilient neighborhood.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We imagine a future where neighbors can access practical support, meaningful relationships, and inclusive opportunities for community life.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Our values</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">What guides our work</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {value.title.slice(0, 2)}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="rounded-[1.5rem] border border-border bg-primary p-8 text-primary-foreground shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/75">Background</p>
          <h2 className="mt-3 text-3xl font-semibold">A local story in progress</h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/85">
            Our work grows from the simple idea that communities become stronger when people have practical ways to connect, contribute, and belong.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Community focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Serving neighbors with dignity and care</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We work with residents, partners, and volunteers to strengthen the everyday conditions that make community life more connected and resilient. Our focus is on practical inclusion, local trust, and support that people can access without barriers.
          </p>
        </div>
      </section>
    </div>
  );
}

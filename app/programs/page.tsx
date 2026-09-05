import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore the community programs and activities that help neighbors learn, connect, and contribute.",
};

const programs = [
  {
    title: "Neighborhood learning circle",
    category: "Learning",
    description: "A welcoming space for practical learning, confidence-building, and shared discovery across ages.",
  },
  {
    title: "Volunteer support days",
    category: "Service",
    description: "Hands-on opportunities to contribute to local care, cleanup, and community-led improvement projects.",
  },
  {
    title: "Family and youth activities",
    category: "Wellbeing",
    description: "Inclusive events and gatherings that help families connect, play, and grow together.",
  },
  {
    title: "Community conversations",
    category: "Connection",
    description: "Small-group spaces for listening, dialogue, and identifying community priorities for collective action.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-4 py-12 sm:px-8 lg:px-12">
      <section className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Programs & activities</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Practical opportunities for connection and belonging.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Our programs are designed to make participation easier, more welcoming, and more useful for the people who live and work in the community every day.
        </p>
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program) => (
          <article key={program.title} className="h-full rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {program.category}
            </div>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground">{program.title}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{program.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">Get involved</p>
          <h2 className="mt-3 text-3xl font-semibold">Interested in learning more or joining a program?</h2>
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

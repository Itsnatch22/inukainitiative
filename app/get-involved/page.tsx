import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Find practical ways to support, join, and contribute to the work of Inuka 034 Initiative.",
};

const waysToHelp = [
  {
    title: "Volunteer your time",
    description:
      "Bring your time, skills, and energy to community activities, learning sessions, and hands-on projects.",
  },
  {
    title: "Partner with us",
    description:
      "Connect your organization, group, or local network with work that supports practical community participation.",
  },
  {
    title: "Share an idea",
    description:
      "Tell us what would make a difference where you live. Good projects often start with a simple local observation.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-4 py-12 sm:px-8 lg:px-12">
      <section className="rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-14 lg:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/75">
          Get involved
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            There is more than one way to help a community grow.
          </h1>
          <p className="max-w-lg text-base leading-7 text-primary-foreground/80">
            Whether you have an hour, an idea, or a wider network to share, your
            contribution can help make local participation more practical and
            welcoming.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Ways to contribute
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Start where it feels useful.
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
              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                {way.title}
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Have a question or a starting point?
          </h2>
        </div>
        <div>
          <p className="text-base leading-7 text-muted-foreground">
            We are happy to hear from volunteers, local groups, potential
            partners, and anyone who wants to understand the work better.
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

import type { Metadata } from "next";
import Link from "next/link";

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

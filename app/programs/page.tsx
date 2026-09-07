import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore INUKA 34's four thematic areas of climate action, agroecology, economic empowerment, and holistic community development.",
};

const programs = [
  { title: "Climate action & environmental resilience", category: "01", description: "Climate adaptation and mitigation, tree growing, ecosystem restoration, agroforestry, soil and water conservation, waste reduction, recycling, reuse, and community-led environmental education.", goal: "Enable communities to become better prepared for climate change while protecting the natural resources on which their lives and livelihoods depend." },
  { title: "Sustainable agroecology, food & nutrition security", category: "02", description: "Agroecological farming, food-producing trees, sustainable crop and livestock production, household gardens, water-efficient growing systems, soil health, and farmer training.", goal: "Help communities produce healthy food, protect their land, and build more resilient and productive livelihoods." },
  { title: "Inclusive economic empowerment & sustainable livelihoods", category: "03", description: "Entrepreneurship, green businesses and jobs, youth skills, women and girls' empowerment, vocational training, financial literacy, innovation, and value addition.", goal: "Turn skills, local resources, and environmental opportunities into sustainable income, employment, and economic independence." },
  { title: "Holistic community development, capacity & wellbeing", category: "04", description: "Community leadership, mentorship, counselling, psychosocial support, life skills, youth and women's leadership, social inclusion, mobilization, and collective action.", goal: "Build confident, capable, and connected communities that can identify challenges, develop solutions, and lead their own development." },
];

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

      <section className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program) => (
          <article key={program.title} className="h-full rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {program.category}
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground"><em>{program.title}</em></h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{program.description}</p>
            <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-foreground"><span className="font-semibold text-primary">Our goal:</span> {program.goal}</p>
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

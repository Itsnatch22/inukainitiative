import Link from "next/link";

import { CommunityMedia } from "@/components/community-media";
import { HomeHero } from "@/components/home-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const programs = [
  {
    slug: "climate-action-environmental-resilience",
    title: "Climate action & environmental resilience",
    description: "Community-led adaptation, ecosystem restoration, agroforestry, conservation, and practical responses to climate change.",
  },
  {
    slug: "sustainable-agroecology",
    title: "Sustainable agroecology",
    description: "Climate-smart food systems, household gardens, soil health, nutrition, and water-efficient growing practices.",
  },
  {
    slug: "inclusive-economic-empowerment",
    title: "Inclusive economic empowerment",
    description: "Skills, green enterprises, livelihoods, and opportunities that strengthen economic independence for women and youth.",
  },
  {
    slug: "holistic-community-development",
    title: "Holistic community development",
    description: "Training, mentorship, wellbeing, leadership, participation, and support that help communities guide their own development.",
  },
];

const storyPillars = [
  {
    title: "Empowered people",
    description: "Knowledge, skills, confidence, and support give people greater responsibility for their own development.",
  },
  {
    title: "Sustainable livelihoods",
    description: "Local resources and practical innovation can create lasting income and economic opportunity.",
  },
  {
    title: "Resilient communities",
    description: "When people and nature are supported together, communities gain a stronger foundation for the future.",
  },
];

const faqs = [
  {
    question: "Where does INUKA 34 work?",
    answer:
      "INUKA 34 works alongside communities in Kajiado County, including women, girls, youth, teenagers, pastoralist families, and other communities facing vulnerability.",
  },
  {
    question: "What areas does INUKA 34 focus on?",
    answer:
      "Our work connects climate action and environmental resilience, sustainable agroecology and food security, inclusive economic empowerment, and holistic community development.",
  },
  {
    question: "Why connect environmental work with livelihoods?",
    answer:
      "Environmental health, food security, income, and wellbeing are connected. We look for practical solutions that protect natural resources while creating skills, food, opportunity, and sustainable livelihoods.",
  },
  {
    question: "What makes the approach different?",
    answer:
      "We do not simply deliver solutions to communities. We work alongside people to identify challenges, co-create culturally appropriate responses, and build solutions communities can understand, own, and sustain.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-8 lg:px-12 xl:py-12">
        <CommunityMedia />

      <section className="mt-20 grid gap-8 rounded-[1.75rem] border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 lg:p-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">About INUKA 34</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Communities have the knowledge and creativity to <em>shape their own futures.</em>
          </h2>
        </div>
        <div>
          <p className="text-base leading-7 text-muted-foreground">
            We work alongside people and communities to identify local challenges, co-create practical solutions, and drive lasting change. Our approach links climate action with economic empowerment and community development.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
            Read our story →
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Our thematic areas</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">Four connected areas of <em>practical action.</em></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={`/programs/${program.slug}`}
              className="block h-full rounded-[1.5rem] border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                0{programs.indexOf(program) + 1}
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl"><em>{program.title}</em></h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{program.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-primary">Explore this area →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A few things <em>people ask.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            If you still have a question, we would be glad to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            Ask the team →
          </Link>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card px-6 py-3 shadow-sm sm:px-8">
          <Accordion defaultValue={["who"]}>
            {faqs.map((faq, index) => {
              const value = index === 0 ? "who" : `faq-${index}`;

              return (
                <AccordionItem key={value} value={value}>
                  <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground ring-1 ring-primary/10 sm:px-10 lg:px-14">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/75">Why it matters</p>
          <h2 className="mt-3 text-4xl font-semibold text-primary-foreground sm:text-5xl">
            Empowered people build <em>resilient communities.</em>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {storyPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
              <div className="text-xl font-semibold text-primary-foreground">{pillar.title}</div>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 px-4 text-center sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Our invitation</p>
        <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">We do not just plant trees. We plant <em>opportunities, food, skills, and hope.</em></h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore our work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Contact us
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}

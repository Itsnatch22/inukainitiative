import Image from "next/image";
import Link from "next/link";

import { CommunityMedia } from "@/components/community-media";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const programs = [
  {
    title: "Community learning",
    description: "Accessible learning spaces that help neighbors build confidence, skills, and practical knowledge.",
  },
  {
    title: "Volunteer support",
    description: "Meaningful opportunities for people to contribute time, energy, and care in ways that make a visible difference.",
  },
  {
    title: "Family connection",
    description: "Inclusive activities and gatherings that strengthen relationships, celebrate culture, and build stronger ties.",
  },
];

const storyPillars = [
  {
    title: "Local-first",
    description: "We focus on the practical realities and strengths already present in the community.",
  },
  {
    title: "Welcoming",
    description: "Everyone deserves a place to participate, be heard, and find belonging.",
  },
  {
    title: "Action-oriented",
    description: "Our work turns shared concern into practical, community-led progress.",
  },
];

const faqs = [
  {
    question: "Who is Inuka 034 Initiative for?",
    answer:
      "Our work is for neighbors, families, young people, volunteers, and local partners who want practical ways to connect and contribute.",
  },
  {
    question: "What kinds of activities do you run?",
    answer:
      "Activities include community learning, family and youth gatherings, volunteer support days, conversations, and hands-on projects such as the garden work shown here.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can explore the programs, share your interest through the contact page, or reach out if you would like to volunteer, partner, or support an upcoming activity.",
  },
  {
    question: "Do I need experience to participate?",
    answer:
      "No. Activities are designed to be welcoming and practical, with room for people to learn as they go and contribute in ways that suit them.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-4 py-10 sm:px-8 lg:px-12 xl:py-12">
      <section className="grid items-center gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-border md:grid-cols-[1.05fr_0.95fr] md:p-12 lg:gap-14">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Community-led support
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Care, connection, and opportunity for everyday life.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
            Inuka 034 Initiative brings neighbors together around practical support, shared learning, and inclusive participation that strengthens local life.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Learn more
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-secondary px-3 py-1.5">Inclusive</span>
            <span className="rounded-full bg-secondary px-3 py-1.5">Supportive</span>
            <span className="rounded-full bg-secondary px-3 py-1.5">Community-led</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-muted">
          <Image
            src="/media/WhatsApp Image 2026-09-05 at 22.43.10.jpeg"
            alt="Community members working together outdoors"
            width={860}
            height={680}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <CommunityMedia />

      <section className="mt-20 grid gap-8 rounded-[1.75rem] border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 lg:p-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">Who we are</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A welcoming place for neighbors to connect, learn, and grow.
          </h2>
        </div>
        <div>
          <p className="text-base leading-7 text-muted-foreground">
            We create practical, people-centered spaces where local participation feels possible, useful, and genuinely welcoming. Our work is rooted in trust, local knowledge, and the belief that stronger communities grow through everyday connection.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
            More about our mission →
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Programs</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Ways we support the community</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="h-full rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Community
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{program.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A few things people ask.
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
          <h2 className="mt-3 text-3xl font-semibold text-primary-foreground">
            Useful support begins with real community relationships.
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
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Get involved</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">Let&apos;s build a stronger, more connected community together.</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore programs
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
  );
}

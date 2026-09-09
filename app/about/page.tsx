import type { Metadata } from "next";

import { MediaMosaic } from "@/components/media-mosaic";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about INUKA 34, its mission, vision, values, and community-centered approach in Kajiado County.",
};

const values = [
  {
    title: "Environmental stewardship",
    description: "Protecting and restoring land, forests, water, and other natural resources is a shared responsibility.",
  },
  {
    title: "Community empowerment",
    description: "Communities should be equipped to create solutions to their own challenges and become agents of change.",
  },
  {
    title: "Sustainability",
    description: "We pursue lasting environmental, social, and economic benefits for generations to come.",
  },
  {
    title: "Inclusivity",
    description: "Youth, women, girls, and vulnerable communities should have meaningful opportunities to participate and benefit.",
  },
  {
    title: "Integrity",
    description: "Honesty, transparency, accountability, and responsible use of resources guide our relationships.",
  },
  {
    title: "Collaboration",
    description: "Meaningful change requires communities, schools, organizations, businesses, and other stakeholders to work together.",
  },
  {
    title: "Innovation",
    description: "Practical creativity can make conservation, food production, and sustainable livelihoods more accessible.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-8 lg:px-12">
      <section className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-border md:grid-cols-[1.05fr_0.95fr] md:p-12 lg:gap-14">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">About us</p>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            A community building <em>resilient, self-reliant, and prosperous futures.</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            INUKA 34 is a community-centered organization working alongside people and communities in Kajiado County to build resilient, self-reliant, and prosperous futures.
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

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The people behind the work</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A closer look at <em>shared action.</em>
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Our work is practical, collaborative, and rooted in the places where people live, learn, grow, and create opportunity.
          </p>
        </div>
        <MediaMosaic
          images={[
            { src: "/media/WhatsApp Image 2026-09-07 at 12.19.38.jpeg", alt: "Community members participating in a project" },
            { src: "/media/WhatsApp Image 2026-09-07 at 12.19.38 (1).jpeg", alt: "People working together outdoors" },
            { src: "/media/WhatsApp Image 2026-09-07 at 12.19.39.jpeg", alt: "A community activity in progress" },
            { src: "/media/WhatsApp Image 2026-09-07 at 12.38.53.jpeg", alt: "A practical community-led solution" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.06.jpeg", alt: "Community members gathered during a project activity" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.07 (1).jpeg", alt: "People working together outdoors" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.08.jpeg", alt: "A community-led learning moment" },
            { src: "/media/WhatsApp Image 2026-09-09 at 17.09.09.jpeg", alt: "People contributing to a shared project" },
          ]}
          video={{ src: "/media/WhatsApp Video 2026-09-09 at 17.09.06.mp4", label: "Community work in progress" }}
        />
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Mission</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Our mission is to <em>strengthen lasting climate resilience.</em></h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            To partner with communities in Kajiado County to strengthen lasting climate resilience, foster sustainable livelihoods, and empower people with the knowledge, skills, and confidence to guide their own development and create a better future for their families and communities.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Vision</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">A climate-resilient Kajiado County with <em>lasting prosperity.</em></h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A climate-resilient Kajiado County where empowered communities create sustainable livelihoods and inclusive economic opportunities for lasting prosperity.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Our values</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">What <em>guides our work.</em></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {value.title.slice(0, 2)}
              </div>
              <h3 className="text-2xl font-semibold text-foreground"><em>{value.title}</em></h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="rounded-[1.5rem] border border-border bg-primary p-8 text-primary-foreground shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/75">Background</p>
          <h2 className="mt-3 text-4xl font-semibold">We invest in <em>people and possibility.</em></h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/85">
            Through training, mentorship, practical learning, counselling, and psychosocial support, we help people build confidence, make informed choices, and take greater responsibility for their futures.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Community focus</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground">We connect people with <em>the environment.</em></h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Trees, gardens, sustainable farming, and water-efficient growing systems can provide food, income, biodiversity, and protection for the land. Environmental sustainability and human wellbeing go hand in hand.
          </p>
        </div>
      </section>
    </div>
  );
}

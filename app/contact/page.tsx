import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { MediaMosaic } from "@/components/media-mosaic";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact INUKA 34 about climate resilience, sustainable livelihoods, community development, and partnerships in Kajiado County.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-8 lg:px-12">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Let&apos;s build a <em>more resilient future together.</em>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Reach out about partnerships, training, community projects, climate action, sustainable livelihoods, or ways to support our work in Kajiado County.
        </p>
      </div>

      <MediaMosaic
        className="mb-12"
        images={[
          { src: "/media/WhatsApp Image 2026-09-07 at 10.34.17 (1).jpeg", alt: "Community members working together" },
          { src: "/media/WhatsApp Image 2026-09-07 at 10.34.18.jpeg", alt: "A community project outdoors" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.49.jpeg", alt: "Plants growing in a practical garden system" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.43.10.jpeg", alt: "A sustainable growing activity" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.45 (2).jpeg", alt: "A close view of the garden project" },
          { src: "/media/WhatsApp Image 2026-09-05 at 22.42.47.jpeg", alt: "Community garden materials ready for use" },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <aside className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Get <em>in touch.</em></h2>
          <ul className="mt-6 space-y-5 text-base text-muted-foreground">
            <li>
              <span className="block text-sm font-medium uppercase tracking-[0.18em] text-primary">Email</span>
              <a href="mailto:info@inukainitiative.org" className="mt-2 inline-block text-foreground hover:text-primary">
                info@inukainitiative.org
              </a>
            </li>
            <li>
              <span className="block text-sm font-medium uppercase tracking-[0.18em] text-primary">Phone</span>
              <a href="tel:+254711891639" className="mt-2 inline-block text-foreground hover:text-primary">
                0711891639
              </a>
            </li>
            <li>
              <span className="block text-sm font-medium uppercase tracking-[0.18em] text-primary">Location</span>
              <p className="mt-2 text-foreground">Muigai, Kitengela</p>
            </li>
            <li>
              <span className="block text-sm font-medium uppercase tracking-[0.18em] text-primary">Office hours</span>
              <p className="mt-2 text-foreground">Monday to Friday, 9:00 AM to 5:00 PM</p>
            </li>
          </ul>
        </aside>

        <div className="rounded-[1.75rem] border border-border bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Send <em>a message.</em></h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share a little about your question or idea and we&apos;ll get back to you as soon as possible.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

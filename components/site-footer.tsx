import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/inuka_34?stkn=ZHlmanliZTBneDFz", label: "Instagram", icon: FaInstagram },
  { href: "https://www.tiktok.com/@inuka.34", label: "TikTok", icon: FaTiktok },
  { href: "https://www.facebook.com/share/1CFBeNzDqx/", label: "Facebook", icon: FaFacebookF },
  { href: "https://www.youtube.com/@Inuka34Initiative", label: "YouTube", icon: FaYoutube },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-screen-2xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.75fr_1fr] lg:px-12">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Inuka 034 Initiative logo"
              width={64}
              height={64}
              className="h-14 w-14 rounded-full bg-white p-1 object-contain shadow-[0_2px_12px_rgba(4,51,26,0.2)] ring-2 ring-accent"
            />
            <div>
              <div className="text-lg font-bold uppercase tracking-[0.14em] text-primary-foreground">
                Inuka 034
              </div>
              <div className="text-xs font-semibold tracking-[0.08em] text-primary-foreground/80">Initiative</div>
            </div>
          </div>
          <p className="max-w-md text-sm text-primary-foreground/80">
            Restoring nature, empowering people, and strengthening livelihoods for a resilient Kajiado County.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
            Contact
          </h3>
          <a
            href="mailto:info@inukainitiative.org"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-white"
          >
            <FiMail className="h-4 w-4" aria-hidden="true" />
            info@inukainitiative.org
          </a>
          <a
            href="tel:+254711891639"
            className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-white"
          >
            <FaPhone className="h-3.5 w-3.5" aria-hidden="true" />
            0711891639
          </a>
          <p className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/85">
            <FaLocationDot className="h-3.5 w-3.5" aria-hidden="true" />
            Muigai, Kitengela
          </p>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Social media links">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow Inuka 034 Initiative on ${label}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-primary-foreground/85 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
          <ul className="mt-5 space-y-2 text-sm text-primary-foreground/85">
            <li>Open Monday–Friday</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 text-xs text-primary-foreground/75 sm:px-8 lg:px-12">
          <p>© {year} Inuka 034 Initiative</p>
          <p>Community support with purpose</p>
        </div>
      </div>
    </footer>
  );
}

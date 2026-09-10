'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our work" },
  { href: "/contact", label: "Contact" },
];

const programLinks = [
  { href: "/programs/climate-action", label: "Climate action" },
  { href: "/programs/sustainable-agroecology", label: "Sustainable agroecology" },
  { href: "/programs/economic-empowerment", label: "Economic empowerment" },
  { href: "/programs/community-development", label: "Community development" },
];

const whatsappHref =
  "https://wa.me/254711891639?text=Hello%20INUKA%2034%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Inuka 034 Initiative home">
          <Image
            src="/logo.jpeg"
            alt="Inuka 034 Initiative logo"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full bg-white p-1 object-contain shadow-[0_2px_12px_rgba(4,51,26,0.2)] ring-2 ring-accent"
            priority
          />
          <div className="leading-tight">
            <div className="text-base font-bold uppercase tracking-[0.14em] text-primary">Inuka 034</div>
            <div className="text-xs font-semibold tracking-[0.08em] text-foreground">Initiative</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <Link
              href="/programs"
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive("/programs")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              Programs
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-border bg-background p-2 shadow-lg">
                <Link href="/programs" className="block rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-muted">
                  All programs
                </Link>
                {programLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-foreground hover:bg-muted">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 px-4 py-2 text-sm font-medium text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            Chat with us
          </a>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get involved
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon-sm" aria-label="Open navigation menu" className="rounded-full">
                  <Menu className="h-4 w-4" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpeg"
                    alt="Inuka 034 Initiative logo"
                    width={56}
                    height={56}
                    className="h-13 w-13 rounded-full bg-white p-1 object-contain shadow-[0_2px_10px_rgba(4,51,26,0.18)] ring-2 ring-accent"
                  />
                  <span className="leading-tight">
                    <span className="block text-base font-bold uppercase tracking-[0.12em] text-primary">Inuka 034</span>
                    <span className="block text-xs font-semibold tracking-[0.08em] text-foreground">Initiative</span>
                  </span>
                </div>
              </div>
              <nav className="flex flex-col gap-2 p-4" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="rounded-lg border border-border p-2">
                  <Link href="/programs" className="block rounded-md px-2 py-2 text-base font-semibold text-primary">
                    Programs
                  </Link>
                  {programLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/get-involved"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
                >
                  Get involved
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 px-4 py-3 text-base font-medium text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  Chat with us
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Inuka 034 Initiative home">
          <Image
            src="/logo.jpeg"
            alt="Inuka 034 Initiative logo"
            width={52}
            height={56}
            className="h-12 w-11 object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Inuka 034</div>
            <div className="text-base font-semibold text-foreground">Initiative</div>
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
        </nav>

        <div className="hidden md:block">
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
                    width={44}
                    height={48}
                    className="h-11 w-10 object-contain"
                  />
                  <span className="text-base font-semibold">Inuka 034 Initiative</span>
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
                <Link
                  href="/get-involved"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
                >
                  Get involved
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

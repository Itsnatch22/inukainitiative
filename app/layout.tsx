import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Banner } from "@/components/banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Inuka 034 Initiative",
    template: "%s | Inuka 034 Initiative",
  },
  description:
    "INUKA 34 partners with communities in Kajiado County to strengthen climate resilience, sustainable livelihoods, and inclusive economic opportunities.",
  openGraph: {
    title: "Inuka 034 Initiative",
    description:
      "Restoring nature, empowering people, and strengthening livelihoods in Kajiado County.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-12">
            <Banner />
          </div>
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

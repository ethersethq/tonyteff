import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { site } from "@/content/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SkipToContent } from "@/components/site/skip-to-content";
import { getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.seo.title,
    template: `%s · ${site.seo.title}`,
  },
  description: site.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkipToContent />
        <Header />
        <main id="main" className="min-h-[calc(100svh-4rem)]">
          {children}
        </main>
        <Footer />

        {/* JSON-LD helps search engines understand the person represented by this site. */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              description: site.shortBio,
              url: "https://example.com",
              sameAs: site.socialLinks
                .map((l) => l.href)
                .filter((href) => href.startsWith("http")),
            }),
          }}
        />
      </body>
    </html>
  );
}

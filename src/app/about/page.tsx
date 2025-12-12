import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  const paragraphs = site.longBio.split("\n\n").filter(Boolean);

  return (
    <Container className="py-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="overflow-hidden rounded-3xl border border-border bg-muted/40">
              {/* Intentional placeholder: swap in a real portrait when available. */}
              <div className="relative aspect-[4/5] w-full">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent)_25%,transparent),transparent_55%),radial-gradient(circle_at_70%_80%,color-mix(in_oklab,var(--foreground)_18%,transparent),transparent_55%)]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mt-6">
              <ButtonLink href="/contact" variant="secondary" className="w-full">
                Contact <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About"
            title={`Meet ${site.name}`}
            description={site.role}
          />

          <div className="mt-8 space-y-5 text-base leading-7 text-muted-foreground">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="Values"
              title="How I work"
              description="A simple approach that keeps the output premium and the process calm."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {site.values.map((v) => (
                <Card key={v.title}>
                  <div className="text-sm font-semibold">{v.title}</div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{v.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading eyebrow="Highlights" title="Quick context" />
            <Card className="mt-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {site.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}


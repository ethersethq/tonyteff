import { ArrowRight } from "lucide-react";

import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";

export default function Home() {
  const servicesPreview = site.services.slice(0, 3);
  const projectsPreview = site.projects.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          aria-hidden="true"
        >
          <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -bottom-52 left-1/3 h-[520px] w-[620px] -translate-x-1/2 rounded-full bg-foreground/10 blur-3xl" />
        </div>

        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                {site.role}
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                {site.shortBio}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={site.primaryCta.href}>
                  {site.primaryCta.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={site.secondaryCta.href} variant="secondary">
                  {site.secondaryCta.label}
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {site.socialLinks
                  .filter((l) => l.label !== "Email")
                  .slice(0, 5)
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="p-6">
                <div className="text-sm font-semibold">Quick highlights</div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {site.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <ButtonLink href="/contact" variant="secondary" className="w-full">
                    Contact
                  </ButtonLink>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/30">
        <Container className="py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold">{site.socialProof.headline}</div>
              <div className="mt-1 text-xs text-muted-foreground">{site.socialProof.note}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {site.socialProof.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Services"
              title="High-signal work, delivered with taste."
              description="Pick a lane or combine them—each engagement is designed to produce an obvious next step."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {servicesPreview.map((service) => (
                <Card key={service.title} className="flex flex-col">
                  <div className="text-base font-semibold">{service.title}</div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.includes.slice(0, 3).map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <ButtonLink href="/services" variant="secondary">
                Explore services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/20">
        <Container className="py-16">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Work"
              title="Selected work"
              description="Neutral placeholders for now—swap in real case studies and links when ready."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsPreview.map((project) => (
                <Card key={project.slug} className="flex flex-col">
                  <div className="text-base font-semibold">{project.title}</div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      View <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <ButtonLink href="/work" variant="secondary">
                View all work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="Confidence without hype."
              description="Replace placeholders with real quotes when you have them."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {site.testimonials.map((t) => (
                <Card key={t.quote} className="flex flex-col">
                  <p className="text-sm leading-7 text-foreground">“{t.quote}”</p>
                  <div className="mt-6 text-sm font-semibold">{t.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{t.role}</div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/20">
        <Container className="py-16">
          <Card className="overflow-hidden p-0">
            <div className="grid gap-8 p-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Next step
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">
                  Ready to build something clean and premium?
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Send a short message with what you’re making and your timeline. I’ll respond with
                  the fastest sensible path.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <ButtonLink href="/contact">
                  Contact <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}

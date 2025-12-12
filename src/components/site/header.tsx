import Link from "next/link";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 font-semibold tracking-tight",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
          )}
          aria-label={`${site.name} home`}
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span>{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={site.primaryCta.href} size="sm" className="hidden sm:inline-flex">
            {site.primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href="/links"
            variant="secondary"
            size="sm"
            className="inline-flex"
            aria-label="Open links page"
          >
            Links
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}


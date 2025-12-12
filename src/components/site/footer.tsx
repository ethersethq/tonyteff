import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="mt-2 max-w-md text-sm text-muted-foreground">
              {site.shortBio}
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <div className="text-sm font-semibold">Pages</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-muted-foreground hover:text-foreground" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-foreground" href="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-foreground" href="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-foreground" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-foreground" href="/privacy">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Connect</div>
              <ul className="mt-3 space-y-2 text-sm">
                {site.socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-muted-foreground hover:text-foreground"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-foreground" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


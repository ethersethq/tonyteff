import * as React from "react";

import { cn } from "@/lib/utils";

export function SkipToContent({ href = "#main" }: { href?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
      )}
    >
      Skip to content
    </a>
  );
}


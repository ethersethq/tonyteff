/**
 * Used for metadataBase + sitemap/robots.
 *
 * Keep this as a single helper so changing the canonical domain is one edit.
 */
export function getSiteUrl() {
  // TODO: Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://tonyteff.com)
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "https://example.com";
}


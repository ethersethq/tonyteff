export type SocialLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  includes: string[];
  forWho: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type MediaItem = {
  title: string;
  outlet: string;
  href: string;
  year?: string;
};

export type SeoDefaults = {
  title: string;
  description: string;
  ogImageText: string;
};

export const site = {
  name: "Tony Teff",
  role: "Creator / Entrepreneur (update)",
  shortBio:
    "I help brands and founders ship clean, high-impact content and digital experiences—fast, focused, and premium.",
  longBio:
    "Tony Teff is a creator and entrepreneur focused on building modern digital experiences and content that feels intentional, clear, and conversion-ready.\n\nReplace this long bio with Tony’s real story: where he’s based, what he’s known for, and the kind of work he does. Keep it human, specific, and grounded—avoid inflated claims.",
  location: "Location (optional)",

  values: [
    {
      title: "Clarity over noise",
      description:
        "Clean messaging, sharp hierarchy, and a single compelling next step—no clutter.",
    },
    {
      title: "Premium execution",
      description:
        "Tasteful typography, spacing, and details that feel confident without being loud.",
    },
    {
      title: "Speed with standards",
      description:
        "Move fast, but keep accessibility, performance, and maintainability non‑negotiable.",
    },
  ],

  highlights: [
    "Currently: (add current focus)",
    "Based in: (add location) — available worldwide",
    "Best for: creators, founders, lean teams",
  ],

  primaryCta: { label: "Request availability", href: "/contact" },
  secondaryCta: { label: "View work", href: "/work" },

  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "mailto:hello@tonyteff.com" },
  ] satisfies SocialLink[],

  bookingLink: {
    label: "Book a call (placeholder)",
    href: "https://cal.com/",
  },

  socialProof: {
    headline: "Featured / Collaborated with",
    items: ["(Add brand/outlet)", "(Add brand/outlet)", "(Add brand/outlet)"],
    note:
      "Replace placeholders with real logos/names when available. Avoid listing brands unless verified.",
  },

  services: [
    {
      title: "Brand + Content Strategy",
      description:
        "Clarity on positioning, messaging, and a repeatable content system that fits your voice.",
      includes: ["Positioning + messaging", "Content pillars", "Launch / campaign plan"],
      forWho: ["Founders refining their narrative", "Creators scaling output without noise"],
      ctaLabel: "Request availability",
      ctaHref: "/contact",
    },
    {
      title: "Creative Direction",
      description:
        "A consistent visual and editorial standard across web, social, and campaigns.",
      includes: ["Mood + references", "Design direction", "Review + feedback loops"],
      forWho: ["Teams that want a premium, cohesive look", "Solo operators needing taste + speed"],
      ctaLabel: "Request availability",
      ctaHref: "/contact",
    },
    {
      title: "Web Presence (Next.js)",
      description:
        "Fast, modern personal-brand sites designed for trust, clarity, and conversion.",
      includes: ["Information architecture", "Design + build", "SEO basics + analytics handoff"],
      forWho: ["Creators and entrepreneurs", "Anyone who needs a clean, credible home base"],
      ctaLabel: "Request availability",
      ctaHref: "/contact",
    },
  ] satisfies Service[],

  projects: [
    {
      slug: "project-01",
      title: "Personal Brand Site",
      description: "Minimal, fast, conversion-focused homepage + contact flow.",
      tags: ["Web", "Design", "SEO"],
      href: "https://example.com",
      imageAlt: "Project placeholder image",
    },
    {
      slug: "project-02",
      title: "Content System",
      description: "A repeatable structure for consistent, high-quality publishing.",
      tags: ["Strategy", "Content"],
      href: "https://example.com",
      imageAlt: "Project placeholder image",
    },
    {
      slug: "project-03",
      title: "Launch Landing Page",
      description: "High-signal landing page with clear CTA and clean hierarchy.",
      tags: ["Web", "Copy"],
      href: "https://example.com",
      imageAlt: "Project placeholder image",
    },
    {
      slug: "project-04",
      title: "Creator Toolkit",
      description: "A simple resource hub designed for retention and clarity.",
      tags: ["Web", "Product"],
      href: "https://example.com",
      imageAlt: "Project placeholder image",
    },
    {
      slug: "project-05",
      title: "Media Kit",
      description: "Premium one-pager format with clean sections and proof points.",
      tags: ["Design"],
      href: "https://example.com",
      imageAlt: "Project placeholder image",
    },
    {
      slug: "project-06",
      title: "Selected Work",
      description:
        "Selected work available on request. Add real case studies here when ready.",
      tags: ["Work"],
      href: "/contact",
      imageAlt: "Project placeholder image",
    },
  ] satisfies Project[],

  testimonials: [
    {
      quote:
        "Tony brings clarity, taste, and speed. Everything shipped cleaner than expected.",
      name: "Client name (add)",
      role: "Role / Company (add)",
    },
    {
      quote:
        "Great partner for high-signal creative direction and a premium final product.",
      name: "Client name (add)",
      role: "Role / Company (add)",
    },
    {
      quote:
        "If you want a site that feels confident and converts without hype, this is it.",
      name: "Client name (add)",
      role: "Role / Company (add)",
    },
  ] satisfies Testimonial[],

  media: [
    {
      title: "Interview / Feature (add)",
      outlet: "Publication (add)",
      href: "https://example.com",
      year: "2025",
    },
  ] satisfies MediaItem[],

  faq: [
    {
      q: "What’s the typical timeline?",
      a: "Most engagements range from a few days to a few weeks depending on scope. Share your deadline and I’ll recommend the fastest sensible path.",
    },
    {
      q: "Do you work with teams or solo founders?",
      a: "Both. I can collaborate with your existing team or operate end-to-end when you need speed and clarity.",
    },
    {
      q: "Do you offer ongoing retainers?",
      a: "Limited. If there’s a clear cadence and outcome, we can discuss a monthly partnership.",
    },
    {
      q: "What do you need from me to start?",
      a: "A clear goal, examples you like, and access to any existing assets. If you’re starting from scratch, that’s fine too.",
    },
    {
      q: "Do you provide copywriting?",
      a: "I can help shape messaging and structure. For long-form copy, we can collaborate or bring in a specialist if needed.",
    },
    {
      q: "What’s your pricing?",
      a: "Pricing depends on scope. Start with a short message and I’ll respond with options and a clear next step.",
    },
  ],

  seo: {
    title: "Tony Teff",
    description:
      "Tony Teff — premium creator/entrepreneur personal brand site. Services, selected work, and contact.",
    ogImageText: "Tony Teff — Premium personal brand",
  } satisfies SeoDefaults,
} as const;


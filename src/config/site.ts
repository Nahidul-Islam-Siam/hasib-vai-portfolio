// ---------------------------------------------------------------------------
// Central site metadata. Change these once and they flow into the SEO
// metadata, sitemap, robots, and web manifest.
// ---------------------------------------------------------------------------

function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl && envUrl.length > 0) {
    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  }
  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl && vercelUrl.length > 0) {
    return `https://${vercelUrl}`;
  }
  return "https://hasib-portfolio.vercel.app";
}

export const siteConfig = {
  name: "Hasib",
  title: "Hasib — Designer & Developer Portfolio",
  description:
    "Portfolio of Hasib — specialized in bespoke web design, interactive frontend development, and brand identity.",
  url: getSiteUrl(),
} as const;

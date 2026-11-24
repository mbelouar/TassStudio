import { site } from "@/data/site";

/** Generates /robots.txt at build time. */
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

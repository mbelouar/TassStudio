import { site } from "@/data/site";

/** Generates /sitemap.xml at build time. */
export default function sitemap() {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/games", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.5, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

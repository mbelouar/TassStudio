import { site } from "@/data/site";

/** Web app manifest (/manifest.webmanifest). */
export default function manifest() {
  return {
    name: site.name,
    short_name: "TASS",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0910",
    theme_color: "#0A0910",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

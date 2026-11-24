/**
 * Studio-wide settings. Edit this file to update contact details, links and
 * copy everywhere on the site (header, footer, legal pages, SEO).
 */
export const site = {
  name: "TASS STUDIO",
  legalName: "TASS STUDIO",

  // TODO: set this to your real domain once it is connected on Vercel.
  // Used for canonical URLs, Open Graph, sitemap.xml and the legal pages.
  url: "https://tass-studio.vercel.app",

  tagline: "Small studio. Big play.",
  description:
    "TASS STUDIO is an independent mobile game studio from Wolverhampton, UK, crafting bright, polished games for Android players everywhere.",

  about: [
    "TASS STUDIO is an independent game studio based in Wolverhampton, England. We design, build and publish mobile games that are quick to pick up, hard to put down and kind to your battery.",
    "Our mission is simple: make games that respect players. That means fair rewards, honest monetisation, tight controls and a level of polish usually reserved for much bigger teams.",
  ],

  email: "tasstudio@proton.me",

  location: "Wolverhampton, United Kingdom",

  // Registered company details (from the Dun & Bradstreet record).
  company: {
    type: "Private company limited by shares",
    jurisdiction: "England and Wales",
    address: ["12 Tumbler Grove", "Wolverhampton", "WV10 0AT", "United Kingdom"],
    duns: "220611968",
  },

  // TODO: fill in or remove. Empty strings are hidden automatically.
  socials: {
    googlePlay: "", // e.g. "https://play.google.com/store/apps/dev?id=YOUR_DEVELOPER_ID"
    x: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],

  legalUpdated: "24 November 2026",
};

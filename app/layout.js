import { Unbounded, DM_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

// Self-hosted at build time by next/font: no layout shift, no external requests.
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap", weight: ["500", "600"] });

/** Default SEO for every page; each page overrides title/description. */
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: ["TASS STUDIO", "TASS LTD", "mobile games", "Android games", "indie game studio", "UK game developer", "Google Play"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0A0910",
  colorScheme: "dark",
};

// Organization structured data for Google.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo-mark.svg`,
  email: site.email,
  duns: site.company.duns,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.company.address[0],
    addressLocality: site.company.address[1],
    postalCode: site.company.address[2],
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${unbounded.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body id="top" className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ion focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}

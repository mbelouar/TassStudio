import PageHero from "@/components/PageHero";
import GameCard from "@/components/GameCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import ComingSoon from "@/components/ComingSoon";
import { games } from "@/data/games";
import { site } from "@/data/site";

export const metadata = {
  title: "Games",
  description: `Every game by ${site.name}: screenshots, details and Google Play download links.`,
  alternates: { canonical: "/games" },
  openGraph: { url: "/games", title: `Games · ${site.name}` },
};

export default function GamesPage() {
  // Structured data so search engines understand each title.
  const jsonLd = games.map((g) => ({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: g.title,
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    description: g.description,
    url: g.playStoreUrl,
    image: `${site.url}${g.icon}`,
    author: { "@type": "Organization", name: site.legalName },
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  }));

  return (
    <>
      <PageHero
        eyebrow="Our games"
        title={<>Pick a game. <span className="text-gradient">Press play.</span></>}
        intro={
          games.length
            ? "Free to download on Google Play. Every title is built to run smoothly on everyday phones and to be fair to the people who play it."
            : "Every title we make is built to run smoothly on everyday phones and to be fair to the people who play it. Our first games are on the way."
        }
      />

      <section className="px-5 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {games.length === 0 && <ComingSoon />}
          {games.map((g, i) => (
            <Reveal key={g.slug} as="div">
              <div id={g.slug} className="scroll-mt-28">
                <GameCard game={g} layout="feature" priority={i === 0} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Found a bug or have an idea for a game?" text="Tell us which game and what happened. Player feedback shapes every update we ship." />

      {jsonLd.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
}

import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import GameCard from "@/components/GameCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import ComingSoon from "@/components/ComingSoon";
import { featuredGames, games } from "@/data/games";
import { site } from "@/data/site";

export const metadata = {
  alternates: { canonical: "/" },
};

// "Why choose us" pillars
const pillars = [
  {
    icon: <><path d="M12 2 22 12 12 22 2 12Z" /></>,
    title: "Polish first",
    text: "Tight controls, crisp feedback and smooth performance on everyday phones — not just flagships.",
  },
  {
    icon: <><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" /></>,
    title: "Player-respecting",
    text: "Fair rewards, optional ads and no pay-to-win. Our games are built to be enjoyed, not to pressure.",
  },
  {
    icon: <><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></>,
    title: "Light & fast",
    text: "Small downloads, quick loading and offline-friendly play so you can jump in anywhere.",
  },
  {
    icon: <><path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" /></>,
    title: "Always improving",
    text: "We listen to reviews and support emails, and ship updates that act on what players tell us.",
  },
];

export default function HomePage() {
  const facts = [
    { k: "Studio", v: "Independent, UK-based" },
    { k: "Games", v: games.length ? `${games.length} titles on Google Play` : "First titles coming soon" },
    { k: "Platform", v: "Android first, built for every phone" },
  ];

  return (
    <>
      <Hero />

      {/* Quick facts */}
      <section className="px-5 pt-16">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.08} className="bg-void px-6 py-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{f.k}</p>
              <p className="mt-2 font-display text-lg">{f.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured games */}
      <Section
        id="games"
        eyebrow="Featured games"
        title={<>Pocket-sized games, <span className="text-gradient">full-sized fun.</span></>}
        intro={`Every TASS game is designed to fit a coffee break and reward you for coming back.${featuredGames.length ? " Pick one and press play." : ""}`}
      >
        {featuredGames.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredGames.map((g, i) => (
                <Reveal key={g.slug} delay={i * 0.1}>
                  <GameCard game={g} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 text-center">
              <Link href="/games" className="group inline-flex items-center gap-2 font-semibold text-ion">
                See all games <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </>
        ) : (
          <ComingSoon />
        )}
      </Section>

      {/* About */}
      <Section id="about" className="overflow-hidden">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">About the studio</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Built small on purpose.
            </h2>
            {site.about.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-mute">{p}</p>
            ))}
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-ion">
              More about us <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>

          {/* Decorative stacked-tile composition */}
          <Reveal delay={0.15} className="relative mx-auto aspect-square w-full max-w-md">
            <div aria-hidden="true" className="absolute inset-0 rounded-[2.5rem] border border-line bg-void-2" />
            <div aria-hidden="true" className="bg-grid absolute inset-0 rounded-[2.5rem] opacity-70" />
            <div aria-hidden="true" className="absolute left-[14%] top-[14%] h-[38%] w-[38%] rotate-[-8deg] rounded-3xl bg-ion shadow-[0_30px_80px_-20px_#c6ff3d90] animate-float [--r:-8deg]" />
            <div aria-hidden="true" className="absolute bottom-[16%] right-[14%] h-[30%] w-[30%] rotate-[10deg] rounded-3xl bg-pulse shadow-[0_30px_80px_-20px_#ff3d8b90] animate-float [--r:10deg] [animation-delay:-3s]" />
            <div aria-hidden="true" className="absolute bottom-[20%] left-[22%] h-[18%] w-[18%] rounded-2xl border-2 border-sky/70 animate-float [animation-delay:-5s]" />
            <div className="absolute right-[10%] top-[12%] rounded-2xl border border-line bg-void/80 px-5 py-4 backdrop-blur">
              <p className="font-display text-3xl font-bold text-ion">{games.length || "Soon"}</p>
              <p className="text-xs text-mute">{games.length ? "games live" : "on Google Play"}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why choose us */}
      <Section
        id="why"
        eyebrow="Why TASS"
        title="What you get in every TASS game."
        intro="Four promises we hold ourselves to, from the first prototype to the latest update."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-void-2 p-7 transition duration-500 hover:-translate-y-1 hover:border-ion/40">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ion/0 blur-2xl transition duration-500 group-hover:bg-ion/20" />
                <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-ion/10 text-ion ring-1 ring-ion/30 transition duration-500 group-hover:rotate-[-6deg] group-hover:bg-ion group-hover:text-void">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <p className="mt-6 font-mono text-xs text-mute">0{i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

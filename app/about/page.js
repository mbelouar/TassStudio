import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: `${site.name} is an independent game studio from ${site.location}. Learn how we build and why.`,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: `About · ${site.name}` },
};

const process = [
  { n: "01", t: "Spark", d: "Every game starts with one mechanic that feels good in the hand. If it isn’t fun as a grey-box prototype, it doesn’t move on." },
  { n: "02", t: "Prototype", d: "We playtest early and often, cutting anything that slows the fun down or gets in the player’s way." },
  { n: "03", t: "Polish", d: "Art, sound, juice and performance passes on real low- and mid-range devices before anything ships." },
  { n: "04", t: "Launch & listen", d: "We release on Google Play, then read reviews and support emails to guide every update." },
];

const values = [
  { t: "Fair by design", d: "Rewards you can earn by playing, optional ads, and virtual items that are clearly virtual." },
  { t: "Privacy-minded", d: "We collect as little as possible and explain exactly what our games and partners use." },
  { t: "Craft over volume", d: "We would rather ship fewer games that feel great than many that feel the same." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About TASS STUDIO" title={<>Small team. <span className="text-gradient">Serious about play.</span></>} intro={site.about[0]} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Our mission</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Make games that respect players.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-mute">
            <p>{site.about[1]}</p>
            <p>
              We are based in {site.location} and publish our games worldwide on Google Play.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="How we work" title="From first spark to live game.">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className="group relative rounded-3xl border border-line bg-void-2 p-7 transition hover:border-ion/40">
              <span className="font-display text-5xl font-bold text-white/10 transition group-hover:text-ion/70">{s.n}</span>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-mute">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section eyebrow="What we value" title="The rules we play by.">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08} className="panel p-7">
              <span aria-hidden="true" className={`block h-2 w-10 rounded-full ${["bg-ion", "bg-pulse", "bg-sky"][i % 3]}`} />
              <h3 className="mt-6 font-display text-lg font-semibold">{v.t}</h3>
              <p className="mt-3 leading-relaxed text-mute">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Registered details (mirrors the reference site's company block) */}
      <Section eyebrow="Company details" title="Registered details.">
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Company", site.legalName],
              ["D-U-N-S® Number", site.company.duns],
              ["Based in", site.location],
              ["Contact", site.email],
            ].map(([k, v]) => (
              <div key={k} className="bg-void px-6 py-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{k}</dt>
                <dd className="mt-2 font-display">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <CtaBanner />
    </>
  );
}

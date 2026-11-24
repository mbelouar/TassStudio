import Reveal from "@/components/Reveal";
import PrintButton from "@/components/PrintButton";
import { loadPrivacyPolicy } from "@/lib/privacyPolicy";
import { site } from "@/data/site";

/*
 * Mirrors the reference privacy page. The policy text itself lives in
 * content/privacy-policy.md; edit that file to change the wording.
 */

export const metadata = {
  title: "Privacy Policy",
  description: "Understand how we use your information, how advertising works, and the choices available to you.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: `Privacy Policy · ${site.name}` },
};

const glance = [
  {
    n: "01",
    k: "Your information",
    t: "Know what is collected.",
    d: "Device information, app and ad activity, and information you choose to send us.",
    cta: "Explore the data we use",
    href: "#information-collected-and-its-sources",
  },
  {
    n: "02",
    k: "Advertising",
    t: "Advertising partners.",
    d: "Gem Expedition uses Google AdMob directly. Mahjong uses Appodeal mediation, including Google AdMob. Garuda uses Appodeal with Google AdMob in its Google Play release.",
    cta: "Understand advertising",
    href: "#google-admob-and-advertising",
  },
  {
    n: "03",
    k: "Your choices",
    t: "Manage your privacy.",
    d: "Use the privacy choices available in the relevant app, or contact us about your information and rights.",
    cta: "Manage advertising choices",
    href: "#your-advertising-and-tracking-choices",
  },
];

const regions = [
  ["UK, EEA & Switzerland", "regional-privacy-rights-uk-eea-and-switzerland"],
  ["California", "california-notice-and-ccpacpra-rights"],
  ["Other US states", "other-united-states-privacy-laws"],
  ["South America", "south-america"],
  ["South Korea", "south-korea-pipa"],
  ["Japan", "japan-appi"],
  ["Mainland China", "mainland-china-pipl"],
  ["Thailand", "thailand-pdpa"],
  ["Other Asia-Pacific", "additional-asia-pacific-notices"],
  ["Canada, Australia & New Zealand", "canada-australia-and-new-zealand"],
];

export default function PrivacyPolicyPage() {
  const { html, toc, updated, readMinutes } = loadPrivacyPolicy();
  const file = `/downloads/${site.legalName.toLowerCase().replace(/\s+/g, "-")}-privacy-policy`;
  const tocIds = new Set(toc.map((t) => t.id));
  const validRegions = regions.filter(([, id]) => tocIds.has(id));

  const downloads = [
    { ext: "TXT", t: "Plain text policy", d: "Readable copy for app stores and records", href: `${file}.txt` },
    { ext: "MD", t: "Markdown policy", d: "Structured source version for editing", href: `${file}.md` },
    { ext: "HTML", t: "Standalone policy", d: "Portable browser-ready copy", href: `${file}.html` },
  ];

  const jump = [
    ["Advertising partners", "#google-admob-and-advertising"],
    ["Regional rights", "#regions"],
    ["Download a copy", "#downloads"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pb-14 pt-40 sm:pt-48 print:pt-0">
        <div aria-hidden="true" className="absolute inset-0 -z-10 print:hidden">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_65%)]" />
          <div className="absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-ion/15 blur-[110px]" />
          <div className="absolute right-0 top-20 h-[260px] w-[260px] rounded-full bg-pulse/15 blur-[100px]" />
        </div>
        <Reveal className="mx-auto max-w-6xl">
          <p className="eyebrow mb-5">{site.legalName} / Your privacy</p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">
            Understand how we use your information, how advertising works, and the choices available to you.
          </p>
          <dl className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              ["Updated", updated],
              ["Reading time", `${readMinutes} min read`],
              ["Scope", "Applies to our apps & this website"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-full border border-line bg-white/[0.03] px-4 py-2">
                <dt className="sr-only">{k}</dt>
                <dd className="text-bone/90">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-9 flex flex-wrap gap-3 print:hidden">
            <a href="#policy" className="inline-flex items-center gap-2 rounded-full bg-ion px-6 py-3 font-semibold text-void transition hover:-translate-y-0.5 hover:glow-ion">
              Read the policy <span aria-hidden="true">↓</span>
            </a>
            {jump.map(([label, href]) => (
              <a key={href} href={href} className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5">
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* At a glance */}
      <section className="px-5 pb-16 print:hidden">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Start here</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Privacy, at a glance.</h2>
            </div>
            <p className="text-mute">
              Find the{" "}
              <a href="#super-fortune-garuda-slots" className="text-ion underline decoration-ion/40 underline-offset-4 hover:decoration-ion">
                Super Fortune Garuda Slots game notice
              </a>{" "}
              below, or browse the full policy.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {glance.map((g, i) => (
              <Reveal key={g.n} delay={i * 0.08} className="h-full">
                <a href={g.href} className="group flex h-full flex-col rounded-3xl border border-line bg-void-2 p-7 transition duration-500 hover:-translate-y-1 hover:border-ion/40">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ion">{g.n} / {g.k}</p>
                  <h3 className="mt-5 font-display text-xl font-semibold">{g.t}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-mute">{g.d}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bone group-hover:text-ion">
                    {g.cta} <span aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Region chooser */}
          <Reveal className="panel mt-6 p-7" as="div">
            <div id="regions" className="scroll-mt-28">
              <h2 className="font-display text-xl font-semibold">Looking for your regional rights?</h2>
              <p className="mt-2 text-mute">Jump directly to the notice that applies to you.</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Choose your region">
                {validRegions.map(([label, id]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="inline-flex rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-bone/90 transition hover:border-ion/50 hover:text-ion">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full policy */}
      <section id="policy" className="scroll-mt-24 px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block print:hidden">
            <nav aria-label="Policy sections" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <p className="eyebrow mb-4">On this page</p>
              <ol className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="block text-mute transition hover:text-ion">{t.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="max-w-3xl">
            <article className="prose-legal panel p-6 sm:p-10" dangerouslySetInnerHTML={{ __html: html }} />
            <a href="#top" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mute hover:text-ion print:hidden">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="scroll-mt-24 px-5 pb-24 print:hidden">
        <Reveal className="mx-auto max-w-6xl">
          <p className="eyebrow mb-3">Downloads</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Keep a copy</h2>
          <p className="mt-3 text-mute">Download the current policy, or print it for your records.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {downloads.map((d) => (
              <a key={d.ext} href={d.href} download className="group rounded-3xl border border-line bg-void-2 p-6 transition hover:-translate-y-1 hover:border-ion/40">
                <span className="inline-grid h-11 min-w-11 place-items-center rounded-xl bg-ion/10 px-2 font-mono text-xs font-semibold text-ion ring-1 ring-ion/30 group-hover:bg-ion group-hover:text-void">
                  {d.ext}
                </span>
                <p className="mt-5 font-display font-semibold">{d.t}</p>
                <p className="mt-1 text-sm text-mute">{d.d}</p>
              </a>
            ))}
            <PrintButton />
          </div>
        </Reveal>
      </section>
    </>
  );
}

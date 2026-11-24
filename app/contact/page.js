import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: `Contact ${site.name} for player support, privacy requests, partnerships or press.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: `Contact · ${site.name}` },
};

export default function ContactPage() {
  const cards = [
    { k: "Email", v: site.email, href: `mailto:${site.email}` },
    { k: "Location", v: site.location },
    { k: "Privacy requests", v: "Use the form and choose “Privacy or data request”, or email us directly." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Say hello to <span className="text-gradient">the studio.</span></>}
        intro="Need help with a game, want your data deleted, or have a partnership in mind? Tell us the game, your device and what happened, and we’ll get back to you."
      />

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.k} delay={i * 0.08} className="panel p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">{c.k}</p>
                {c.href ? (
                  <a href={c.href} className="mt-2 block break-words font-display text-lg hover:text-ion">{c.v}</a>
                ) : (
                  <p className="mt-2 leading-relaxed text-bone/90">{c.v}</p>
                )}
              </Reveal>
            ))}
            <Reveal delay={0.24} className="panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">Registered office</p>
              <address className="mt-2 not-italic leading-relaxed text-bone/90">
                {site.legalName}
                {site.company.address.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

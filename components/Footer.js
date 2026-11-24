import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";
import { games } from "@/data/games";

const socialLabels = {
  googlePlay: "Google Play",
  x: "X",
  instagram: "Instagram",
  youtube: "YouTube",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
};

/** Site footer with legal name, registered details and links. */
export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="relative mt-10 border-t border-line bg-void-2/50">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ion/50 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo size="lg" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">{site.tagline} Independent mobile games, made in {site.location.split(",")[0]}.</p>
          <a href={`mailto:${site.email}`} className="mt-5 inline-block text-sm font-medium text-ion hover:underline">
            {site.email}
          </a>
        </div>

        <FooterCol title="Studio">
          {site.nav.filter((n) => n.href !== "/privacy-policy").map((n) => (
            <FooterLink key={n.href} href={n.href}>{n.label}</FooterLink>
          ))}
        </FooterCol>

        {games.length > 0 ? (
          <FooterCol title="Games">
            {games.map((g) => (
              <FooterLink key={g.slug} href={`/games#${g.slug}`}>{g.title}</FooterLink>
            ))}
          </FooterCol>
        ) : (
          <FooterCol title="Games">
            <FooterLink href="/games">Coming soon</FooterLink>
          </FooterCol>
        )}

        <FooterCol title="Legal">
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          {socials.map(([key, url]) => (
            <li key={key}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-mute transition hover:text-bone">
                {socialLabels[key] ?? key} ↗
              </a>
            </li>
          ))}
        </FooterCol>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved. {site.name} is a trading name of {site.legalName}.</p>
          <p>
            {site.company.type}, registered in {site.company.jurisdiction} · D-U-N-S® {site.company.duns}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-sm text-mute transition hover:text-bone">
        {children}
      </Link>
    </li>
  );
}

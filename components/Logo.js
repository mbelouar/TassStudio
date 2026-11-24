import { useId } from "react";

/**
 * TASS STUDIO logo, inline so it renders instantly and inherits theme colours.
 * The mark: a chamfered "cartridge" tile with a T cut through it and a
 * magenta "player pixel". Standalone files live in /public (logo.svg,
 * logo-mark.svg, logo-on-light.svg).
 */
export function LogoMark({ className = "h-9 w-9", title = "TASS STUDIO" }) {
  const maskId = `tass-cut-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`; // unique per instance
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} role="img" aria-label={title}>
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="#fff" />
          <rect x="15" y="16" width="30" height="9" rx="2.5" fill="#000" />
          <rect x="25.5" y="16" width="9" height="32" rx="2.5" fill="#000" />
        </mask>
      </defs>
      <path
        d="M18 4H46L60 18V46C60 53.7 53.7 60 46 60H18C10.3 60 4 53.7 4 46V18C4 10.3 10.3 4 18 4Z"
        className="fill-ion"
        mask={`url(#${maskId})`}
      />
      <rect x="42" y="38" width="8" height="8" rx="2" className="fill-pulse" />
    </svg>
  );
}

/** Blocky TASS wordmark drawn as paths (no font dependency). */
export function Wordmark({ className = "h-5 w-auto" }) {
  return (
    <svg viewBox="0 0 100 28" className={className} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M0 0H22V6H14V28H8V6H0Z M26 28V8C26 3.6 29.6 0 34 0H40C44.4 0 48 3.6 48 8V28H42V18H32V28Z M32 12H42V8C42 6.9 41.1 6 40 6H34C32.9 6 32 6.9 32 8Z M74 0H58C54.7 0 52 2.7 52 6V11C52 14.3 54.7 17 58 17H68V22H52V28H68C71.3 28 74 25.3 74 22V17C74 13.7 71.3 11 68 11H58V6H74Z M100 0H84C80.7 0 78 2.7 78 6V11C78 14.3 80.7 17 84 17H94V22H78V28H94C97.3 28 100 25.3 100 22V17C100 13.7 97.3 11 94 11H84V6H100Z"
      />
    </svg>
  );
}

/** Mark + wordmark lockup used in header and footer. */
export default function Logo({ size = "md" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark className={big ? "h-12 w-12" : "h-9 w-9"} />
      <span className="flex flex-col gap-1 leading-none">
        <Wordmark className={`${big ? "h-6" : "h-[18px]"} w-auto text-bone`} />
        <span className={`font-mono font-semibold uppercase text-ion ${big ? "text-[11px] tracking-[0.62em]" : "text-[8.5px] tracking-[0.6em]"}`}>
          Studio
        </span>
      </span>
    </span>
  );
}

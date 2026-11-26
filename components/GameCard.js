"use client";

import Image from "next/image";
import { useRef } from "react";
import GooglePlayButton from "./GooglePlayButton";

// SVGs are served as-is; raster screenshots go through Next's image optimiser.
const isSvg = (src) => src.endsWith(".svg");

/**
 * Game showcase card: icon, title, description, screenshots and a
 * Google Play button. A soft spotlight in the game's accent colour follows
 * the cursor on hover.
 *
 * layout="feature" shows screenshots beside the text (used on /games);
 * layout="compact" stacks them (used on the home page grid).
 */
export default function GameCard({ game, layout = "compact", priority = false }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const feature = layout === "feature";

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      style={{ "--accent": game.accent }}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-void-2 p-5 transition duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 sm:p-7"
    >
      {/* cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)" }}
      />
      {/* accent hairline on top */}
      <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent opacity-60" />

      <div className={feature ? "grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12" : "flex h-full flex-col"}>
        <div className={`flex flex-col ${feature ? "" : "flex-1"}`}>
          <div className="flex items-center gap-4">
            <Image
              src={game.icon}
              alt={`${game.title} icon`}
              width={72}
              height={72}
              unoptimized={isSvg(game.icon)}
              className="h-16 w-16 rounded-2xl shadow-lg shadow-black/50 ring-1 ring-white/10 transition duration-500 group-hover:rotate-[-4deg] group-hover:scale-105 sm:h-[72px] sm:w-[72px]"
            />
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: game.accent }}>
                {game.genre}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{game.title}</h3>
            </div>
          </div>

          <p className="mt-5 font-display text-sm text-bone/90">{game.tagline}</p>
          <p className="mt-2 leading-relaxed text-mute">{game.description}</p>

          {game.tags?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
              {game.tags.map((t) => (
                <li key={t} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-mute">
                  {t}
                </li>
              ))}
            </ul>
          )}

          {feature && <GooglePlayButton href={game.playStoreUrl} title={game.title} className="mt-7 self-start" />}
        </div>

        {/* Screenshots: phone-frame row (feature) or 3-up grid (compact) */}
        <div
          className={
            feature
              ? "-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-7 sm:px-7 lg:mx-0 lg:justify-end lg:overflow-visible lg:px-0"
              : "mt-7 grid grid-cols-3 gap-2.5"
          }
        >
          {game.screenshots.slice(0, 3).map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-void-3 shadow-xl shadow-black/40 transition duration-500 ${
                feature ? "w-[38%] min-w-[130px] max-w-[190px] shrink-0 snap-start lg:w-[31%]" : ""
              } ${feature && i === 1 ? "lg:-translate-y-4 lg:group-hover:-translate-y-7" : "group-hover:-translate-y-1"}`}
              style={{ aspectRatio: game.screenshotAspect ?? "390 / 844", ...(!feature && { transitionDelay: `${i * 60}ms` }) }}
            >
              <Image
                src={src}
                alt={`${game.title} screenshot ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 190px, 40vw"
                priority={priority && i === 0}
                unoptimized={isSvg(src)}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {!feature && (
          <div className="pt-7">
            <GooglePlayButton href={game.playStoreUrl} title={game.title} />
          </div>
        )}
      </div>
    </article>
  );
}

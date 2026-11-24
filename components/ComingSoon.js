import Link from "next/link";
import Reveal from "./Reveal";
import { LogoMark } from "./Logo";

/**
 * Shown on Home and Games while data/games.js is empty.
 * Disappears automatically once the first game is added.
 */
export default function ComingSoon() {
  return (
    <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-void-2 px-6 py-14 sm:px-14 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-ion/20 blur-[90px]" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-pulse/20 blur-[90px]" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ion/30 bg-ion/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ion">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ion opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ion" />
            </span>
            In development
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Our first games are coming soon to Google Play.
          </h3>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-mute">
            We’re polishing our first titles right now. Want to know when they launch, or interested in partnering with us? Drop us a line.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ion px-7 py-3.5 font-semibold text-void transition hover:-translate-y-0.5 hover:glow-ion"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Three blank "phone" frames waiting for screenshots */}
        <div aria-hidden="true" className="mx-auto grid w-full max-w-sm grid-cols-3 gap-3">
          {["border-ion/40", "border-pulse/40", "border-sky/40"].map((c, i) => (
            <div
              key={c}
              className={`relative grid aspect-[9/19.5] place-items-center rounded-2xl border-2 border-dashed bg-void/60 ${c} ${i === 1 ? "-translate-y-4" : ""}`}
            >
              <LogoMark className="h-8 w-8 opacity-40" title="" />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

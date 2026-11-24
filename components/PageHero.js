import Reveal from "./Reveal";

/** Compact animated header used at the top of inner pages. */
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-12 pt-40 sm:pb-16 sm:pt-48">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_65%)]" />
        <div className="absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-ion/15 blur-[110px]" />
        <div className="absolute right-0 top-20 h-[260px] w-[260px] rounded-full bg-pulse/15 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute text-pretty">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

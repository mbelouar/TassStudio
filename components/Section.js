import Reveal from "./Reveal";

/**
 * Standard page section with an optional eyebrow, title and intro.
 * Keeps spacing and max-width consistent across the site.
 */
export default function Section({ id, eyebrow, title, intro, children, className = "", center = false }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || intro) && (
          <Reveal className={`mb-12 max-w-2xl sm:mb-16 ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 text-lg leading-relaxed text-mute text-pretty">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

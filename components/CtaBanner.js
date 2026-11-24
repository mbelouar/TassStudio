import Link from "next/link";
import Reveal from "./Reveal";
import { LogoMark } from "./Logo";
import { site } from "@/data/site";

/** Glowing call-to-action panel used near the bottom of pages. */
export default function CtaBanner({
  title = "Got a question, idea or partnership in mind?",
  text = "Players, partners and press are all welcome. We read every message and usually reply within two working days.",
}) {
  return (
    <section className="px-5 py-20 sm:py-24">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-ion/20 bg-void-2 px-6 py-14 text-center sm:px-16 sm:py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-0">
          <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-ion/25 blur-[100px]" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-pulse/25 blur-[100px]" />
        </div>
        <div className="relative">
          <LogoMark className="mx-auto h-14 w-14 animate-float [--r:0deg]" title="" />
          <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mute text-pretty">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full bg-ion px-7 py-4 font-semibold text-void transition hover:-translate-y-0.5 hover:glow-ion sm:w-auto">
              Contact the studio
            </Link>
            <a href={`mailto:${site.email}`} className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white/5 sm:w-auto">
              {site.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoMark } from "./Logo";
import { games } from "@/data/games";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1];

/**
 * Animated home hero: staggered headline, glowing grid, floating game icons
 * with light parallax, and a scrolling genre marquee.
 */
export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFloat = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Each sentence of the tagline gets its own line; the last one glows.
  const sentences = site.tagline.match(/[^.!?]+[.!?]*/g).map((x) => x.trim());
  // Up to 3 game icons float around the headline.
  // Until games are published, abstract brand tiles float instead.
  const floaters = games.length
    ? games.slice(0, 3)
    : [
        { slug: "t1", placeholder: true, className: "bg-ion shadow-ion/40" },
        { slug: "t2", placeholder: true, className: "bg-pulse shadow-pulse/40" },
        { slug: "t3", placeholder: true, className: "border-2 border-sky/80 bg-sky/10" },
      ];
  const floatPos = [
    "hidden sm:block left-[6%] top-[22%] [--r:-10deg]",
    "right-[5%] top-[13%] [--r:8deg] sm:right-[8%] sm:top-[16%]",
    "right-[12%] bottom-[18%] [--r:-6deg] hidden sm:block",
  ];

  const marquee = ["Arcade", "Puzzle", "Runner", "Casual", "Offline-friendly", "Made in the UK", "Android", "Fair rewards"];

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28">
      {/* Background: grid + glows */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute left-1/2 top-[38%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ion/20 blur-[120px] sm:h-[720px] sm:w-[720px]" />
        <div className="absolute right-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-pulse/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
      </div>

      {/* Floating game icons */}
      <motion.div aria-hidden="true" style={{ y: yFloat }} className="pointer-events-none absolute inset-0 -z-10">
        {floaters.map((g, i) => (
          <motion.div
            key={g.slug}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 + i * 0.15, ease }}
            className={`absolute ${floatPos[i]}`}
          >
            <div className="animate-float" style={{ animationDelay: `${i * -2.3}s` }}>
              {g.placeholder ? (
                <div className={`h-12 w-12 rounded-xl opacity-80 shadow-2xl sm:h-20 sm:w-20 sm:rounded-2xl ${g.className}`} />
              ) : (
              <Image
                src={g.icon}
                alt=""
                width={96}
                height={96}
                unoptimized={g.icon.endsWith(".svg")}
                priority
                className="h-12 w-12 rounded-xl opacity-80 sm:rounded-2xl shadow-2xl ring-1 ring-white/10 sm:h-24 sm:w-24"
              />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div style={{ opacity: fade }} className="mx-auto w-full max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-mute backdrop-blur"
        >
          <LogoMark className="h-6 w-6" title="" />
          Independent mobile game studio · UK
        </motion.div>

        <h1 className="font-display text-[clamp(2.3rem,10.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight">
          {sentences.map((sentence, si) => (
            <span key={si} className="block">
              {sentence.split(" ").map((w, wi, arr) => (
                <span key={wi} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <motion.span
                    className={`inline-block ${si === sentences.length - 1 && sentences.length > 1 ? "text-gradient" : ""}`}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + (si * 2 + wi) * 0.09, ease }}
                  >
                    {w}
                  </motion.span>
                  {wi < arr.length - 1 && "\u00A0"}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-mute text-pretty sm:text-xl"
        >
          {site.name} crafts bright, polished mobile games that are quick to pick up and hard to put down.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/games"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ion px-7 py-4 font-semibold text-void transition hover:-translate-y-0.5 hover:glow-ion sm:w-auto"
          >
            Explore our games
            <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-bone transition hover:border-bone/40 hover:bg-white/5 sm:w-auto"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Genre marquee */}
      <div className="mt-20 border-y border-line bg-void-2/60 py-4 backdrop-blur sm:mt-28" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-sm uppercase tracking-widest text-mute">
              {m}
              <span className={`h-2 w-2 rotate-45 ${i % 2 ? "bg-pulse" : "bg-ion"}`} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

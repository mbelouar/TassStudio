"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { site } from "@/data/site";

/** Sticky header: transparent at top, glass panel once scrolled; mobile drawer. */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled || open ? "border border-line bg-void/80 shadow-2xl shadow-black/40 backdrop-blur-xl" : "border border-transparent"
        }`}
      >
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-bone" : "text-mute hover:text-bone"
                  }`}
                >
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/games"
          className="hidden rounded-full bg-ion px-5 py-2.5 text-sm font-semibold text-void transition hover:-translate-y-0.5 hover:glow-ion md:inline-flex"
        >
          Play our games
        </Link>

        <button
          type="button"
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`absolute h-0.5 w-5 bg-bone transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-5 bg-bone transition ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-5 bg-bone transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-void/95 p-3 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 font-display text-lg ${isActive(item.href) ? "bg-white/5 text-ion" : "text-bone"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/games" className="mt-2 block rounded-xl bg-ion px-4 py-3 text-center font-semibold text-void">
              Play our games
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

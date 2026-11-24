import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center px-5 pt-28 text-center">
      <div>
        <LogoMark className="mx-auto h-16 w-16 animate-float" title="" />
        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">Game over?</h1>
        <p className="mx-auto mt-4 max-w-md text-mute">This page doesn’t exist. Press continue to get back to the menu.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-ion px-7 py-3.5 font-semibold text-void transition hover:glow-ion">
          Continue →
        </Link>
      </div>
    </section>
  );
}

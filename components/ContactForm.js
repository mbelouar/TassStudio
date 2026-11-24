"use client";

import { useState } from "react";
import { site } from "@/data/site";

const topics = ["Player support", "Bug report", "Privacy or data request", "Business / partnership", "Press", "Other"];

/**
 * Contact form that opens a pre-filled email draft (mailto:), so it works on
 * static hosting with no backend and stores nothing.
 * Want server-side delivery instead? Swap `onSubmit` for a POST to a form
 * service (Formspree, Resend, etc.).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `[${f.get("topic")}] ${f.get("game") ? `${f.get("game")} — ` : ""}from ${f.get("name")}`;
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nTopic: ${f.get("topic")}\nGame: ${f.get("game") || "—"}\n\n${f.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-line bg-void/60 px-4 py-3 text-bone placeholder:text-mute/60 transition focus:border-ion/60 focus:bg-void focus:outline-none focus:ring-2 focus:ring-ion/20";
  const label = "mb-2 block text-sm font-medium text-bone";

  return (
    <form onSubmit={onSubmit} className="panel grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="name" className={label}>Name</label>
        <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="topic" className={label}>Topic</label>
        <select id="topic" name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="game" className={label}>Game <span className="text-mute">(optional)</span></label>
        <input id="game" name="game" className={field} placeholder="Which game?" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" required rows={6} className={`${field} resize-y`} placeholder="How can we help?" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-mute sm:max-w-sm" aria-live="polite">
          {sent
            ? "Your email app should now be open with the message ready to send."
            : <>This opens a draft in your email app. Please don’t include passwords or payment details. See our <a href="/privacy" className="text-ion hover:underline">Privacy Policy</a>.</>}
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ion px-7 py-3.5 font-semibold text-void transition hover:-translate-y-0.5 hover:glow-ion"
        >
          Prepare email <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

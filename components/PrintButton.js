"use client";

/** "Print or save PDF" card on the Privacy Policy page (uses the browser print dialog). */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group rounded-3xl border border-line bg-void-2 p-6 text-left transition hover:-translate-y-1 hover:border-ion/40"
    >
      <span className="inline-grid h-11 min-w-11 place-items-center rounded-xl bg-ion/10 px-2 font-mono text-xs font-semibold text-ion ring-1 ring-ion/30 group-hover:bg-ion group-hover:text-void">
        PDF
      </span>
      <span className="mt-5 block font-display font-semibold">Print or save PDF</span>
      <span className="mt-1 block text-sm text-mute">Uses your browser print dialog</span>
    </button>
  );
}

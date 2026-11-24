/** "Get it on Google Play" button (styled in-house, opens the store listing). */
export default function GooglePlayButton({ href, title, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title ? `Get ${title} on Google Play` : "Get it on Google Play"}
      className={`group/gp inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2.5 text-bone transition hover:-translate-y-0.5 hover:border-ion/60 hover:shadow-[0_10px_30px_-12px_#c6ff3d90] ${className}`}
    >
      <svg viewBox="0 0 24 26" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path d="M1.2.6 13.3 12.9 1.2 25.2c-.4-.3-.7-.9-.7-1.6V2.2c0-.7.3-1.3.7-1.6Z" fill="#00D7FE" />
        <path d="m17.3 8.9-4 4L1.2.6C1.6.3 2.2.2 2.8.5l14.5 8.4Z" fill="#00F076" />
        <path d="M17.3 16.9 2.8 25.3c-.6.3-1.2.3-1.6-.1l12.1-12.3 4 4Z" fill="#F83C4D" />
        <path d="M22.4 14.3 17.3 17l-4-4.1 4-4 5.1 2.9c1.1.6 1.1 1.9 0 2.5Z" fill="#FFC100" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-wider text-white/70">Get it on</span>
        <span className="mt-0.5 text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}

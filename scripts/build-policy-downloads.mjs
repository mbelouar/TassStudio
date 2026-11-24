/**
 * Writes downloadable copies of the Privacy Policy (TXT, MD, HTML) to
 * public/downloads/. Runs automatically before `npm run build` and `npm run dev`.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { loadPrivacyPolicy, toPlainText } from "../lib/privacyPolicy.js";
import { site } from "../data/site.js";

const { markdown, html, updated } = loadPrivacyPolicy();
const out = path.join(process.cwd(), "public", "downloads");
const base = `${site.legalName.toLowerCase().replace(/\s+/g, "-")}-privacy-policy`;
mkdirSync(out, { recursive: true });

writeFileSync(path.join(out, `${base}.md`), markdown);
writeFileSync(path.join(out, `${base}.txt`), toPlainText(markdown));
writeFileSync(
  path.join(out, `${base}.html`),
  `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Privacy Policy — ${site.legalName}</title>
<style>body{font:16px/1.65 system-ui,sans-serif;max-width:760px;margin:40px auto;padding:0 20px;color:#1a1726}h2{margin-top:2.2em}a{color:#4a6b00}</style>
</head><body><h1>Privacy Policy</h1>
<p><strong>${site.legalName}</strong> · ${site.url} · Updated ${updated}</p>
${html}
</body></html>
`
);
console.log(`Privacy policy downloads written to public/downloads/${base}.{md,txt,html}`);

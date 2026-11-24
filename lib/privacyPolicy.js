/**
 * Loads the Privacy Policy from content/privacy-policy.md (the single source
 * of truth) and turns it into HTML + a table of contents.
 * Used by the /privacy-policy page and by scripts/build-policy-downloads.mjs.
 *
 * To change the policy, edit content/privacy-policy.md only.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { Marked } from "marked";

export const POLICY_FILE = path.join(process.cwd(), "content", "privacy-policy.md");

// "## 4. Google AdMob and advertising" -> "google-admob-and-advertising"
export const slugify = (text) =>
  text
    .replace(/<[^>]+>/g, "")
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");

export function loadPrivacyPolicy() {
  const markdown = readFileSync(POLICY_FILE, "utf8");
  const toc = [];
  const seen = new Map();

  const marked = new Marked({
    renderer: {
      // Give every heading a stable id so the TOC and region links can jump to it.
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        let id = slugify(inner);
        const n = seen.get(id) ?? 0;
        seen.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        if (depth === 2) toc.push({ id, title: inner.replace(/<[^>]+>/g, "") });
        if (depth === 1) return ""; // the page renders its own <h1>
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      // External links open in a new tab.
      link({ href, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:/.test(href);
        return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
      },
    },
  });

  const html = marked.parse(markdown);
  const updated = markdown.match(/\*\*Effective date and last updated:\*\*\s*(.+)/)?.[1]?.trim() ?? "";
  const words = markdown.split(/\s+/).length;
  const readMinutes = Math.max(1, Math.round(words / 230));

  return { markdown, html, toc, updated, readMinutes };
}

/** Plain-text version for the TXT download. */
export function toPlainText(markdown) {
  return markdown
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\((mailto:)?([^)]+)\)/g, (_, text, mail, url) => (mail || text === url ? text : `${text} (${url})`));
}

# TASS STUDIO — official website

Next.js 16 (App Router) · Tailwind CSS 4 · Framer Motion. Every page is prerendered as static HTML.

## Edit content

| What | Where |
| --- | --- |
| Studio name, tagline, about text, email, address, socials, site URL | `data/site.js` |
| Games (icon, screenshots, Google Play link, privacy notes) | `data/games.js` |
| Game artwork | `public/games/<slug>/` |
| Privacy Policy text (also generates the TXT/MD/HTML downloads) | `content/privacy-policy.md` |
| Logo files | `public/logo.svg` (dark bg), `public/logo-on-light.svg`, `public/logo-mark.svg`; favicon is `app/icon.svg` |
| Colours & fonts | `app/globals.css` (`@theme`) and `app/layout.js` |

**Adding a game:** drop `icon.png` + screenshots into `public/games/my-game/`, copy the template at the top of `data/games.js` into the list, done. While the list is empty the site shows a "coming soon" message. It appears on Home (if `featured: true`), Games, the footer and the structured data on the Games page. If the new game uses different ads or data, update `content/privacy-policy.md` too.

Screenshots look best at a 390×844 (phone portrait) ratio. PNG/JPG/WebP are automatically optimised to AVIF/WebP by `next/image`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (`git init && git add . && git commit -m "Initial site"`, then create the repo and push).
2. On vercel.com → **Add New → Project** → import the repo. Vercel detects Next.js; keep the defaults and click **Deploy**.
3. Optional custom domain: **Project → Settings → Domains** → add your domain and follow the DNS instructions.
4. Set `url` in `data/site.js` to the final domain and push again (this updates canonical URLs, Open Graph, sitemap and the legal pages).
5. In Google Play Console, set each app's privacy policy URL to `https://<your-domain>/privacy`.

Prefer pure static hosting? Uncomment `output: "export"` in `next.config.mjs`, add `unoptimized: true` under `images`, and `npm run build` produces an `out/` folder you can upload anywhere.

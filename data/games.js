/**
 * All games shown on the site live here.
 *
 * While this list is empty, the site shows a "coming soon" message on the
 * Home and Games pages, and hides the Games column in the footer.
 *
 * To add a game:
 *   1. Put its icon and screenshots in /public/games/<slug>/
 *      (PNG, JPG or WebP are optimised automatically). Screenshots look best
 *      in phone-portrait ratio (e.g. 1080x2340).
 *   2. Copy the template below into the `games` list and fill it in.
 *   3. Set `featured: true` to show it on the home page.
 *   4. If it shows ads, describe them in content/privacy-policy.md.
 *
 * Template:
 *
 *   {
 *     slug: "my-game",                       // used in URLs: /games#my-game
 *     title: "My Game",
 *     genre: "Puzzle",
 *     tagline: "One short, catchy line.",
 *     description: "Two or three sentences about the game.",
 *     icon: "/games/my-game/icon.png",
 *     screenshots: [
 *       "/games/my-game/shot-1.png",
 *       "/games/my-game/shot-2.png",
 *       "/games/my-game/shot-3.png",
 *     ],
 *     playStoreUrl: "https://play.google.com/store/apps/details?id=com.tassstudio.mygame",
 *     accent: "#C6FF3D",                     // card glow colour
 *     tags: ["Puzzle", "Offline"],
 *     featured: true,
 *   },
 */
export const games = [];

export const featuredGames = games.filter((g) => g.featured);

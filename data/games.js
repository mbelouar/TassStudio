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
 *     screenshotAspect: "1080 / 1920",       // optional: width / height of your screenshots (default phone 390/844)
 *     playStoreUrl: "https://play.google.com/store/apps/details?id=com.tassstudio.mygame",
 *     accent: "#C6FF3D",                     // card glow colour
 *     tags: ["Puzzle", "Offline"],
 *     featured: true,
 *   },
 */
export const games = [
  {
    slug: "neon-drift-rush",
    title: "Neon Drift Rush: Car Racing",
    genre: "Arcade Racing",
    tagline: "Drift neon streets, outrun the cops and chain combos.",
    description:
      "A high-octane arcade drift racer on glowing city streets at night. Chain drift combos, dodge traffic and blast past the police with nitro, all with one-thumb controls. 30 Career levels, an Endless mode and boss chases. No ads, no in-app purchases, fully offline.",
    icon: "/games/neon-drift-rush/icon.png",
    screenshots: [
      "/games/neon-drift-rush/drift.jpg",
      "/games/neon-drift-rush/chopper.jpg",
      "/games/neon-drift-rush/garage.jpg",
    ],
    screenshotAspect: "1080 / 2160",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.neondriftrush.app",
    accent: "#FF3DCB",
    tags: ["Racing", "Offline", "No ads"],
    featured: true,
  },
  {
    slug: "dino-dash",
    title: "Dino Dash: Jurassic Run",
    genre: "Arcade Runner",
    tagline: "Run, jump and dodge as a dino. Outrun extinction!",
    description:
      "A fast, fun dinosaur runner where one tap is all you need. Sprint through six prehistoric eras, outrun a giant T-Rex in epic boss chases, and hatch eggs to build your own dino team. 60 Adventure levels, an endless Extinction Run and a new Daily Challenge every day. No ads.",
    icon: "/games/dino-dash/icon.png",
    screenshots: [
      "/games/dino-dash/trex.jpg",
      "/games/dino-dash/lava.jpg",
      "/games/dino-dash/hatch.jpg",
    ],
    screenshotAspect: "1080 / 1920",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dinodash.jurassicrun",
    accent: "#FFB020",
    tags: ["Runner", "Arcade", "No ads"],
    featured: true,
  },
];

export const featuredGames = games.filter((g) => g.featured);

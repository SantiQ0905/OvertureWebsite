# Overture 7421 — Team Website

## Purpose & objective

This is the public website for **Overture**, team 7421, a PrepaTec robotics team competing
across three FIRST programs: **FRC**, **FTC**, and **FLL**. The site exists to:

- Give the team a real home on the web that reflects its identity — a retro 80s/90s
  automotive-instrument aesthetic tied to the team's tradition of naming every robot after
  a car or motorcycle (Skyline, DeLorean, Hornet, Hayabusa, and so on).
- Showcase the team's history and current robots season by season — stats, events, awards,
  and (eventually) photos/video for each build.
- Recruit new members via a dedicated Join Us page.
- Court and recognize sponsors with a tiered sponsorship page.
- Route visitors to the team's live competition discussion (ChiefDelphi threads) and its
  external scouting tool, without trying to host that content itself.
- Serve bilingual (Spanish-first, English-toggle) content so it's usable by the whole
  PrepaTec community.

The full design and content spec this site is built against lives in [`MVP.md`](./MVP.md).
A running audit of content/media/config that's still missing (pending photos, sponsor
data, contact links, etc.) is tracked in [`MISSING.md`](./MISSING.md) — check there before
assuming a gap is unknown.

## Stack

- React 19 + TypeScript, built with Vite
- React Router for page/route structure
- Hand-coded CSS (no UI framework) — palette and motion patterns centralized as CSS
  variables per the design system in `MVP.md`

## Content model

Team/robot data starts as Markdown files in [`public/OverData/`](./public/OverData)
(organized by program: `FRC/`, `FTC/`, `FLL/`), one file per robot. Those MDs are the
source of truth supplied by the team, but the site itself renders from statically
transcribed TypeScript data so the app doesn't need to parse Markdown at runtime:

- `src/data/robots.ts` — one entry per robot (stats, events, awards, links, bilingual copy)
- `src/data/sponsors.ts`, `src/data/gallery.ts`, `src/data/videos.ts`, `src/data/timeline.ts`
- `src/i18n/translations.ts` — all other bilingual (ES/EN) page copy

When an `OverData` MD is updated with new/real data, the corresponding entry in
`src/data/robots.ts` needs to be updated (or added) to match — the MD alone doesn't
change what renders on the site.

## Getting started

```bash
npm install
npm run dev       # start the dev server with HMR
npm run build      # type-check (tsc -b) and build for production
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Project structure

```
public/OverData/    Source-of-truth robot MDs, grouped by program (FRC/FTC/FLL)
public/images/       Static logos and other checked-in image assets
src/pages/            One component per route (Home, About, Robots, RobotDetail, Sponsors, News, JoinUs, NotFound)
src/components/       Shared UI (NavBar, Footer, RobotTile, Carousel, Timeline, etc.)
src/data/              Static content consumed by pages (robots, sponsors, gallery, videos, timeline)
src/i18n/               Language context + translations.ts (ES/EN)
```

## Notes for contributors

- The site defaults to Spanish; the language toggle persists the user's choice in
  `localStorage`. Every new page/component needs both an `es` and `en` copy.
- Match the existing design system — colors, chrome/gradient type, and motion patterns
  described in `MVP.md` — rather than introducing new one-off styles.
- Mobile QA is required for any UI change: nav collapse, hero legibility, and
  glow/blur/grid-background performance on phones.

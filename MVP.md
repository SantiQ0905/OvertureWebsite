# Overture (Team 7421) Website — MVP Spec

## Project Summary

Build a website for Overture, a PrepaTec robotics team competing in FIRST (FRC/FTC).
Visual direction: retro 80s/90s automotive-instrument aesthetic (Outrun/synthwave-adjacent),
tied directly to the team's convention of naming robots after cars and motorcycles
(Skyline, DeLorean, Impala, Mulsanne, Hornet, Valkyrie, Diavel, Hayabusa).

Build hand-coded with React + Vite.
## Design System

### Color palette (use exactly these, do not substitute or auto-generate shades)
- `#6B35AA` — Main / primary brand color
- `#96D1D5` — "OVERTURE" wordmark text and detail accents
- `#3E3D60` — Secondary dark tone, used for muted/pre-reveal states and backgrounds
- `#EC188B` — Buttons (default state)
- `#DF10E0` — Links (default state)
- `#DF4E95` — Hover state
- `#DF6F6D` — Active state
- `#DF7D5D` — Disabled state
- `#E0993A` — Accent — **reserved exclusively for Sponsors tier content**, don't reuse elsewhere

Apply hover/active/disabled consistently across every interactive element (buttons, nav
links, cards) sitewide, not just primary CTAs.

### Motif and visual language
- Retro-futurist "dashboard" language instead of generic robotics icons (gears, circuit lines).
- Reference points: speedometer/tachometer arcs and needles, chrome or gradient display
  type, sunset-grid horizon backgrounds (classic Outrun gridlines), light VHS
  scanline/grain texture used sparingly as accent, not everywhere.
- Typography: consider a chrome/gradient-fill display face for headers (team name, robot
  names, section titles), clean sans-serif for body copy.

### Motion / interaction
- Logo: subtle tachometer-needle sweep or "ignition flicker/glow" animation on load
  and/or hover, gradient sweep from `#6B35AA` to `#EC188B`. Lightweight SVG + CSS, no
  animation library required unless already using one.
- Scroll-reveal on body copy (About, Sponsors): fade/color-reveal as content enters
  viewport, muted pre-reveal state tinted `#3E3D60` rather than plain gray, so the
  reveal reads as "headlights turning on."
- No dead pages: every route must render real content or an intentional empty state,
  never a blank page.
- No one-off design elements that break the retro-dashboard system (avoid unrelated
  clip art, meme graphics, or motifs disconnected from the car/moto theme).

## Pages

### Language
- The website needs to be served in spanish first and must have a button to toggle to english. The default language is spanish. The language toggle should be persistent across pages and routes, and the selected language should be stored in local storage so that it persists across sessions.

### Content
- Most of the content will be served by MDs or JSONs in the `public/OverData` folder. If possible write the content statically in a translations.ts file so to allow updates to the website not the MDs or JSONs which are only a starting point. Account in the dropdown menus for the multiple teams we have in each category (FTC, FRC, FLL).

### Media and assets
- All media assets (images, videos, logos) should be stored in the `public/assets` folder. Use relative paths to reference these assets in the content files. Ensure that all images are optimized for web performance (compressed without significant loss of quality).

### Home
- Hero with logo (animated per above), team name/number, brief tagline.
- Dedicated card/section linking out to the scouting tool (external React app Santi
  built), styled on-brand so it reads as part of Overture rather than a random link.

### About
- Team story/mission. Scroll-reveal treatment on paragraphs.

### Robots
- One "spec sheet" style card per robot, styled like a retro car/moto brochure:
    - Robot name in large chrome/gradient type (Skyline, DeLorean, Impala, Mulsanne,
      Hornet, Valkyrie, Diavel, Hayabusa, etc.)
    - Stat block styled like performance specs (season, drivetrain, game-piece handling,
      notable results)
    - Photo with subtle grain/VHS-style treatment
- Content/data model should make it easy to add new robots each season.

### Sponsors
- Sponsor tiers rendered with `#E0993A` as the distinguishing accent color, separate
  from the rest of the site's palette, so sponsor recognition stands out.

### News
- Does NOT host original news content. Acts as a branded chooser/landing page with
  two buttons: "FTC Thread" and "FRC Thread," each opening the corresponding
  ChiefDelphi thread in a new tab.
- Needs the two actual ChiefDelphi thread URLs supplied (FTC thread, FRC thread) —
  placeholder links until provided.

### Join Us
- Recruitment info / how to join, contact or form.

### 404 (not found)
- On-brand "off track" / "check engine" style page: logo, nav, short message, and a
  "back to base" button. Not a default framework fallback.

## Technical notes

- Stack: React + Vite, React Router for page/route structure (including the 404 route
  and the News chooser).
- External handoffs (ChiefDelphi threads, scouting tool) open in new tabs; style the
  outbound link/card on-brand even though the destination itself isn't skinnable.
- Mobile QA is a first-class requirement, not an afterthought: explicitly test nav
  collapse behavior, hero legibility, and the performance/appearance of
  glow/blur/grid-background effects on phones before considering any page done.
- Keep the color values and motion patterns above centralized (e.g. CSS variables /
  a theme file) so they're reused consistently rather than redefined per component.

## MVP scope (build in this order)

1. Design system setup: color variables, base typography, shared button/link states
   (default/hover/active/disabled).
2. Home page with animated logo and scouting-tool link card.
3. Nav + routing skeleton for all pages, including a working 404.
4. About page with scroll-reveal.
5. Robots page with the spec-sheet card component (start with placeholder data for
   at least 2–3 robots).
6. Sponsors page with tiered `#E0993A` accent treatment.
7. News chooser page (placeholder ChiefDelphi links until real URLs are supplied).
8. Join Us page.
9. Mobile QA pass across all pages.
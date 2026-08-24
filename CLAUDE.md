# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Fictional demo site for "Wren Hair Studio" (Clapham, London) — sales material
for a hairdresser/beauty client package (Astro + Tailwind CSS v4), not a real
business. No real client, no real backend/accounts. Content is in English.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to dist/
npm run preview   # serve the dist/ build
```

Requires Node.js >= 22.12. There is no lint or test setup in this repo.

## Architecture

- **Astro, no framework islands** — every page/component is a plain `.astro`
  file; the only client JS is inline `<script>` tags (scroll reveal in
  `Layout.astro`, the contact and booking form submit handlers).
- **Content lives centrally in [src/data/site.ts](src/data/site.ts)** — salon
  info, nav, service categories/pricing, team bios, testimonials, gallery
  images. Pages import from here rather than hardcoding copy, so editing
  copy/prices/hours should happen in this file, not scattered across pages.
- **`Layout.astro` wraps every page** (`src/layouts/Layout.astro`), handling
  `<head>`/SEO/OG tags and wiring up `Header`/`Footer`. It also owns the
  site-wide scroll-triggered fade-in: elements with class `.reveal` start
  hidden only once JS confirms `IntersectionObserver` support and no
  `prefers-reduced-motion`, via a `.reveal-js` class toggled onto `<html>`
  (see corresponding CSS in `src/styles/global.css`). Content must stay
  visible with no JS or with reduced motion — treat this as progressive
  enhancement, not a required animation.
- **Header has two visual variants** (`headerVariant` prop: `"solid"` |
  `"overlay"`) — `"overlay"` is used on the homepage hero so the header
  floats transparent over the photo, then solidifies (`.is-solid` class) on
  scroll or when the mobile menu opens. Styling for this lives in the
  `.header-overlay` rules in `global.css`, tuned to a higher specificity
  than the inline Tailwind utility classes on the same elements — don't add
  `!important`, follow the existing specificity pattern instead.
- **Theming is Tailwind v4 CSS-first**: no `tailwind.config.js` — the design
  tokens (`--color-*`, `--font-*`, breakpoints) are declared in `@theme`
  inside [src/styles/global.css](src/styles/global.css) and consumed as
  Tailwind utility classes (`text-ink`, `bg-canvas`, `font-display`, etc.).
  Fonts are self-hosted via `@fontsource-variable`.
- **Third-party integrations are real, but demo-scoped** — do not treat them
  as placeholders to leave alone:
  - **Booking** ([src/pages/booking/index.astro](src/pages/booking/index.astro)):
    a request form (service, preferred stylist/date/time-of-day, contact
    details, notes), not an instant-booking widget — no scheduling
    integration is connected. Submits the same way as the contact form (see
    below) and shows a confirmation explaining the client will be called
    back to confirm a time. Service options are generated from
    `serviceCategories` and stylist options from `team`, both in
    `src/data/site.ts` — adding/editing services or team members there
    updates the form automatically.
  - **Contact form** ([src/pages/contact/index.astro](src/pages/contact/index.astro)):
    submits via `fetch` as JSON to Web3Forms using a dedicated access key
    (Web3Forms access keys are meant to be client-side, not secret). Web3Forms
    rejects requests it detects as non-browser (curl, automated test
    clients), so a failed submission from a script is not necessarily a bug
    — verify from an actual browser. The booking form reuses this exact
    fetch pattern and access key. Swap the access key for the client's own
    when reusing this template.
  - **Map**: static OpenStreetMap iframe embed, no API key.
  - **Images**: Unsplash placeholder photos referenced by direct URL, chosen
    to plausibly fit a hair salon — replace with the client's real photos for
    production use.
- **Consent checkbox** ([src/components/ConsentCheckbox.astro](src/components/ConsentCheckbox.astro))
  is a shared, required GDPR-style consent control linking to `/privacy/`;
  reuse it on any new form rather than writing a one-off checkbox.


<div align="center">

# Brand DNA // The Invisible Instrument

**Precision AI-powered brand design system extractor & token workbench.**

Convert any live URL, PDF, or brand asset into production-ready, WCAG-verified design tokens — colors, typography, logos, and voice — in seconds.

[![Vite](https://img.shields.io/badge/Vite-8.x-purple?logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey)](#license)

</div>

---

## Overview

**Brand DNA // The Invisible Instrument** is a marketing showcase and interactive workbench demo for an AI-driven design token extraction platform. It demonstrates how a brand's visual identity — colors, type scales, logos, contrast ratios, and written voice — can be systematically extracted from any digital surface and exported as production-ready design system artifacts.

The app is built as a hybrid **React 19 + Vite** SPA with an accompanying **Astro** static site configuration for SEO-oriented pages, styled entirely with **Tailwind CSS 4** and animated with **Motion (Framer Motion)**.

### Key capabilities

- **Multi-modal ingestion engine** — accept live URLs, PDFs, and dropped brand assets as extraction sources.
- **Semantic color intelligence** — palette extraction with WCAG 2.1 contrast ratio matrix (AA / AAA pass–fail badges).
- **Typography hierarchy resolver** — display, heading, body, and monospace specimens with Google Fonts dynamic resolution.
- **Logo studio** — deterministic vector-to-pixel engine for logo capture and normalization.
- **W3C Design Tokens engine** — emit DTCG-format tokens (`--token-*` custom properties).
- **AI brand voice synthesis** — archetype detection, keyword clouds, do/don't writing rules, and sample headlines.
- **Multi-format export suite** — CSS variables, Tailwind config, Tokens JSON, and `DESIGN.md` documentation.
- **Public sharing & visual diff versioning** — shareable read-only specimen links under `/share/:token` and `/kit/:kitId`.

---

## Tech Stack

| Layer         | Technology                                              |
| ------------- | ------------------------------------------------------- |
| Build tool    | Vite 8.x                                                |
| UI framework  | React 19 (TypeScript, JSX)                              |
| Styling       | Tailwind CSS 4 (`@tailwindcss/vite`), custom CSS        |
| Animation     | Motion 12 (Framer Motion successor)                     |
| Icons         | lucide-react                                            |
| AI            | `@google/genai` (Gemini API)                            |
| Server (opt.) | Express 4 + dotenv                                      |
| Static site   | Astro config present (`astro.config.mjs`)               |
| Lint / types  | `tsc --noEmit` (TypeScript 7)                           |
| Fonts         | Cormorant Garamond, Libre Baskerville, Courier Prime    |

---

## Project Structure

```
.
├── index.html                 # SPA entry + SEO meta, JSON-LD, OG/Twitter cards
├── package.json
├── vite.config.ts             # React + Tailwind plugins, @ alias, HMR control
├── astro.config.mjs           # Astro static config (site: branddna.dev)
├── tsconfig.json
├── .env.example               # Env var template (GEMINI_API_KEY, APP_URL…)
├── MIGRATION_GUIDE.md         # App redirection & migration architecture notes
├── public/
│   ├── og-image.png           # Open Graph share image
│   ├── robots.txt
│   ├── sitemap.xml
│   └── sitemap.xsl
└── src/
    ├── App.tsx                # Root component + client-side route parser
    ├── main.tsx               # React bootstrap
    ├── types.ts               # Shared domain types (BrandKitData, PaletteItem…)
    ├── index.css              # Global styles
    ├── components/            # Header, Hero, WorkbenchDemo, FeatureMatrix,
    │                          # ExportShowcase, Architecture, Comparison,
    │                          # CtaBanner, Footer, CookieBanner (+ .astro twins)
    ├── data/
    │   ├── mockBrands.ts      # Preset brand kits (Stripe, Linear, …)
    │   └── seo.ts             # Per-route SEO metadata generators
    ├── hooks/
    │   └── useSEO.ts          # Dynamic document.title / meta management
    ├── layouts/
    │   └── Layout.astro
    ├── lib/
    │   └── patchFetch.ts      # Fetch interception helper
    ├── pages/                 # about, contact, privacy-policy,
    │                          # terms-and-conditions, 404 (+ React twins)
    └── styles/
        └── styles.css
```

### Routes (client-side)

| Path                      | Name       | Description                                  |
| ------------------------- | ---------- | -------------------------------------------- |
| `/`                       | home       | Marketing landing + interactive demo         |
| `/about`                  | about      | About page                                   |
| `/contact` (`/support`)   | contact    | Contact / support                            |
| `/privacy-policy`         | privacy    | Privacy policy                               |
| `/terms-and-conditions`   | terms      | Terms & conditions                           |
| `/build` `/library` `/compare` `/design` | — | Tool views                          |
| `/kit/:kitId`             | kit        | Kit inspector (dynamic token specimen)       |
| `/share/:shareToken`      | share      | Public read-only shared specimen             |
| `/404` (and fallback)     | 404        | Not-found state with reason codes            |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** (or pnpm / yarn)
- A **Gemini API key** for AI-powered extraction features

### 1. Clone the repository

```bash
git clone https://github.com/girishlade111/brand-dna.git
cd brand-dna
```

### 2. Install dependencies

```bash
npm install
```

> `node_modules/` is intentionally excluded via `.gitignore`.

### 3. Configure environment variables

Copy the example env file and fill in your secrets:

```bash
cp .env.example .env
```

Then edit `.env`:

```dotenv
# Required — Gemini AI API key used for brand/voice extraction
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"

# Hosting URL (auto-injected on AI Studio / Cloud Run)
APP_URL="http://localhost:3000"

# Where CTA buttons redirect for the core workbench app
PUBLIC_APP_URL="/app"
VITE_PUBLIC_APP_URL="/app"
```

> **Never commit `.env`.** It is git-ignored; only `.env.example` is tracked.

### 4. Run the development server

```bash
npm run dev
```

The app starts at **http://localhost:3000** (bound to `0.0.0.0`).

### 5. Production build

```bash
npm run build      # Outputs to dist/
npm run preview    # Preview the production build
```

### 6. Type-check (lint)

```bash
npm run lint       # tsc --noEmit
```

### 7. Clean

```bash
npm run clean      # Removes dist/ and server.js
```

---

## Environment Variables

| Variable              | Required | Purpose                                                        |
| --------------------- | -------- | -------------------------------------------------------------- |
| `GEMINI_API_KEY`      | Yes      | Authenticates Gemini API calls for extraction & voice synthesis |
| `APP_URL`             | No       | Public base URL of the hosted app (OAuth/callbacks)            |
| `PUBLIC_APP_URL`      | No       | CTA redirect target for the core workbench (default `/app`)    |
| `VITE_PUBLIC_APP_URL` | No       | Vite-exposed variant of `PUBLIC_APP_URL`                       |
| `DISABLE_HMR`         | No       | Set to `"true"` to disable HMR/file-watching (AI Studio)       |

---

## Features Deep Dive

### Color Intelligence & WCAG Matrix

Every extracted swatch is annotated with its **relative luminance**, **contrast ratio** against the base canvas, and a **pass/fail badge** (AA / AAA) per WCAG 2.1 AA/AAA thresholds:

```ts
{ name: "Indigo Stripe", hex: "#635BFF", role: "Brand Primary",
  luminance: "0.142", ratio: "7.4:1", badge: "AA Pass" }
```

### Typography Specimens

The type scale is broken into four canonical roles — Display, Heading, Body, and Data/Code — each with size, weight, sample copy, and font stack.

### Brand Voice Synthesis

AI-generated brand voice includes:

- **Archetype** (e.g. "Architectural, Precise, Confident")
- **Keyword cloud** for tone anchoring
- **Do / Don't** writing rules
- **Sample headline** demonstrating the voice

### Export Formats

| Format        | Use case                                        |
| ------------- | ----------------------------------------------- |
| CSS variables | Drop into any codebase as `--token-*` props     |
| Tailwind      | Merge into `theme.extend` in Tailwind config    |
| Tokens JSON   | DTCG / Style Dictionary compatible              |
| DESIGN.md     | Human-readable design system documentation      |

### Sharing & Versioning

Extracted kits get stable share links (`/share/:token`) and inspectable kit pages (`/kit/:kitId`) for visual diffing across versions.

---

## SEO & Metadata

- Full **Open Graph** and **Twitter Card** meta in `index.html`
- **JSON-LD** structured data (`SoftwareApplication` + `Organization`)
- Per-route dynamic titles/descriptions via `src/data/seo.ts` + `useSEO` hook
- `public/robots.txt`, `public/sitemap.xml`, and `sitemap.xsl`
- Canonical URL: `https://branddna.design/`

---

## Migration & App Redirection

The marketing page is intentionally decoupled from the core workbench app. See **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** for the three supported migration paths:

1. **Nested route directory** (`/app`) served by Astro
2. **Monorepo / remote micro-frontend** (`PUBLIC_APP_URL=https://app.branddna.dev`)
3. **Embedded SSR island** using Astro's React integration with `client:visible`

---

## Available Scripts

| Script      | Command              | Description                            |
| ----------- | -------------------- | -------------------------------------- |
| `dev`       | `npm run dev`        | Start Vite dev server on port 3000     |
| `build`     | `npm run build`      | Production build to `dist/`            |
| `preview`   | `npm run preview`    | Preview the production build           |
| `lint`      | `npm run lint`       | Type-check with `tsc --noEmit`         |
| `clean`     | `npm run clean`      | Delete `dist/` and `server.js`         |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please ensure `npm run lint` passes before submitting.

---

## Security

- `.env` is git-ignored — never hardcode API keys.
- Use `.env.example` as the tracked template only.
- Rotate `GEMINI_API_KEY` immediately if it is ever exposed.

---

## Author

**Girish** — [github.com/girishlade111](https://github.com/girishlade111)

Support: support@branddna.design

---

## License

This project is **UNLICENSED / All rights reserved** unless otherwise noted. Contact the author for usage permission.


---

**Built by [Girish Lade](https://ladestack.in)** — founder of [LadeStack](https://ladestack.in).

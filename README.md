# Oppvenuz Event App

A Next.js (App Router) front-end for the Oppvenuz wedding vendor marketplace.

## Quick start

Prerequisites
- Node.js (v16+ recommended)
- npm (or pnpm/yarn)

Install

```bash
npm install
```

Run (development)

```bash
npm run dev
# opens at http://localhost:3000
```

Build

```bash
npm run build
npm start
```

Scripts
- `dev` — starts Next.js in development (`next dev`)
- `build` — builds for production (`next build`)
- `start` — runs the production server (`next start`)
- `lint` — runs `next lint`

## How to change Font Awesome approach
If you prefer to use the Font Awesome npm package (bundled) instead of the CDN link:

```bash
npm install @fortawesome/fontawesome-free
```

Then import the CSS in `src/app/globals.css` or the top-level layout entry:

```css
@import '~@fortawesome/fontawesome-free/css/all.min.css';
```

or in your root layout: `import '@fortawesome/fontawesome-free/css/all.min.css';`

## Contributing
- Make changes on a feature branch and open a PR against `main`.

---

If you want the README expanded (development notes, env variables, deployment), tell me which sections to add.
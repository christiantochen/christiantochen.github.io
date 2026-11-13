# christiantochen.com

Personal site for Kristianto Chen. A single-page Next.js (App Router) site styled with Tailwind CSS and shadcn/ui, exported as static HTML and hosted on GitHub Pages.

## Local development

Requires **Node 24** (see `.nvmrc`).

```sh
nvm use          # or install Node 24 another way
npm ci
npm run dev      # http://localhost:3000
```

Other scripts:

- `npm run lint`: ESLint (flat config in `eslint.config.mjs`)
- `npm run build`: static export to `./out`. Preview it with any static server, e.g. `npx serve out`

## Project layout

- `src/app/layout.tsx`: root layout, fonts (Newsreader, Figtree, IBM Plex Sans and Mono via `next/font`), metadata, and the script that sets the theme before first paint
- `src/app/page.tsx`: the page
- `src/app/globals.css`: Tailwind and the design tokens (light/dark follow the system setting until the visitor picks one with the toggle; the choice is saved in `localStorage`)
- `src/components/theme-toggle.tsx`: the light/dark button
- `src/components/previews.tsx`: the small previews on the "Things I've made" cards
- `src/components/ui/button.tsx`: shadcn/ui Button (add more with `npx shadcn@latest add <component>`)
- `public/CNAME`: custom domain for GitHub Pages

## Deployment

Every push to `master` (or a manual run from the Actions tab) runs `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build` and publishes `./out` with the official GitHub Pages actions.

One-time repository setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**, set the custom domain to `christiantochen.com`, and enable **Enforce HTTPS**.

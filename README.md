# christiantochen.com

Personal site for Christianto Chen. A single-page Next.js (App Router) site styled with Tailwind CSS and shadcn/ui, exported as static HTML and hosted on GitHub Pages.

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

- `src/app/layout.tsx`: root layout, fonts (Newsreader + Figtree via `next/font`) and metadata
- `src/app/page.tsx`: the page
- `src/app/globals.css`: Tailwind and the design tokens (light/dark follow the system setting)
- `src/components/ui/button.tsx`: shadcn/ui Button (add more with `npx shadcn@latest add <component>`)
- `public/CNAME`: custom domain for GitHub Pages

## Deployment

Every push to `master` (or a manual run from the Actions tab) runs `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build` and publishes `./out` with the official GitHub Pages actions.

One-time repository setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**, set the custom domain to `christiantochen.com`, and enable **Enforce HTTPS**.

# FEROCOM d.o.o. Website

Company website for FEROCOM d.o.o., a Slovenian manufacturer of cast iron manhole covers, grates, and drainage systems.

## Tech Stack

- **Vue 3** with Composition API
- **Vite** for build tooling
- **TypeScript**
- **Tailwind CSS**
- **vue-i18n** for internationalization (SL, EN, HR, IT)
- **Pinia** for state management
- **Vue Router** with history mode

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run type-check` | TypeScript type checking |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run test:unit` | Run unit tests (Vitest) |
| `npm run test:e2e` | Run E2E tests (Playwright) |

## Project Structure

```
├── public/              Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── layout/      TheHeader, TheNavigation, TheFooter
│   │   └── product/     ProductCard, ProductGrid, ProductDetail
│   ├── views/           Page components (Home, About, Contact, Location, ProductDetail)
│   ├── data/            Product catalog, company & contact data
│   ├── i18n/            Translations (sl, en, hr, it)
│   ├── router/          Vue Router config
│   ├── stores/          Pinia stores
│   ├── assets/          CSS and SVG assets
│   ├── App.vue          Root component
│   └── main.ts          Entry point
├── e2e/                 Playwright E2E tests
├── index.html           HTML entry point
├── vite.config.ts       Vite config
├── tailwind.config.js   Tailwind config
└── tsconfig.json        TypeScript config
```

## Deployment

The `production` branch contains the built output served by the hosting provider.

To deploy:

```bash
npm run build
# Copy dist/ contents to production branch and push
./scripts/deploy.sh
```

Or manually:

1. `npm run build`
2. Switch to `production` branch
3. Replace files with `dist/` contents
4. Commit and push

## Branch Strategy

- **main** - Source code, development happens here
- **production** - Built output (`dist/`), deployed to hosting

## License

Private - All rights reserved by FEROCOM d.o.o.

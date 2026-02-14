# FEROCOM d.o.o.

Company website for **FEROCOM d.o.o.**, a Slovenian manufacturer specializing in cast iron infrastructure products since 1992. The product catalog includes manhole covers, drainage grates, and channel drain systems (Gridion, Sabdrain) for municipal, road, and residential applications.

The site supports four languages: Slovenian, English, Italian, and Croatian.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Vue 3 (Composition API) |
| Build | Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Routing | Vue Router 4 (history mode) |
| State | Pinia 3 |
| i18n | vue-i18n 9 (SL, EN, IT, HR) |
| Testing | Vitest + Playwright |
| Linting | ESLint 9 with Vue + TypeScript configs |

## Getting Started

**Prerequisites:** Node.js >= 18

```bash
npm install
npm run dev
```

Dev server runs at http://localhost:5173.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run test:unit` | Run unit tests (Vitest) |
| `npm run test:e2e` | Run E2E tests (Playwright) |

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── products/          Product photos
│   │   └── files/             PDF catalogs and documents
│   ├── .htaccess              Apache rewrite rules (SPA + security headers)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/            TheHeader, TheNavigation, TheFooter
│   │   └── product/           ProductCard, ProductGrid, ProductDetail
│   ├── views/
│   │   ├── HomeView.vue       Product catalog grid (landing page)
│   │   ├── AboutView.vue      Company info, load classes, inscriptions
│   │   ├── ProductDetailView  Single product with specs and variants
│   │   ├── LocationView.vue   Google Maps embed
│   │   └── ContactView.vue    Contact details and working hours
│   ├── data/                  Static data (products, company, contact)
│   ├── i18n/
│   │   ├── index.ts           i18n setup with locale persistence
│   │   └── locales/           sl.json, en.json, it.json, hr.json
│   ├── router/                Route definitions with lazy loading
│   ├── stores/                Pinia stores
│   ├── assets/                Global CSS, SVG logo
│   ├── App.vue
│   └── main.ts
├── e2e/                       Playwright E2E tests
├── scripts/
│   └── deploy.sh              Build and push to production branch
├── .github/workflows/
│   └── ci.yml                 CI: type-check, lint, build
├── index.html                 HTML entry point
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Product catalog grid with cards |
| `/about` | About | Company history, load classes (B125, C250, D400), inscription options |
| `/product/:id` | Product Detail | Individual product with technical specs |
| `/location` | Location | Address and embedded Google Map |
| `/contact` | Contact | Email, phone numbers, working hours |

All routes except `/` are lazy-loaded for smaller initial bundle.

## Deployment

The site is deployed to **domenca.com** shared hosting via cPanel Git deployment. The `production` branch contains the built static files and a `.cpanel.yml` that copies them to `public_html/`.

### Deploy

```bash
./scripts/deploy.sh
```

This single command builds the project, commits the output to the `production` branch, and pushes to origin. cPanel then auto-pulls and runs the `.cpanel.yml` tasks to copy files into `public_html/`.

### One-Time cPanel Setup

1. Log in to cPanel and go to **Git Version Control**
2. Click **Create** and fill in:
   - **Clone URL:** `https://github.com/reddiamond1234/website.git`
   - **Branch:** `production`
   - **Repository Path:** `/home/feroco40/repositories/website`
3. Save. Go to **Manage** > **Pull or Deploy** > **Update from Remote**, then **Deploy HEAD Commit**

After this initial setup, every `git push origin production` will be available for deployment. Enable auto-deploy in cPanel for fully automatic deploys.

### Branch Strategy

- **`main`** -- Source code. All development happens here.
- **`production`** -- Built output only. Contains `.cpanel.yml` for cPanel deployment.

## Adding Content

### Products

Edit `src/data/products.js` and add a new entry:

```js
{
  id: 8,
  translationKey: 'newProduct',
  name: 'Product Name',
  details: 'Short description',
  image: '/images/products/photo.jpg',
  longDescription: ''
}
```

Add the product image to `public/images/products/` and translations to each locale file in `src/i18n/locales/`.

### Translations

Each locale file (`src/i18n/locales/*.json`) contains all UI strings. Add keys under the `products` section matching the `translationKey` from the product data.

## License

Private -- All rights reserved by FEROCOM d.o.o.

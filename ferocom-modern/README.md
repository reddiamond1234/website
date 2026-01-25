# FEROCOM d.o.o. - Modern Vue 3 Website

![Vue 3](https://img.shields.io/badge/Vue-3.5-brightgreen)
![Vite](https://img.shields.io/badge/Vite-5.4-blue)
![License](https://img.shields.io/badge/License-Private-red)

Modern, production-ready Vue 3 website for FEROCOM d.o.o., a Slovenian company specializing in cast iron manhole covers, grates, and drainage systems.

## 🚀 Features

- ✅ **Vue 3 Composition API** - Modern, reactive component architecture
- ✅ **Vue Router** - Seamless client-side navigation
- ✅ **Component-Based** - Reusable, maintainable code structure
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Google Maps Integration** - Interactive location display
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Security Hardened** - CSP headers, XSS prevention, secure configuration
- ✅ **Production Optimized** - Minified, tree-shaken, code-split bundles
- ✅ **Lazy Loading** - Route-based code splitting for faster loads

## 📁 Project Structure

```
ferocom-modern/
├── public/
│   ├── images/                    # Static images and files
│   │   ├── products/              # Product images
│   │   ├── files/                 # PDF documents
│   │   └── logo.png               # Company logo
│   ├── .htaccess                  # Server configuration
│   ├── robots.txt                 # SEO robots file
│   └── favicon.ico                # Site icon
├── src/
│   ├── components/
│   │   ├── layout/                # Layout components
│   │   │   ├── TheHeader.vue      # Site header
│   │   │   ├── TheNavigation.vue  # Navigation menu
│   │   │   └── TheFooter.vue      # Site footer
│   │   └── product/               # Product components
│   │       ├── ProductCard.vue    # Product card
│   │       ├── ProductGrid.vue    # Product grid
│   │       └── ProductDetail.vue  # Product detail
│   ├── data/
│   │   ├── products.js            # Product catalog data
│   │   ├── company.js             # Company information
│   │   └── contact.js             # Contact information
│   ├── router/
│   │   └── index.ts               # Vue Router configuration
│   ├── views/
│   │   ├── HomeView.vue           # Home/Products page
│   │   ├── AboutView.vue          # About page
│   │   ├── ProductDetailView.vue  # Product detail page
│   │   ├── LocationView.vue       # Location with map
│   │   └── ContactView.vue        # Contact page
│   ├── App.vue                    # Root component
│   └── main.ts                    # App entry point
├── dist/                          # Production build output
├── index.html                     # HTML template
├── vite.config.ts                 # Vite configuration
├── package.json                   # Dependencies
├── DEPLOYMENT.md                  # Deployment guide
└── README.md                      # This file
```

## 🛠️ Development Setup

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v10.0.0 or higher

### Installation

```bash
# Clone or navigate to project directory
cd ferocom-modern

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Lint and fix code
npm run type-check   # Type check TypeScript files
```

## 🏗️ Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production files will be in the `dist/` directory.

### Build Output

- **JavaScript**: ~95 KB total (31.9 KB gzipped)
  - Vendor bundle (Vue + Vue Router): 84.5 KB
  - App bundle: 9.3 KB
  - Route chunks: Lazy-loaded
- **CSS**: ~8.5 KB total (3 KB gzipped)
- **HTML**: 1 KB (0.56 KB gzipped)

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to domovanje.com shared hosting.

### Quick Deployment Steps

1. **Build**: `npm run build`
2. **Test**: Upload to staging subdomain first
3. **Deploy**: Upload `dist/` contents to `public_html/`
4. **Verify**: Test all functionality

## 📝 Content Management

### Adding/Editing Products

Edit `src/data/products.js`:

```javascript
{
  id: 4,
  name: 'New Product',
  details: 'Short description',
  image: '/images/products/new-product.jpg',
  longDescription: 'Full product description',
  stats: {
    'Spec 1': 'Value 1',
    'Spec 2': 'Value 2'
  },
  variants: [
    { id: 401, size: 'Size', material: 'Material', description: 'Description' }
  ]
}
```

### Updating Company Info

Edit `src/data/company.js` for:
- Company name
- About section content
- Product categories
- Usage areas

### Updating Contact Info

Edit `src/data/contact.js` for:
- Email addresses
- Phone numbers
- Working hours
- Physical address

After any changes, rebuild and redeploy.

## 🗺️ Google Maps Configuration

The Location page uses a free Google Maps iframe embed (no API key required).

To update the map:
1. Open `src/views/LocationView.vue`
2. Update `mapUrl` constant with new embed URL
3. Rebuild and redeploy

## 🔒 Security Features

- **Content Security Policy (CSP)** - Prevents XSS attacks
- **Secure Headers** - X-Frame-Options, X-Content-Type-Options
- **HTTPS Enforcement** - All traffic redirected to HTTPS
- **No v-html** - Eliminated XSS vulnerabilities
- **Input Sanitization** - Safe template rendering
- **Protected Files** - Sensitive files blocked via .htaccess

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🎨 Styling

- **CSS Approach**: Component-scoped styles + global styles
- **Responsive**: Mobile-first design
- **Colors**:
  - Primary: `#1E90FF` (Dodger Blue)
  - Primary Dark: `#2980b9`
  - Background: `#f0f0f0`
  - Text: `#333`

## 🔧 Technology Stack

- **Vue 3.5** - Progressive JavaScript framework
- **Vue Router 4.6** - Official router for Vue.js
- **Vite 5.4** - Next generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **Terser** - JavaScript minification

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 90+
- **Bundle Size**: < 100 KB (gzipped)

## 🐛 Troubleshooting

### Development Issues

**Issue**: Port 5173 already in use
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

**Issue**: TypeScript errors
```bash
# Rebuild TypeScript declarations
npm run type-check
```

### Build Issues

**Issue**: Build fails with Node version error
- Solution: Upgrade Node.js to v18+ or higher

**Issue**: Out of memory error
```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

## 📄 License

Private - All rights reserved by FEROCOM d.o.o.

## 👤 Contact

**FEROCOM d.o.o.**
- 📍 Brnčičeva ulica 45, 1231 Ljubljana - Črnuče, Slovenija
- 📧 ferocom@siol.net
- 📞 01/561-34-87, 01/561-34-74
- 🕐 Pon-Pet: 7:00-14:30

---

**Built with ❤️ using Vue 3 and Vite**

Last Updated: January 19, 2026

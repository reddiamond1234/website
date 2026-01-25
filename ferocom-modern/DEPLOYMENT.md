# FEROCOM Website - Deployment Guide

## 📋 Overview

This document provides step-by-step instructions for deploying the modernized FEROCOM website to domovanje.com shared hosting.

## 🎯 Pre-Deployment Checklist

- ✅ Production build completed successfully
- ✅ All components migrated from Vue 2 to Vue 3
- ✅ Data externalized to separate modules
- ✅ Vue Router configured for navigation
- ✅ Google Maps integrated on Location page
- ✅ Security improvements implemented (CSP, .htaccess)
- ✅ Images copied to public folder
- ✅ Production build optimized with Terser

## 📦 Build Output Summary

### File Sizes
- **Total JavaScript**: ~95 KB (31.9 KB gzipped)
- **Total CSS**: ~8.5 KB (3 KB gzipped)
- **index.html**: 1 KB (0.56 KB gzipped)
- **Images**: Original sizes (recommend WebP conversion later)

### Build Contents
The `dist/` folder contains:
```
dist/
├── index.html                 # Main HTML file
├── favicon.ico                # Site icon
├── robots.txt                 # SEO configuration
├── .htaccess                  # Server configuration
├── images/                    # Product images and files
│   ├── products/              # Product images
│   ├── files/                 # PDF documents
│   └── logo.png               # Company logo
└── assets/                    # Minified JS & CSS
    ├── index-*.js             # Main app bundle
    ├── vendor-*.js            # Vue & Vue Router bundle
    ├── index-*.css            # Global styles
    └── *View-*.js/css         # Lazy-loaded route components
```

## 🚀 Deployment Process

### Stage 1: Testing on Subdomain (Recommended)

#### 1.1 Create Staging Subdomain

1. Log into domovanje.com cPanel
2. Navigate to **"Subdomains"** section
3. Create subdomain:
   - **Subdomain**: `test` or `staging`
   - **Domain**: your-domain.si
   - **Document Root**: `public_html/test/` (auto-generated)
4. Click **"Create"**

#### 1.2 Upload to Staging

**Option A: Using cPanel File Manager**
1. In cPanel, open **"File Manager"**
2. Navigate to `public_html/test/`
3. Click **"Upload"**
4. Upload **all files and folders** from `ferocom-modern/dist/`
5. Wait for upload to complete
6. Verify all files are present

**Option B: Using FTP (FileZilla/Cyberduck)**
1. Get FTP credentials from cPanel (look for FTP Accounts)
2. Connect to FTP server:
   - Host: ftp.your-domain.si
   - Username: your-ftp-username
   - Password: your-ftp-password
   - Port: 21
3. Navigate to `public_html/test/`
4. Upload all files from `ferocom-modern/dist/`
5. Wait for upload to complete

#### 1.3 Staging Testing Checklist

Access your staging site at `https://test.your-domain.si` and verify:

- [ ] Website loads without errors
- [ ] SSL certificate is active (green padlock)
- [ ] All navigation links work:
  - [ ] O nas (About)
  - [ ] Artikli (Products)
  - [ ] Lokacija (Location)
  - [ ] Kontakt (Contact)
- [ ] Product listing displays correctly
- [ ] Clicking product opens detail page
- [ ] Product detail page shows:
  - [ ] Product image
  - [ ] Description
  - [ ] Technical specifications
  - [ ] Variants
  - [ ] "Nazaj na izdelke" button works
- [ ] Google Maps loads on Location page
- [ ] Contact information displays correctly
- [ ] Mobile menu (hamburger) works on mobile
- [ ] Responsive design works on:
  - [ ] Desktop (1920px+)
  - [ ] Tablet (768px-1024px)
  - [ ] Mobile (320px-768px)
- [ ] Browser back/forward buttons work
- [ ] No console errors in browser DevTools
- [ ] Page loads in under 3 seconds

**If any issues are found**: Fix them in the source code, rebuild (`npm run build`), and re-upload to staging.

### Stage 2: Production Deployment

⚠️ **Only proceed after successful staging testing**

#### 2.1 Backup Current Production Site

**CRITICAL: Always backup before deploying!**

1. In cPanel File Manager, navigate to `public_html/`
2. Select all files and folders
3. Click **"Compress"**
4. Choose **"Zip Archive"**
5. Name it: `backup-YYYY-MM-DD.zip` (e.g., `backup-2026-01-19.zip`)
6. Download the backup to your local computer
7. Store in a safe location

#### 2.2 Deploy to Production

**Option A: Using cPanel File Manager**
1. In File Manager, navigate to `public_html/`
2. **Delete old files** (except backup .zip):
   - Select all files/folders
   - Click **"Delete"**
   - Confirm deletion
3. Upload **all files and folders** from `ferocom-modern/dist/`
4. Wait for upload to complete
5. **Verify file permissions**:
   - Folders: 755
   - Files: 644
6. Immediately test the site

**Option B: Using FTP**
1. Connect to FTP server
2. Navigate to `public_html/`
3. **Download backup** of current files first
4. Delete old files
5. Upload all files from `ferocom-modern/dist/`
6. Set correct permissions
7. Test immediately

#### 2.3 Post-Deployment Verification

Visit your main domain `https://your-domain.si` and run through the same testing checklist as staging.

**Additional Checks**:
- [ ] Google Search Console shows no errors (may take 24-48 hours)
- [ ] Site loads on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Test from different devices:
  - [ ] Desktop/Laptop
  - [ ] Smartphone (iOS & Android)
  - [ ] Tablet

## 🔧 Troubleshooting

### Issue: 404 Not Found on Page Refresh

**Cause**: Vue Router uses history mode, but server doesn't redirect all routes to index.html

**Solution**: Ensure `.htaccess` was uploaded correctly to `public_html/`

Check `.htaccess` contains:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Issue: Images Not Loading

**Cause**: Image paths incorrect or files not uploaded

**Solution**:
1. Verify `images/` folder exists in `public_html/`
2. Check folder structure matches:
   ```
   public_html/
   └── images/
       ├── products/
       │   ├── cover.jpg
       │   ├── drain.jpg
       │   └── line_drain.jpg
       ├── files/
       └── logo.png
   ```
3. Check file permissions (644 for images)

### Issue: Mixed Content Warnings

**Cause**: Some resources loading over HTTP instead of HTTPS

**Solution**: Verify `.htaccess` force HTTPS rule:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Issue: Google Maps Not Loading

**Cause**: CSP policy or iframe blocked

**Solutions**:
1. Check `index.html` CSP allows Google Maps:
   ```html
   frame-src https://www.google.com;
   ```
2. Verify Google Maps embed URL is correct in `LocationView.vue`
3. Check browser console for specific errors

### Issue: Slow Page Load

**Possible Causes & Solutions**:
1. **Large images**: Convert to WebP format (see Phase 6 in plan)
2. **No compression**: Enable Gzip in cPanel (usually enabled by default on LiteSpeed)
3. **No caching**: Verify `.htaccess` cache headers are active

## 🔄 Emergency Rollback

If critical issues occur after production deployment:

1. **Immediate Rollback**:
   - In File Manager, go to `public_html/`
   - Delete all current files
   - Extract your backup zip file: `backup-YYYY-MM-DD.zip`
   - Click "Extract"
   - Site should be restored immediately

2. **Debug Issues**:
   - Fix problems in source code
   - Test thoroughly on staging
   - Re-deploy when confirmed working

## 🔐 Security Notes

### Implemented Security Features

1. **Content Security Policy (CSP)**: Prevents XSS attacks
2. **X-Frame-Options**: Prevents clickjacking
3. **X-Content-Type-Options**: Prevents MIME sniffing
4. **HTTPS Enforcement**: All traffic redirected to HTTPS
5. **No v-html**: Removed XSS vulnerability from old code
6. **Directory Browsing Disabled**: Prevents file listing
7. **Sensitive Files Protected**: .htaccess, .env, etc. blocked

### Security Headers

The `.htaccess` file configures these headers automatically:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📊 Performance Optimization

### Current Optimizations
- ✅ Code minification (Terser)
- ✅ Code splitting (vendor bundles)
- ✅ Tree shaking (unused code removed)
- ✅ CSS minification
- ✅ Browser caching configured (1 year for images, 1 month for CSS/JS)
- ✅ Gzip compression (via .htaccess)

### Future Optimizations (Optional)
- [ ] Convert images to WebP format (70% smaller)
- [ ] Implement lazy loading for images
- [ ] Add service worker for offline support
- [ ] Setup CDN for static assets

## 📝 Updating Content

### Updating Products

1. Edit `src/data/products.js`
2. Add/modify products in the `products` array
3. Add product images to `public/images/products/`
4. Run `npm run build`
5. Upload new `dist/` contents to server

### Updating Company Info

1. Edit `src/data/company.js`
2. Modify text, lists, or other content
3. Run `npm run build`
4. Upload new `dist/` contents to server

### Updating Contact Info

1. Edit `src/data/contact.js`
2. Update email, phone, or working hours
3. Run `npm run build`
4. Upload new `dist/` contents to server

## 🌐 Google Maps Configuration

The Google Maps embed on the Location page uses a free iframe embed (no API key required).

**Current Location**: Brnčičeva ulica 45, 1231 Ljubljana - Črnuče

To update the map location:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click **"Share"** → **"Embed a map"**
4. Copy the iframe src URL
5. Update `mapUrl` in `src/views/LocationView.vue`
6. Rebuild and redeploy

## 📈 Monitoring & Analytics

### Google Search Console Setup
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add your domain property
3. Verify ownership (upload HTML file or add DNS record)
4. Submit sitemap: `https://your-domain.si/sitemap.xml`

### Uptime Monitoring
Recommended free service: [UptimeRobot](https://uptimerobot.com/)
- Monitor: `https://your-domain.si`
- Check interval: Every 5 minutes
- Alert email when site is down

### Google Analytics (Optional)
1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html` `<head>` section
4. Rebuild and redeploy

## 📞 Support

### Common Questions

**Q: Do I need to rebuild every time I change content?**
A: Yes, this is a static site. Any content changes require rebuilding and re-uploading.

**Q: Can I edit files directly on the server?**
A: Not recommended. Always edit source files, rebuild, and redeploy to maintain consistency.

**Q: What if I lose the backup?**
A: Always keep multiple backups. Download a fresh backup weekly to your local computer.

**Q: How do I add a new page?**
A:
1. Create new view component in `src/views/`
2. Add route in `src/router/index.ts`
3. Add navigation link in `src/components/layout/TheNavigation.vue`
4. Rebuild and redeploy

## 🎉 Deployment Complete!

Your modernized FEROCOM website is now live with:
- ✅ Vue 3 with Composition API
- ✅ Modern component architecture
- ✅ Vue Router for seamless navigation
- ✅ Google Maps integration
- ✅ Security improvements
- ✅ Production-optimized build
- ✅ Mobile-responsive design

**Production URL**: `https://your-domain.si`
**Staging URL**: `https://test.your-domain.si` (if configured)

---

**Last Updated**: January 19, 2026
**Version**: 1.0.0

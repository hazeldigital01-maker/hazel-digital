# Hazel Digital Website — Deployment & Domain Setup Guide

This guide provides instructions for deploying the **Hazel Digital** website, connecting a custom domain, enabling SSL/HTTPS, and configuring Google Search Console and Analytics.

---

## 1. Quick Project Preview & Build

To test and build the website locally or on a server:

### Run Development Server
```bash
npm install
npm run dev
```
Preview at `http://localhost:3000`.

### Compile for Production
```bash
npm run build
```
This generates the optimized static build files in the `dist/` directory.

---

## 2. Free & Low-Cost Hosting Options

Because Hazel Digital is a modern React + Vite application, it can be hosted for **free** on global edge networks with automatic SSL:

### Option A: Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Sign up at [vercel.com](https://vercel.com).
3. Click **Add New Project** and select your GitHub repository.
4. Vercel automatically detects Vite and sets the build command to `npm run build` with output directory `dist`.
5. Click **Deploy**. Your site will be live on an SSL-secured URL in under 1 minute.

### Option B: Netlify
1. Sign up at [netlify.com](https://netlify.com).
2. Drag and drop your compiled `dist/` folder into Netlify, or link your Git repository.
3. Build command: `npm run build`, Publish directory: `dist`.

### Option C: Cloudflare Pages
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com).
2. Connect your Git repository.
3. Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`.

---

## 3. Connecting Your Custom Domain

Once you purchase your domain (e.g. from GoDaddy, Namecheap, Hostinger, or Google Domains):

1. Go to your hosting platform's project settings (e.g. Vercel → **Settings** → **Domains**).
2. Enter your domain name (e.g., `hazeldigital.in` or `hazeldigital.com`).
3. In your domain registrar's DNS manager, add the required records:
   - **Apex domain (`@`)**: Add an `A` record pointing to your host's IP (e.g., `76.76.21.21` for Vercel).
   - **Subdomain (`www`)**: Add a `CNAME` record pointing to your host's alias (e.g., `cname.vercel-dns.com`).
4. **HTTPS / SSL**: Modern hosts automatically provision and renew a free Let's Encrypt SSL certificate within 15–30 minutes of DNS verification.

---

## 4. Google Search Console & XML Sitemap

1. Sign in to [Google Search Console](https://search.google.com/search-console) using `hazeldigital01@gmail.com`.
2. Add your domain property using DNS TXT verification.
3. Once verified, navigate to **Sitemaps** in the left menu.
4. Enter your sitemap path: `https://yourdomain.com/sitemap.xml` and click **Submit**.
5. The sitemap is already included in `public/sitemap.xml`.

---

## 5. Adding Google Analytics (GA4)

1. Sign in to [Google Analytics](https://analytics.google.com) and create a free GA4 property for Hazel Digital.
2. Copy your **Measurement ID** (e.g., `G-XXXXXXXXXX`).
3. Add the Google tag script inside `<head>` in `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 6. Business Contact Information

- **Brand Name**: Hazel Digital
- **Email**: hazeldigital01@gmail.com
- **Phone / WhatsApp**: +91 7014797458
- **Service Locations**: Chomu, Jaipur, Rajasthan, India

# GitHub Pages Deployment Guide

This guide covers how to deploy a React/Vite application to GitHub Pages with a custom domain, based on the successful deployment of the Elixir México community website.

## 🎯 Overview

GitHub Pages can serve static websites in two ways:
- **User/Organization Pages**: `username.github.io` repository serves from `main` branch
- **Project Pages**: Any repository serves from `gh-pages` branch or `main` branch `/docs` folder

This guide covers both approaches with focus on custom domain configuration.

## 📋 Prerequisites

- React/Vite application ready for production
- GitHub repository
- Custom domain (optional)
- Basic Git knowledge

## 🛠️ Step 1: Configure Vite for GitHub Pages

### For Custom Domain Deployment
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for custom domains
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

### For GitHub Pages Subdirectory (project pages)
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Your repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

## 🏗️ Step 2: Fix Asset Paths

**Problem**: Absolute paths like `/logo.svg` don't work with GitHub Pages base paths.

**Solution**: Use relative paths in your components:

```tsx
// ❌ Wrong - absolute path
<img src="/logo.svg" alt="Logo" />

// ✅ Correct - relative path
<img src="./logo.svg" alt="Logo" />
```

**Apply to all components**: Header, Footer, Hero, Features, etc.

## 🤖 Step 3: GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build for production
        run: npm run build

      - name: Deploy to main branch
        run: |
          # Configure git
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"

          # Preserve build files before branch switch
          mkdir -p /tmp/build_files
          cp -r dist/* /tmp/build_files/

          # Switch to main branch
          git checkout main || git checkout -b main

          # Clear current content (except .git)
          find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +

          # Copy build files from temp location
          cp -r /tmp/build_files/* .

          # Commit and push
          git add .
          git commit -m "Deploy: $(date)" || exit 0
          git push origin main
```

## 🌐 Step 4: Custom Domain Setup

### Add CNAME File
Create `public/CNAME` with your domain:
```
yourdomain.com
```

### DNS Configuration
Point your domain to GitHub Pages:
```
CNAME record: yourdomain.com → username.github.io
```

## ⚙️ Step 5: GitHub Repository Settings

1. **Go to Repository Settings**: `https://github.com/username/repo/settings/pages`

2. **Configure Source**:
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`

3. **Custom Domain** (if applicable):
   - Enter your domain: `yourdomain.com`
   - Enable "Enforce HTTPS" ✅

4. **Save Settings** and wait 5-10 minutes for deployment

## 🔍 Troubleshooting Common Issues

### Issue: "404 - There isn't a GitHub Pages site here"
**Solutions**:
- ✅ Verify GitHub Pages is enabled in repository settings
- ✅ Check branch is set to `main` with `/ (root)` folder
- ✅ Ensure files are in the root of main branch
- ✅ Wait 5-10 minutes after configuration changes

### Issue: "cp: cannot stat 'dist/*': No such file or directory"
**Solutions**:
- ✅ Preserve build files before git checkout (see workflow above)
- ✅ Use temporary directory to store build files
- ✅ Ensure `npm run build` completes successfully

### Issue: Assets not loading (404 for CSS/JS/images)
**Solutions**:
- ✅ Use relative paths (`./asset.png`) instead of absolute (`/asset.png`)
- ✅ Verify Vite base configuration matches deployment path
- ✅ Check that assets are copied to main branch root

### Issue: Custom domain not working
**Solutions**:
- ✅ Verify DNS CNAME record points to `username.github.io`
- ✅ Ensure CNAME file exists in repository root
- ✅ Enable "Enforce HTTPS" in GitHub Pages settings
- ✅ Wait up to 24 hours for DNS propagation

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at GitHub Pages URL (`username.github.io/repo`)
- [ ] Custom domain redirects properly (if configured)
- [ ] All images and assets display correctly
- [ ] No 404 errors in browser console
- [ ] HTTPS is working (green lock icon)
- [ ] All sections of your site render properly
- [ ] Mobile responsiveness works
- [ ] GitHub Actions workflow completes successfully

## 🎯 Key Success Factors

1. **Correct Base Path**: Match Vite config to deployment path
2. **Relative Asset Paths**: Use `./` for all static assets
3. **Proper Workflow**: Preserve build files during branch operations
4. **DNS Configuration**: Point domain to GitHub Pages correctly
5. **Repository Settings**: Enable Pages from correct branch/folder
6. **Wait Time**: Allow 5-10 minutes for changes to propagate

## 📁 Expected File Structure

After successful deployment, your main branch should contain:
```
/
├── index.html          # Entry point
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── logo.svg           # Static assets
├── favicon.svg
└── CNAME             # Custom domain (if used)
```

## 🚀 Final Notes

- **User/Org Repos**: `username.github.io` serves from main root automatically
- **Project Repos**: Any name, configure Pages settings manually
- **Custom Domains**: Require CNAME file and DNS configuration
- **HTTPS**: Always enable for security and SEO
- **Caching**: GitHub Pages has CDN caching, changes may take minutes

This guide was created based on the successful deployment of [Elixir México](https://elixirmexico.org) using React + TypeScript + Vite + GitHub Pages.
# Harun Portfolio

Clean Next.js + Tailwind + Framer Motion portfolio with GitHub Pages deployment.

## Local Development

```
cd next-site
npm install
npm run dev
```

## Build & Export

```
cd next-site
npm run build
npm run export
```

The static site is generated in `next-site/out/`.

## Deployment (GitHub Pages)

- Every push to `main` triggers the workflow `.github/workflows/deploy.yml`
- It builds the Next.js app and deploys the `next-site/out/` folder to the `gh-pages` branch
- Configure GitHub Pages: Settings → Pages → Branch: `gh-pages` (root)
- Production URL: `https://<username>.github.io/harun-portfolio/`

## Structure

```
next-site/
  app/                # pages (App Router)
  components/         # UI components
  public/             # static assets (resume, og images, icons)
  styles/             # Tailwind globals
  next.config.ts      # output: export + basePath
```

## Assets

- Resume: `next-site/public/Harun-Shaikh-Resume.pdf`
- Icons/OG images: place under `next-site/public/`

## Notes

- `main` branch stores only source files. Build artifacts must not be committed.
- The workflow publishes to `gh-pages` automatically.
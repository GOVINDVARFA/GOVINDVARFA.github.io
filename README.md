# Govind Varfa · Portfolio

A responsive React, TypeScript, and Vite portfolio featuring six projects, project filtering and detail dialogs, experience, education, skills, a PDF résumé, and email contact.

**Website:** https://govindvarfa.github.io/

**Repository:** https://github.com/GOVINDVARFA/GOVINDVARFA.github.io

## Run locally

```sh
npm install
npm run dev
```

Build for static hosting with `npm run build`. Upload the contents of `dist` to a static web host. Use `npm run preview` to preview the production build locally.

## Update content

- `src/data.ts`: identity, contact email, project descriptions, technologies, and features.
- `src/App.tsx`: biography, qualifications, résumé links, illustrations, and layout.
- `src/App.css` and `src/index.css`: component styles, responsive rules, fonts, and color tokens.
- `public/govind-varfa-resume.pdf`: downloadable résumé. Its editable source is `documents/resume.html`.
- `public/social-preview.png`: social sharing artwork. The build generates its URL from `VITE_SITE_URL`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`. GitHub Pages must use **GitHub Actions** as its source in repository settings.

The workflow automatically supplies the correct repository path for scripts, styles, favicon, and résumé downloads. It also supplies the deployed address for canonical and social-sharing metadata. Local development continues to use `/`.

The source review and browser verification artifacts are kept locally and excluded from Git.

## Contact behavior

The form validates input and opens a `mailto:` draft in the visitor's email application. The visitor must send that draft. Direct email and copy-email controls are also provided. No backend, API key, or external form service is required.

## Content notes

Project artwork is labeled as illustrative interface concepts. Features are based on source inspection; no production metrics or sole-authorship claims are made. Missing GitHub, LinkedIn, and live-project URLs are omitted. Fonts use Google Fonts with local system fallbacks.

# Nguyen Vu — Portfolio

The source for [pekotaker.github.io/my-portfolio](https://pekotaker.github.io/my-portfolio/), the professional portfolio of Nguyen Vu Trinh Le.

The site presents selected full-stack work, professional experience, technical capabilities and contact information. Its current featured projects include Neuro Companion, the Đồng Hành Scholarship screening system, a Rails API starter and an RSA toolkit.

## Stack

- React 19
- TypeScript
- Vite
- Vitest and Testing Library
- CSS without a component framework
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Vite will print the local development URL.

## Quality checks

```bash
npm test
npm run build
```

The production build is written to `dist/`.

## Deployment

Pushes to `main` are built and deployed automatically by the GitHub Pages workflow in `.github/workflows/deploy.yml`.

The Vite base path is `/my-portfolio/` because this is a GitHub project page rather than a user root page.

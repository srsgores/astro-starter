# Astro Starter Kit
Lightweight [Astro](https://astro.build) template for creating websites with **accessible**, *optimized* defaults:

![logo](public/favicon.svg)

* SEO and metadata optimization
* Site configuration via `config.ts`
* Blog preconfigured within the `/src/content/blog` directory
* Vanilla CSS (no Tailwind)
* Logical properties when possible for CSS
* **Zero javascript** out of the box, relying on `.Astro` files soley
* `<ViewTransitions/>` enabled out of the box
* Sitemaps and RSS preconfigured
* Site previews, which default to `/public/site-preview.jpg` (you'll have to create this file by taking a screenshot)
* `prettier` for automatically formatting
* Basic building blocks for site navigation, header, and footer

## Getting Started
Deploy to Netlify:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/srsgores/astro-starter?NODE_VERSION=18)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/srsgores/astro-starter/tree/latest/examples/sane)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/srsgores/astro-starter/tree/latest/examples/sane)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/srsgores/astro-starter?devcontainer_path=.devcontainer/sane/devcontainer.json)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
# Browser Extension Starter (TypeScript)

A production-ready starter template for browser extensions using:

- [WXT](https://wxt.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/) (formatting + linting)
- [GitHub Actions](https://github.com/features/actions) (PR checks + release artifact packaging)
- [pnpm](https://pnpm.io/)

This template was scaffolded from a real-world extension codebase and keeps a practical structure for popup, background, and content scripts.

## What Is Included

- WXT configuration and build scripts for Chrome + Firefox
- React popup app scaffold with example hooks, views, and components
- Background and content script entrypoints
- Shared protocol/bridge helpers under `entrypoints/lib`
- Workspace-level VS Code settings under `.vscode/`
- Type declaration stubs under `@types/`
- Biome config (`biome.json`)
- Tailwind config (`tailwind.config.cjs`) and PostCSS config (`postcss.config.cjs`)
- CI workflows under `.github/workflows/`

## Quick Start

1. Install dependencies:

```bash
pnpm install
```

2. Create a local env file:

```bash
cp .env.example .env
```

3. Start development mode:

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - run extension in development mode (Chrome)
- `pnpm dev:firefox` - run extension in development mode (Firefox)
- `pnpm build` - build production extension bundle (Chrome)
- `pnpm build:firefox` - build production extension bundle (Firefox)
- `pnpm zip` - create Chrome zip package
- `pnpm zip:firefox` - create Firefox zip package
- `pnpm lint` - run Biome checks
- `pnpm type:check` - run TypeScript type-check

## Project Structure

```text
.
├── .github/workflows/      # CI and release workflows
├── .vscode/                # editor defaults
├── @types/                 # local declaration files
├── entrypoints/
│   ├── background.ts       # service worker / background logic
│   ├── content.ts          # content script
│   └── popup/              # React popup app
├── public/                 # icons and static assets
├── biome.json              # lint/format config
├── tailwind.config.cjs     # Tailwind config
├── postcss.config.cjs      # PostCSS config
└── wxt.config.ts           # WXT config
```

## GitHub Workflows

- `pull-request.yml`: installs deps, lints, and type-checks on PRs
- `release.yml`: builds Chrome/Firefox bundles and publishes them on Chrome Web Store and Mozilla Add-ons. It uses following secrets for store publishing: `CHROME_EXTENSION_ID`, `CHROME_CLIENT_ID`, `CHROME_CLIENT_SECRET`, `CHROME_REFRESH_TOKEN`, `FIREFOX_AUTH_API_ISSUER`, `FIREFOX_AUTH_API_SECRET`. You need to configure them on the repo/org level on Github.

## Template Notes

- Replace the placeholder popup with your own UI and business logic.
- Update package metadata in `package.json` before first release.
- Tune permissions and manifest fields in `wxt.config.ts` for your extension.

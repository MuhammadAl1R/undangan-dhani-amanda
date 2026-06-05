# AGENTS.md — undangan-pernikahan

Stack: React 19, Vite 8, Tailwind v4, Framer Motion v12. Plain JSX, no TypeScript. Single-page wedding invitation (Indonesian/Islamic).

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint check (no auto-fix flag) |

Order: `npm run lint && npm run build` before committing.

## Tailwind v4 quirks
- Uses `@tailwindcss/vite` plugin — **no** PostCSS config file, **no** `tailwind.config.*`
- Import with `@import "tailwindcss"` in CSS (not `@tailwind base/…` directives)
- `@import "tailwindcss"` is replaced by the Vite plugin with actual CSS rules at build time → any `@import` after it in the same file becomes invalid CSS
- **Always put Google Fonts `@import` before `@import "tailwindcss"`**

## Architecture
- **Entry**: `src/main.jsx` → renders `<App />` from `src/App.jsx`
- **No router** — single page, envelope → wedding card transition via state
- **Styling**: inline styles + Framer Motion `style` props (no Tailwind utility classes used in components)
- **Fonts**: Playfair Display + Mea Culpa (Google Fonts, loaded in `index.css`)
- **Static assets** in `public/` → only favicon.svg & icons.svg (served as `/filename`)
- **App images** in `src/assets/` (bunga-1.webp, bunga-2.webp, bunga-3.webp, couple.webp, stamp.webp, ayat.webp) → imported in JSX with ES import

## Mobile layout notes
- Envelope dimensions: `width: min(90vw, 400px)`, aspect ratio ~0.72
- Decorative flower images use `clamp()` for width and negative % offsets
- Card flowers use `position: absolute` (not `fixed`) and `clamp(100px, 45vw, 240px)`
- Card content container has `max-width: min(420px, 90vw)` + `margin: 0 auto`

## Testing
- No test framework configured. Verify with `npm run dev` (manual browser check) + `npm run lint && npm run build`.

## Misc
- Package manager: **npm** (lockfile: `package-lock.json`)
- No GitHub CI/CD workflows
- ESLint: flat config (`eslint.config.js`), react-hooks + react-refresh plugins

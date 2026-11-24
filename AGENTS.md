# AGENTS.md

## Environment setup

- Node/npm are NOT on the default `PATH`. Source nvm before any npm/npx command:

  ```sh
  export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
  ```

## Stack

- Next.js App Router (`app/`), TypeScript, React.

## Commands

```sh
npm run dev     # dev server
npm run build   # production build (also runs the TS typecheck)
npm run start   # serve the production build
```

## Gotchas

- `next build`/`next dev` auto-edit `tsconfig.json` (e.g. set `jsx` to `react-jsx`, add `.next/dev/types/**/*.ts` to `include`) and generate `next-env.d.ts`. Do not hand-edit these; changes are expected after a build.
- `next-env.d.ts` and `.next/` are generated artifacts — never edit, never commit.

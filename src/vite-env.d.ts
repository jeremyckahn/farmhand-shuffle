/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

// NOTE: See https://vite.dev/guide/env-and-mode#intellisense-for-typescript
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

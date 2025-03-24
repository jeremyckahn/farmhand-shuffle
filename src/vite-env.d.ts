/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

// NOTE: See https://vite.dev/guide/env-and-mode#intellisense-for-typescript

interface ImportMetaEnv {
  STORYBOOK?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

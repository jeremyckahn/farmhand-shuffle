import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const entry = fileURLToPath(new URL('./src/public/index.ts', import.meta.url))
const testingEntry = fileURLToPath(
  new URL('./src/public/testing.ts', import.meta.url)
)

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outDir: 'dist-lib',
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.ts',
        '**/*.stories.tsx',
        'src/setupTests.ts',
        'src/__mocks__/**',
      ],
    }),
  ],
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    // Inline all image assets as base64 data URIs so consumers don't need
    // to configure static asset copying for this package.
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    lib: {
      entry: { index: entry, testing: testingEntry },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.mjs`,
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        /^react-dom\/.*/,
        '@mui/material',
        /^@mui\/material\/.*/,
        '@emotion/react',
        '@emotion/styled',
        // @xstate/react depends on this for its useSyncExternalStore
        // shim. Left un-externalized, Rollup inlines a UMD-shaped copy
        // whose runtime `require('react')` feature-detection branch
        // survives bundling and throws when a consumer's dev server
        // (e.g. Vite/Rolldown) prebundles this package a second time
        // without a real `require` available. Every real-world React
        // app already has this extremely common transitive dependency
        // in its own tree, so externalizing it (like react/react-dom)
        // is safe.
        'use-sync-external-store',
        /^use-sync-external-store\/.*/,
        // Same runtime require('react') feature-detection pattern as
        // use-sync-external-store above.
        'react-node-to-string',
      ],
    },
  },
})

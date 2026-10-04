import { readFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig, Plugin } from 'vite'
import dts from 'vite-plugin-dts'

const entry = fileURLToPath(new URL('./src/public/index.ts', import.meta.url))
const testingEntry = fileURLToPath(
  new URL('./src/public/testing.ts', import.meta.url)
)

// Library mode inlines every imported asset regardless of
// assetsInlineLimit, which would put the font files in the JavaScript bundle
// as base64. This emits each font as its own file in dist-lib/assets instead
// and exports a URL relative to the bundle, which browsers and consumers'
// bundlers resolve like any other `new URL(..., import.meta.url)` asset.
const emitFonts = (): Plugin => ({
  name: 'farmhand-shuffle:emit-fonts',
  enforce: 'pre',
  async load(id) {
    if (!id.endsWith('.woff2')) return null

    const referenceId = this.emitFile({
      type: 'asset',
      fileName: `assets/${basename(id)}`,
      source: await readFile(id),
    })

    return `export default import.meta.ROLLUP_FILE_URL_${referenceId}`
  },
})

export default defineConfig({
  plugins: [
    react(),
    emitFonts(),
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
    // to configure static asset copying for this package. Fonts are the
    // exception (see emitFonts above).
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

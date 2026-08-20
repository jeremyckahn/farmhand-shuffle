import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const entry = fileURLToPath(new URL('./src/public/index.ts', import.meta.url))

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
      entry,
      formats: ['es'],
      fileName: () => 'index.mjs',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        /^react-dom\/.*/,
        '@mui/material',
        /^@mui\/material\/.*/,
        '@mui/icons-material',
        /^@mui\/icons-material\/.*/,
        '@emotion/react',
        '@emotion/styled',
      ],
    },
  },
})

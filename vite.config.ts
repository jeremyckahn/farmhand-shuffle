/* c8 ignore start */
import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as vitestDefineConfig } from 'vitest/config'

const viteConfig = defineConfig({})

const vitestConfig = vitestDefineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    restoreMocks: true,
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules',
        'src/setupTests.ts',
        'storybook-static',
        'dist',
        'src/ui/components/*/*.stories.ts',
        'src/ui/components/*/*.stories.tsx',
        'src/__mocks__',
        '.storybook',
      ],
    },
  },
})

export default mergeConfig(viteConfig, vitestConfig)

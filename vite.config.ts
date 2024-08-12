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
      exclude: ['node_modules/', 'src/setupTests.ts'],
    },
  },
})

export default mergeConfig(viteConfig, vitestConfig)

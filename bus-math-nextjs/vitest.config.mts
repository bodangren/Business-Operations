import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['scripts/**/__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['scripts/audit/**/*.ts'],
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHash } from 'crypto'

// Polyfill for crypto.hash (required for Vite 7 with some Node.js versions)
if (!globalThis.crypto?.hash) {
  globalThis.crypto = {
    ...globalThis.crypto,
    hash: (algorithm) => createHash(algorithm),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // GitHub Pages base path for username.github.io
})

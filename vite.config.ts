/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/insta/' : '/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js',
  },
  build: {
    sourcemap: mode === 'production',
  },
  server: {
    open: true,
    port: 3000
  },
}));

import { defineConfig } from 'vite';

export default defineConfig({
  // base: '/rmc/',
  base: '/rmc/dist/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

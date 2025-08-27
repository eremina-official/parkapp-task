import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgrPlugin from 'vite-plugin-svgr';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgrPlugin(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  // base: `${basePath}/`,
});

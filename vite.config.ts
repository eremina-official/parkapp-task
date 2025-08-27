import { defineConfig } from 'vite';
import { defineConfig as testConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgrPlugin from 'vite-plugin-svgr';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

const isTest = process.env.VITEST === 'true';

const config = defineConfig({
  plugins: isTest
    ? [react()]
    : [
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
  base: `/parkapp-task/`,
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    include: ['**/*.test.{ts,tsx}'],
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};

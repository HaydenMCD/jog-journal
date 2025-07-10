/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        routesDirectory: './src/app',
        generatedRouteTree: './src/route-tree.gen.ts',
        quoteStyle: 'single',
      }),
      react(),
      tailwindcss(),
    ],
  };
});

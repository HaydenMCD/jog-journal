/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [reactRouter(), tailwindcss()],
  };
});

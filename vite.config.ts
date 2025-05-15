// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import laravel from 'laravel-vite-plugin';
// import tailwindcss from '@tailwindcss/vite';
// import { resolve } from 'node:path';

// export default defineConfig({
//   plugins: [
//     laravel({
//       input: ['resources/css/app.css', 'resources/js/app.tsx','resources/js/pages/main.tsx'],
//       ssr: 'resources/js/ssr.tsx', // Only if using SSR; remove if not
//       refresh: true,
//     }),
//     react(),
//     tailwindcss(),
//   ],
//   esbuild: {
//     jsx: 'automatic',
//   },
//   resolve: {
//     alias: {
//       'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
//     },
//   },
//   base: '/Portfolio/', // Ensure this is set for GitHub Pages
// });


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/js'),
      'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
    },
  },
  base: '/Portfolio/', // for GitHub Pages
});

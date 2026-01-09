import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(() => ({
  server: {
    port: 3000,
    proxy: {
      '/api/socket': 'ws://traccar.ezyy.cloud:8082',
      '/api': 'http://traccar.ezyy.cloud:8082',
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false, // Disable sourcemaps in production for smaller builds
    minify: 'esbuild', // Use esbuild (faster than terser, built-in)
    // Note: esbuild doesn't support drop_console, but it's faster
    // For production, you can use terser if you need drop_console
    // For now, esbuild provides better build performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            // MapLibre GL - large mapping library
            if (id.includes('maplibre-gl') || id.includes('@mapbox')) {
              return 'vendor-maplibre';
            }
            // Recharts - charting library
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            // ExcelJS - large spreadsheet library
            if (id.includes('exceljs')) {
              return 'vendor-excel';
            }
            // MUI - split into core and icons
            if (id.includes('@mui/icons-material')) {
              return 'vendor-mui-icons';
            }
            if (id.includes('@mui')) {
              return 'vendor-mui';
            }
            // React and React DOM
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            // Redux
            if (id.includes('@reduxjs') || id.includes('react-redux')) {
              return 'vendor-redux';
            }
            // Emotion (MUI styling)
            if (id.includes('@emotion')) {
              return 'vendor-emotion';
            }
            // All other node_modules
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit since we're splitting properly
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    svgr(),
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png'],
      workbox: {
        navigateFallbackDenylist: [/^\/api/],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,woff,woff2,mp3}'],
        // Optimize caching strategy
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        short_name: '${title}',
        name: '${description}',
        theme_color: '${colorPrimary}',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    viteStaticCopy({
      targets: [
        { src: 'node_modules/@mapbox/mapbox-gl-rtl-text/dist/mapbox-gl-rtl-text.js', dest: '' },
      ],
    }),
  ],
}));

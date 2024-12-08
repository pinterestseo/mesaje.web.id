import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://mesaje.web.id',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@astrojs/prism'],
    },
  },
});
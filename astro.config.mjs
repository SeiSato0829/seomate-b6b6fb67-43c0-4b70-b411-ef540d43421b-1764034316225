import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seomate-test-6-1764034313615.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('SEOメイト テストブログ 6'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seomate-test-6-1764034313615.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});

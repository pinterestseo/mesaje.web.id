import { questions } from '../data/questions';

export async function GET() {
  try {
    // Generate URL untuk halaman utama (static pages)
    const mainPages = [
      '',
      '/recent',
      '/popular',
      '/category'
    ].map((path) => ({
      loc: `https://mesaje.web.id${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: path === '' ? '1.0' : '0.8'
    }));

    // Dapatkan unique categories dari questions
    const categories = [...new Set(questions.map(q => q.category))];

    // Generate URL untuk kategori
    const categoryPages = categories.map((category) => ({
      loc: `https://mesaje.web.id/category/${category.toLowerCase()}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.7'
    }));

    // Generate URL untuk semua questions/posts
    const questionPages = questions.map((question) => ({
      loc: `https://mesaje.web.id/question/${question.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.7'
    }));

    // Gabungkan semua URL
    const pages = [...mainPages, ...categoryPages, ...questionPages];

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => `
        <url>
          <loc>${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}
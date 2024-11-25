import rss from '@astrojs/rss';

export async function GET(context) {
  const postImportResult = import.meta.glob('./question/*.astro', { eager: true });
  const posts = Object.values(postImportResult);

  return rss({
    title: 'People Also Ask',
    description: 'Find answers to your most pressing questions',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.publishDate,
      description: post.frontmatter.description,
      link: `/question/${post.frontmatter.slug}/`,
    })),
  });
}
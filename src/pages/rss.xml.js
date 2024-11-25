import rss from '@astrojs/rss';
import { questions } from '../data/questions';

export async function GET(context) {
  return rss({
    title: 'Whispered Messages',
    description: 'Gentle words that touch hearts & heal minds',
    site: context.site,
    items: questions.map((question) => ({
      title: question.title,
      description: question.description,
      // Buat tanggal dari ID atau gunakan tanggal tetap
      pubDate: new Date(question.id) || new Date(),
      link: `/question/${question.slug}/`,
    })),
  });
}
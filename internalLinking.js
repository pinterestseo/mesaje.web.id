// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1733305018735,
    title: "Urări Calde: Mesaje de la mulți ani 18 ani scurte",
    description: "Comprehensive guide about Urări Calde: Mesaje de la mulți ani 18 ani scurte",
    slug: "mesaje-de-la-multi-ani-18-ani-scurte",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733305000669,
    title: "Urare Caldă: Mesaje la Mulți Ani Prietena",
    description: "Comprehensive guide about Urare Caldă: Mesaje la Mulți Ani Prietena",
    slug: "mesaje-la-multi-ani-prietena",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304979643,
    title: "Îmbrățișări Calde: Mesaje Frumoase de La Mulți Ani",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje Frumoase de La Mulți Ani",
    slug: "mesaje-frumoase-de-la-multi-ani",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304958439,
    title: "Îmbrățișări Calde: Mesaje de la mulți ani pentru iubit",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje de la mulți ani pentru iubit",
    slug: "mesaje-de-la-multi-ani-pentru-iubit",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304936173,
    title: "Îmbrățișări Calde: Mesaje cu La Mulți Ani",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje cu La Mulți Ani",
    slug: "mesaje-cu-la-multi-ani",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304915766,
    title: "Binecuvântate Mesaje Creștine de la Mulți Ani pentru Fiica Mea",
    description: "Comprehensive guide about Binecuvântate Mesaje Creștine de la Mulți Ani pentru Fiica Mea",
    slug: "mesaje-crestine-de-la-multi-ani-pentru-fiica-mea",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304895693,
    title: "Urare Caldă: Mesaje de la Mulți Ani pentru Copii",
    description: "Comprehensive guide about Urare Caldă: Mesaje de la Mulți Ani pentru Copii",
    slug: "mesaje-de-la-multi-ani-pentru-copii",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304875030,
    title: "Îmbrățișare Caldă: Mesaje de la mulți ani pentru soț",
    description: "Comprehensive guide about Îmbrățișare Caldă: Mesaje de la mulți ani pentru soț",
    slug: "mesaje-de-la-multi-ani-pentru-sot",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304855741,
    title: "Urare Caldă: Mesaje de la Mulți Ani pentru Băiat",
    description: "Comprehensive guide about Urare Caldă: Mesaje de la Mulți Ani pentru Băiat",
    slug: "mesaje-de-la-multi-ani-pentru-baiat",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733304835637,
    title: "Îmbrățișare caldă: Mesaje de la mulți ani pentru fiica mea tpu",
    description: "Comprehensive guide about Îmbrățișare caldă: Mesaje de la mulți ani pentru fiica mea tpu",
    slug: "mesaje-de-la-multi-ani-pentru-fiica-mea-tpu",
    category: "Mesaje-La-Multi-Ani"
  }
  // ... data dari questions.ts
];

async function addInternalLinks() {
  try {
    // Dapatkan semua kategori yang unik dari data
    const categories = [...new Set(questions.map(q => q.category))];
    
    // Kelompokkan artikel berdasarkan kategori secara dinamis
    const categorizedArticles = categories.reduce((acc, category) => {
      acc[category] = questions.filter(q => q.category === category);
      return acc;
    }, {});

    // Baca semua file .astro di direktori
    const files = await fs.readdir(PAGES_DIR);
    const astroFiles = files.filter(f => f.endsWith('.astro'));

    for (const file of astroFiles) {
      const filePath = path.join(PAGES_DIR, file);
      const currentSlug = file.replace('.astro', '');
      
      const currentArticle = questions.find(q => q.slug === currentSlug);
      if (!currentArticle) continue;

      let content = await fs.readFile(filePath, 'utf-8');
      
      const relatedArticles = getRelatedArticles(
        currentArticle,
        categorizedArticles[currentArticle.category]
      );
      
      const linkingParagraph = createLinkingParagraph(currentArticle.category, relatedArticles);
      content = insertAfterFirstParagraph(content, linkingParagraph);
      
      await fs.writeFile(filePath, content);
      console.log(`Updated: ${file} with ${relatedArticles.length} links from ${currentArticle.category} category`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function getRelatedArticles(currentArticle, categoryArticles) {
  return categoryArticles
    .filter(article => article.slug !== currentArticle.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function createLinkingParagraph(category, relatedArticles) {
  const linkTexts = relatedArticles.map(article => 
    `<a href="/question/${article.slug}">${article.title}</a>`
  );

  // Template paragraf berdasarkan kategori
  const templates = {
    Sympathy: `
<p>
  For more ways to express your sympathy, you might find these guides helpful: 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]}.
</p>`,
    
    Thanksgiving: `
<p>
  Looking for more Thanksgiving message ideas? Check out our guides for 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]} 
  for more inspiration.
</p>`,

    // Template default untuk kategori baru
    default: `
<p>
  You might also be interested in these related articles: 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]}.
</p>`
  };

  // Gunakan template sesuai kategori atau template default jika tidak ada
  return templates[category] || templates.default;
}

function insertAfterFirstParagraph(content, newContent) {
  const firstParagraphEnd = content.indexOf('</p>') + 4;
  return content.slice(0, firstParagraphEnd) + '\n' + newContent + content.slice(firstParagraphEnd);
}

// Jalankan script
addInternalLinks();
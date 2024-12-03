// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1733223173892,
    title: "Poze cu mesaje de la mulți ani:  Îmbrățișări calde, sufletești",
    description: "Comprehensive guide about Poze cu mesaje de la mulți ani:  Îmbrățișări calde, sufletești",
    slug: "poze-cu-mesaje-de-la-multi-ani",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223146968,
    title: "Îmbrățișări Calde: Mesaje de la Mulți Ani pentru Mama",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje de la Mulți Ani pentru Mama",
    slug: "mesaje-de-la-multi-ani-pentru-mama",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223113040,
    title: "Urare Caldă: Mesaje de la mulți ani frumoase și scurte",
    description: "Comprehensive guide about Urare Caldă: Mesaje de la mulți ani frumoase și scurte",
    slug: "mesaje-de-la-multi-ani-frumoase-si-scurte",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223093474,
    title: "Îmbrățișări Calde: Mesaje la Mulți Ani pline de Dragoste",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje la Mulți Ani pline de Dragoste",
    slug: "mesaje-la-multi-ani",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223068739,
    title: "Îmbrățișări Calde: La Mulți Ani Mesaje pline de Dragoste",
    description: "Comprehensive guide about Îmbrățișări Calde: La Mulți Ani Mesaje pline de Dragoste",
    slug: "la-multi-ani-mesaje",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223044687,
    title: "Îmbrățișări Calde: Cele Mai Frumoase Mesaje de La Mulți Ani",
    description: "Comprehensive guide about Îmbrățișări Calde: Cele Mai Frumoase Mesaje de La Mulți Ani",
    slug: "cele-mai-frumoase-mesaje-de-la-multi-ani",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223024780,
    title: "Îmbrățișări Calde: Mesaje de La Mulți Ani",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje de La Mulți Ani",
    slug: "mesaje-de-la-multi-ani",
    category: "Mesaje-La-Multi-Ani"
  },
  {
    id: 1733223001059,
    title: "Îmbrățișări Calde: Mesaje la Mulți Ani pline de Dragoste",
    description: "Comprehensive guide about Îmbrățișări Calde: Mesaje la Mulți Ani pline de Dragoste",
    slug: "mesaje-la-multi-ani",
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
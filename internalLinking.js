// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

// Kategori artikel
const categories = {
  general: [
    'a-happy-thanksgiving-message',
    'best-happy-thanksgiving-message',
    'best-thanksgiving-message'
  ],
  business: [
    'business-happy-thanksgiving-message',
    'company-happy-thanksgiving-message',
    'corporate-happy-thanksgiving-message',
    'formal-thanksgiving-message'
  ],
  personal: [
    'friends-happy-thanksgiving-message',
    'funny-happy-thanksgiving-message',
    'cute-thanksgiving-message',
    'happy-thanksgiving-everyone-message'
  ],
  religious: [
    'christian-happy-thanksgiving-message',
    'happy-thanksgiving-blessing-message',
    'happy-thanksgiving-blessings-message'
  ]
};

async function addInternalLinks() {
  try {
    // Baca semua file .astro di direktori
    const files = await fs.readdir(PAGES_DIR);
    const astroFiles = files.filter(f => f.endsWith('.astro'));

    for (const file of astroFiles) {
      const filePath = path.join(PAGES_DIR, file);
      let content = await fs.readFile(filePath, 'utf-8');
      
      // Dapatkan kategori artikel
      const currentSlug = file.replace('.astro', '');
      const category = getCategory(currentSlug);
      
      // Pilih 3 artikel terkait
      const relatedLinks = getRelatedLinks(currentSlug, category);
      
      // Buat paragraf internal linking
      const linkingParagraph = createLinkingParagraph(relatedLinks);
      
      // Sisipkan paragraf setelah paragraf pertama
      content = insertAfterFirstParagraph(content, linkingParagraph);
      
      // Tulis kembali file
      await fs.writeFile(filePath, content);
      console.log(`Updated: ${file}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function getCategory(slug) {
  for (const [category, slugs] of Object.entries(categories)) {
    if (slugs.includes(slug)) return category;
  }
  return 'general';
}

function getRelatedLinks(currentSlug, category) {
  // Ambil artikel dari kategori yang sama
  let possibleLinks = categories[category].filter(slug => slug !== currentSlug);
  
  // Jika kurang dari 3, tambahkan dari kategori lain
  if (possibleLinks.length < 3) {
    const otherArticles = Object.values(categories)
      .flat()
      .filter(slug => slug !== currentSlug && !possibleLinks.includes(slug));
    possibleLinks = [...possibleLinks, ...otherArticles];
  }
  
  // Acak dan ambil 3 artikel
  return possibleLinks
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function createLinkingParagraph(relatedLinks) {
  const linkTexts = relatedLinks.map(slug => {
    const title = formatTitle(slug);
    return `<a href="/question/${slug}">${title}</a>`;
  });

  return `
<p>
  Looking for more Thanksgiving message ideas? Check out our guides for 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]} 
  for more inspiration.
</p>
`;
}

function formatTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function insertAfterFirstParagraph(content, newContent) {
  const firstParagraphEnd = content.indexOf('</p>') + 4;
  return content.slice(0, firstParagraphEnd) + '\n' + newContent + content.slice(firstParagraphEnd);
}

// Jalankan script
addInternalLinks();
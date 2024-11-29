// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732848812139,
    title: "Blessing Their Union: Wedding Card Religious Messages of Joy",
    description: "Comprehensive guide about Blessing Their Union: Wedding Card Religious Messages of Joy",
    slug: "wedding-card-religious-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848792083,
    title: "Celebrating Coworker Wedding Card Message with Joyful Wishes",
    description: "Comprehensive guide about Celebrating Coworker Wedding Card Message with Joyful Wishes",
    slug: "coworker-wedding-card-message",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848774220,
    title: "Celebrating Love Through Wedding Card Messages Reddit",
    description: "Comprehensive guide about Celebrating Love Through Wedding Card Messages Reddit",
    slug: "wedding-card-messages-reddit",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848752926,
    title: "Celebrating Love Through Hilarious Wedding Card Message Funny",
    description: "Comprehensive guide about Celebrating Love Through Hilarious Wedding Card Message Funny",
    slug: "wedding-card-message-funny",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848731714,
    title: "Celebrating a Love-Filled Wedding Card Message Christian",
    description: "Comprehensive guide about Celebrating a Love-Filled Wedding Card Message Christian",
    slug: "wedding-card-message-christian",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848712656,
    title: "Blessing Their Union: Religious Messages for Wedding Cards",
    description: "Comprehensive guide about Blessing Their Union: Religious Messages for Wedding Cards",
    slug: "religious-messages-for-wedding-cards",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848691793,
    title: "Funny Wedding Messages for Cards:  Celebrating a Joyful Union",
    description: "Comprehensive guide about Funny Wedding Messages for Cards:  Celebrating a Joyful Union",
    slug: "funny-wedding-messages-for-cards",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848671712,
    title: "Funny Messages for a Wedding Card:  Celebrating a Joyful Union",
    description: "Comprehensive guide about Funny Messages for a Wedding Card:  Celebrating a Joyful Union",
    slug: "funny-messages-for-a-wedding-card",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848653734,
    title: "Celebrating Love Through Funny Messages What To Write In A Wedding Card",
    description: "Comprehensive guide about Celebrating Love Through Funny Messages What To Write In A Wedding Card",
    slug: "messages-what-to-write-in-a-wedding-card-funny",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848632485,
    title: "Celebrating Love Through Funny Wedding Card Messages Reddit",
    description: "Comprehensive guide about Celebrating Love Through Funny Wedding Card Messages Reddit",
    slug: "funny-wedding-card-messages-reddit",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848612669,
    title: "Blessing Your Love: Wedding Card Messages for Daughter & Son-in-Law",
    description: "Comprehensive guide about Blessing Your Love: Wedding Card Messages for Daughter & Son-in-Law",
    slug: "wedding-card-messages-for-daughter-and-son-in-law",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848591847,
    title: "Celebrating a coworker's wedding through heartfelt messages of joy",
    description: "Comprehensive guide about Celebrating a coworker's wedding through heartfelt messages of joy",
    slug: "wedding-card-message-for-coworker",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848568854,
    title: "Celebrating Love Through Witty Wedding Card Messages",
    description: "Comprehensive guide about Celebrating Love Through Witty Wedding Card Messages",
    slug: "witty-wedding-card-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848546651,
    title: "Celebrating Love Through Wedding Card Invitation Messages",
    description: "Comprehensive guide about Celebrating Love Through Wedding Card Invitation Messages",
    slug: "wedding-card-invitation-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848524331,
    title: "Embracing Indian Wedding Invitation Card Messages, Celebrating a Love Story",
    description: "Comprehensive guide about Embracing Indian Wedding Invitation Card Messages, Celebrating a Love Story",
    slug: "indian-wedding-invitation-card-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848503526,
    title: "Celebrating Love Through Humorous Wedding Card Messages",
    description: "Comprehensive guide about Celebrating Love Through Humorous Wedding Card Messages",
    slug: "humorous-wedding-card-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848479907,
    title: "Celebrating Love Through the Funniest Wedding Card Messages",
    description: "Comprehensive guide about Celebrating Love Through the Funniest Wedding Card Messages",
    slug: "funniest-wedding-card-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848460967,
    title: "Celebrating Love Through a Hilarious Message for Wedding Card Funny",
    description: "Comprehensive guide about Celebrating Love Through a Hilarious Message for Wedding Card Funny",
    slug: "message-for-wedding-card-funny",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848438679,
    title: "Celebrating Love Through Hilarious Wedding Card Messages",
    description: "Comprehensive guide about Celebrating Love Through Hilarious Wedding Card Messages",
    slug: "hilarious-wedding-card-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848416608,
    title: "Celebrating Love Through Funny Wedding Card Messages",
    description: "Comprehensive guide about Celebrating Love Through Funny Wedding Card Messages",
    slug: "funny-wedding-card-messages",
    category: "Wedding-Card-Messages"
  },
  {
    id: 1732848396423,
    title: "Warmly Welcoming Son-in-Law to Family Wedding, Celebrating Love's New Chapter",
    description: "Comprehensive guide about Warmly Welcoming Son-in-Law to Family Wedding, Celebrating Love's New Chapter",
    slug: "welcoming-son-in-law-to-family-wedding-card-message",
    category: "Wedding-Card-Messages"
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
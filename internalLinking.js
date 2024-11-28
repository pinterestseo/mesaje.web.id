// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732808304740,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-to-watch-the-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808285382,
    title: "Experience the Macy's Thanksgiving Day Parade: Your Viewing Guide",
    description: "Comprehensive guide about Experience the Macy's Thanksgiving Day Parade: Your Viewing Guide",
    slug: "how-to-go-to-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808265510,
    title: "Mastering the Macy's Thanksgiving Day Parade: Your Viewing Guide",
    description: "Comprehensive guide about Mastering the Macy's Thanksgiving Day Parade: Your Viewing Guide",
    slug: "how-to-go-to-the-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808246360,
    title: "Your Guide to the Macy's Thanksgiving Day Parade",
    description: "Comprehensive guide about Your Guide to the Macy's Thanksgiving Day Parade",
    slug: "how-to-get-to-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808224989,
    title: "Mastering Macy's Thanksgiving Day Parade Balloon Handling",
    description: "Comprehensive guide about Mastering Macy's Thanksgiving Day Parade Balloon Handling",
    slug: "how-to-be-a-balloon-handler-in-the-macy-s-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808205536,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "how-do-i-watch-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808184830,
    title: "Discover Macy's Thanksgiving Day Parade Performers",
    description: "Comprehensive guide about Discover Macy's Thanksgiving Day Parade Performers",
    slug: "who-is-performing-in-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808163219,
    title: "Find Macy's Thanksgiving Day Parade Broadcast Details",
    description: "Comprehensive guide about Find Macy's Thanksgiving Day Parade Broadcast Details",
    slug: "who-is-hosting-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808143497,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-can-you-watch-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808124731,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "what-time-is-the-macy-s-day-parade-on",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808106258,
    title: "Find the Macy's Thanksgiving Day Parade Route",
    description: "Comprehensive guide about Find the Macy's Thanksgiving Day Parade Route",
    slug: "what-street-does-the-macy-s-parade-go-down",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808087856,
    title: "Find Macy's Thanksgiving Day Parade Route",
    description: "Comprehensive guide about Find Macy's Thanksgiving Day Parade Route",
    slug: "what-street-does-the-macy-s-day-parade-go-down",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808069017,
    title: "Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    description: "Comprehensive guide about Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    slug: "how-to-watch-the-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808049556,
    title: "Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    description: "Comprehensive guide about Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    slug: "how-to-watch-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808031845,
    title: "Unlocking Macy's Thanksgiving Day Parade Costs",
    description: "Comprehensive guide about Unlocking Macy's Thanksgiving Day Parade Costs",
    slug: "how-much-does-it-cost-to-be-in-macy-s-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732808013683,
    title: "Unmasking the Macy's Thanksgiving Day Parade: Lip Sync Secrets",
    description: "Comprehensive guide about Unmasking the Macy's Thanksgiving Day Parade: Lip Sync Secrets",
    slug: "do-they-lip-sync-macy-s-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807997480,
    title: "Unmasking Macy's Thanksgiving Day Parade: Lip Sync Secrets",
    description: "Comprehensive guide about Unmasking Macy's Thanksgiving Day Parade: Lip Sync Secrets",
    slug: "do-they-lip-sync-at-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807979361,
    title: "Stream the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Stream the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "can-you-stream-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807959651,
    title: "Find Macy's Thanksgiving Day Parade Broadcast Details",
    description: "Comprehensive guide about Find Macy's Thanksgiving Day Parade Broadcast Details",
    slug: "who-is-hosting-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807941182,
    title: "Watch Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-can-you-watch-the-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807916581,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-to-watch-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807900096,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-can-i-watch-the-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807882952,
    title: "Navigate the Macy's Thanksgiving Day Parade Route",
    description: "Comprehensive guide about Navigate the Macy's Thanksgiving Day Parade Route",
    slug: "what-is-the-macy-s-parade-route",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807866313,
    title: "Find Macy's Thanksgiving Day Parade: Channel Guide",
    description: "Comprehensive guide about Find Macy's Thanksgiving Day Parade: Channel Guide",
    slug: "what-channel-is-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807848033,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-to-watch-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807824837,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "what-time-macy-s-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807806211,
    title: "Rockettes' Macy's Thanksgiving Day Parade Appearance Time",
    description: "Comprehensive guide about Rockettes' Macy's Thanksgiving Day Parade Appearance Time",
    slug: "what-time-do-the-rockettes-perform-in-the-macy-s-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807787822,
    title: "Navigate the Macy's Thanksgiving Day Parade Route",
    description: "Comprehensive guide about Navigate the Macy's Thanksgiving Day Parade Route",
    slug: "how-long-is-the-macy-s-thanksgiving-day-parade-route",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807769803,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-to-watch-macy-s-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807754948,
    title: "Stream the Macy's Thanksgiving Day Parade: Your Complete Guide",
    description: "Comprehensive guide about Stream the Macy's Thanksgiving Day Parade: Your Complete Guide",
    slug: "how-to-stream-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807735096,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-to-watch-the-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807711590,
    title: "Find the 2024 Macy's Thanksgiving Day Parade Schedule",
    description: "Comprehensive guide about Find the 2024 Macy's Thanksgiving Day Parade Schedule",
    slug: "when-is-the-100th-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807692901,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Timing & Channels",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Timing & Channels",
    slug: "what-time-is-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807673859,
    title: "Watch the Macy's Thanksgiving Day Parade Live:  Full Schedule",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live:  Full Schedule",
    slug: "what-time-is-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807643187,
    title: "Find the Macy's Thanksgiving Day Parade: Channel Guide",
    description: "Comprehensive guide about Find the Macy's Thanksgiving Day Parade: Channel Guide",
    slug: "what-channel-is-thanksgiving-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807624541,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-can-i-watch-the-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807604428,
    title: "Watch Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-can-i-watch-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807580907,
    title: "Watch the Macy's Thanksgiving Day Parade: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade: Your Complete Guide",
    slug: "how-can-i-watch-macy-s-thanksgiving-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807563548,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-can-i-watch-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807541708,
    title: "Find the Macy's Thanksgiving Day Parade Channel",
    description: "Comprehensive guide about Find the Macy's Thanksgiving Day Parade Channel",
    slug: "what-channel-is-macy-s-day-parade-on",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807524381,
    title: "Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    description: "Comprehensive guide about Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    slug: "how-to-watch-the-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807506856,
    title: "Find the Macy's Thanksgiving Day Parade: Channel Guide",
    description: "Comprehensive guide about Find the Macy's Thanksgiving Day Parade: Channel Guide",
    slug: "what-channel-is-the-macy-s-day-parade-on",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807484650,
    title: "Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch the Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "what-time-is-the-macy-s-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807465949,
    title: "Watch Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    description: "Comprehensive guide about Watch Macy's Thanksgiving Day Parade Live: Your Complete Guide",
    slug: "where-to-watch-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
  },
  {
    id: 1732807443045,
    title: "Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    description: "Comprehensive guide about Your Guide to Watching the Macy's Thanksgiving Day Parade Live",
    slug: "how-to-watch-macy-s-thanksgiving-day-parade",
    category: "Macy-s-Parade"
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
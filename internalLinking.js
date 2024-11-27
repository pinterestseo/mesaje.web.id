// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732699921114,
    title: "Male Friend Happy Fathers Day Messages Offering Warmest Support",
    description: "Comprehensive guide about Male Friend Happy Fathers Day Messages Offering Warmest Support",
    slug: "male-friend-happy-fathers-day-messages-to-a-friend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732699894009,
    title: "Happy Fathers Day Message to Boyfriend:  A Gentle Embrace of Support",
    description: "Comprehensive guide about Happy Fathers Day Message to Boyfriend:  A Gentle Embrace of Support",
    slug: "happy-fathers-day-message-to-boyfriend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732699867832,
    title: "Whispering Fathers Day Messages to Heaven: Finding Peace",
    description: "Comprehensive guide about Whispering Fathers Day Messages to Heaven: Finding Peace",
    slug: "fathers-day-messages-to-heaven",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732699816940,
    title: "Fathers Day Message to Stepdad:  A Heartfelt Embrace of Gratitude",
    description: "Comprehensive guide about Fathers Day Message to Stepdad:  A Heartfelt Embrace of Gratitude",
    slug: "fathers-day-message-to-stepdad",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732699792536,
    title: "A Mother's Fathers Day Message to Son, Offering Strength & Peace",
    description: "Comprehensive guide about A Mother's Fathers Day Message to Son, Offering Strength & Peace",
    slug: "fathers-day-message-to-son-from-mother",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732699767777,
    title: "Fathers Day Message to Friend:  A Gentle Embrace of Support",
    description: "Comprehensive guide about Fathers Day Message to Friend:  A Gentle Embrace of Support",
    slug: "fathers-day-message-to-friend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698319770,
    title: "Fathers Day Message to Father in Law:  Offering Comfort and Support",
    description: "Comprehensive guide about Fathers Day Message to Father in Law:  Offering Comfort and Support",
    slug: "fathers-day-message-to-father-in-law",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698295832,
    title: "A Father's Day Message to Dad from Daughter:  Whispering Comfort and Love",
    description: "Comprehensive guide about A Father's Day Message to Dad from Daughter:  Whispering Comfort and Love",
    slug: "fathers-day-message-to-dad-from-daughter",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698268851,
    title: "A Father's Day Message From Girlfriend:  Offering Gentle Support and Love",
    description: "Comprehensive guide about A Father's Day Message From Girlfriend:  Offering Gentle Support and Love",
    slug: "fathers-day-message-from-girlfriend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698242399,
    title: "Embracing Fathers Day Message for Grandpa, Offering Gentle Strength",
    description: "Comprehensive guide about Embracing Fathers Day Message for Grandpa, Offering Gentle Strength",
    slug: "fathers-day-message-for-grandpa",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698217245,
    title: "Brother Fathers Day Messages:  Whispering Support & Comfort",
    description: "Comprehensive guide about Brother Fathers Day Messages:  Whispering Support & Comfort",
    slug: "brother-fathers-day-messages",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698182772,
    title: "Step Dad Fathers Day Messages:  Offering Comfort and Love",
    description: "Comprehensive guide about Step Dad Fathers Day Messages:  Offering Comfort and Love",
    slug: "step-dad-fathers-day-messages",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698158530,
    title: "Son in Law Father's Day Messages:  Whispering Comfort and Support",
    description: "Comprehensive guide about Son in Law Father's Day Messages:  Whispering Comfort and Support",
    slug: "son-in-law-fathers-day-messages",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698134135,
    title: "Soothing Religious Fathers Day Messages From Wife, Offering Peace",
    description: "Comprehensive guide about Soothing Religious Fathers Day Messages From Wife, Offering Peace",
    slug: "religious-fathers-day-messages-from-wife",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698107974,
    title: "Happy Fathers Day Uncle Message:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Uncle Message:  A Gentle Embrace of Love and Support",
    slug: "happy-fathers-day-uncle-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698085449,
    title: "Happy Father's Day Religious Message:  A Blessing of Peace and Grace",
    description: "Comprehensive guide about Happy Father's Day Religious Message:  A Blessing of Peace and Grace",
    slug: "happy-fathers-day-religious-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698060702,
    title: "Happy Father's Day Message to My Husband Long Distance:  Sending Love & Support Across the Miles",
    description: "Comprehensive guide about Happy Father's Day Message to My Husband Long Distance:  Sending Love & Support Across the Miles",
    slug: "happy-fathers-day-message-to-my-husband-long-distance",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698039030,
    title: "Happy Fathers Day Message to a Friend:  Sending Warmth and Support",
    description: "Comprehensive guide about Happy Fathers Day Message to a Friend:  Sending Warmth and Support",
    slug: "happy-fathers-day-message-to-a-friend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732698018178,
    title: "Happy Fathers Day Message From Wife:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Message From Wife:  A Gentle Embrace of Love and Support",
    slug: "happy-fathers-day-message-from-wife",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697989433,
    title: "Happy Fathers Day Husband Message:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Husband Message:  A Gentle Embrace of Love and Support",
    slug: "happy-fathers-day-husband-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697960819,
    title: "First Father's Day Message From Wife: A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about First Father's Day Message From Wife: A Gentle Embrace of Love and Support",
    slug: "first-fathers-day-message-from-wife",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697936787,
    title: "Fathers Day Messages in Spanish:  Soothing Words of Comfort",
    description: "Comprehensive guide about Fathers Day Messages in Spanish:  Soothing Words of Comfort",
    slug: "fathers-day-messages-in-spanish",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697910780,
    title: "Embracing Fathers Day Message from Wife to Husband:  A Heartfelt Thank You",
    description: "Comprehensive guide about Embracing Fathers Day Message from Wife to Husband:  A Heartfelt Thank You",
    slug: "fathers-day-message-from-wife-to-husband",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697885878,
    title: "Embracing Fathers Day Message for Stepdad,  Offering Comfort and Love",
    description: "Comprehensive guide about Embracing Fathers Day Message for Stepdad,  Offering Comfort and Love",
    slug: "fathers-day-message-for-stepdad",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697836643,
    title: "Soothing Spiritual Fathers Day Messages Offering Comfort and Peace",
    description: "Comprehensive guide about Soothing Spiritual Fathers Day Messages Offering Comfort and Peace",
    slug: "spiritual-fathers-day-messages",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697811037,
    title: "Embracing Your First Father's Day Message with Gentle Strength",
    description: "Comprehensive guide about Embracing Your First Father's Day Message with Gentle Strength",
    slug: "first-fathers-day-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697788175,
    title: "Fathers Day Message to Brother:  Embracing You Through Fatherhood's Journey",
    description: "Comprehensive guide about Fathers Day Message to Brother:  Embracing You Through Fatherhood's Journey",
    slug: "fathers-day-message-to-brother",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697764569,
    title: "Sending Fathers Day Messages In Heaven, Whispering Love and Peace",
    description: "Comprehensive guide about Sending Fathers Day Messages In Heaven, Whispering Love and Peace",
    slug: "fathers-day-message-in-heaven",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697714620,
    title: "Trump Fathers Day Message:  A Gentle Embrace of Support",
    description: "Comprehensive guide about Trump Fathers Day Message:  A Gentle Embrace of Support",
    slug: "trump-fathers-day-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697689159,
    title: "Happy Fathers Day Messages to a Friend:  Soothing Words of Support",
    description: "Comprehensive guide about Happy Fathers Day Messages to a Friend:  Soothing Words of Support",
    slug: "happy-fathers-day-messages-to-a-friend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697665686,
    title: "Happy Fathers Day Messages From Wife:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Messages From Wife:  A Gentle Embrace of Love and Support",
    slug: "happy-fathers-day-messages-from-wife",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697642884,
    title: "Happy Fathers Day Messages Daughter:  Whispers of Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Messages Daughter:  Whispers of Love and Support",
    slug: "happy-fathers-day-messages-daughter",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697620792,
    title: "Supporting Step Dad Father's Day Message: A Gentle Embrace",
    description: "Comprehensive guide about Supporting Step Dad Father's Day Message: A Gentle Embrace",
    slug: "step-dad-fathers-day-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697596427,
    title: "Husband Fathers Day Message:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Husband Fathers Day Message:  A Gentle Embrace of Love and Support",
    slug: "husband-fathers-day-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697570651,
    title: "Happy Fathers Day Message to Husband:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Message to Husband:  A Gentle Embrace of Love and Support",
    slug: "happy-fathers-day-message-to-husband",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697542511,
    title: "A Father's Day Message to Boyfriend:  Embracing Strength & Love",
    description: "Comprehensive guide about A Father's Day Message to Boyfriend:  Embracing Strength & Love",
    slug: "fathers-day-message-to-boyfriend",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697512037,
    title: "Embracing Fathers Day Message to All Fathers Through Gentle Support",
    description: "Comprehensive guide about Embracing Fathers Day Message to All Fathers Through Gentle Support",
    slug: "fathers-day-message-to-all-father-s",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697488019,
    title: "Embracing Christian Fathers Day Message: A Father's Gentle Strength",
    description: "Comprehensive guide about Embracing Christian Fathers Day Message: A Father's Gentle Strength",
    slug: "christian-fathers-day-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697465233,
    title: "Trump's Father's Day Message:  A Gentle Embrace of Hope",
    description: "Comprehensive guide about Trump's Father's Day Message:  A Gentle Embrace of Hope",
    slug: "trumps-fathers-day-message",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697440954,
    title: "Embracing Fathers Day Message to My Husband, My Rock",
    description: "Comprehensive guide about Embracing Fathers Day Message to My Husband, My Rock",
    slug: "fathers-day-message-to-my-husband",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697416337,
    title: "Fathers Day Messages From Wife:  A Gentle Embrace of Love and Support",
    description: "Comprehensive guide about Fathers Day Messages From Wife:  A Gentle Embrace of Love and Support",
    slug: "fathers-day-messages-from-wife",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697392064,
    title: "A Father's Day Message From Wife:  Nurturing Your Heart Today",
    description: "Comprehensive guide about A Father's Day Message From Wife:  Nurturing Your Heart Today",
    slug: "fathers-day-message-from-wife",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697365986,
    title: "Funny Fathers Day Messages:  Whispering Laughter, Comforting Hearts",
    description: "Comprehensive guide about Funny Fathers Day Messages:  Whispering Laughter, Comforting Hearts",
    slug: "funny-fathers-day-messages",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697339839,
    title: "Fathers Day Messages From Wife To Husband:  A Gentle Embrace of Love and Appreciation",
    description: "Comprehensive guide about Fathers Day Messages From Wife To Husband:  A Gentle Embrace of Love and Appreciation",
    slug: "fathers-day-messages-from-wife-to-husband",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697318537,
    title: "Fathers Day Messages From Daughter: A Gentle Embrace of Love",
    description: "Comprehensive guide about Fathers Day Messages From Daughter: A Gentle Embrace of Love",
    slug: "fathers-day-messages-from-daughter",
    category: "Fathers-Day-Messages"
  },
  {
    id: 1732697280531,
    title: "Happy Fathers Day Message to Everyone: Embracing Love and Support",
    description: "Comprehensive guide about Happy Fathers Day Message to Everyone: Embracing Love and Support",
    slug: "happy-fathers-day-message-to-everyone",
    category: "Fathers-Day-Messages"
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
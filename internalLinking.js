// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732800381251,
    title: "Saturday Good Morning Messages: Shining Joyful Starts",
    description: "Comprehensive guide about Saturday Good Morning Messages: Shining Joyful Starts",
    slug: "saturday-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800361278,
    title: "Sun-Kissed Long Good Morning Message to My Love: A Day of Sparkling Joy",
    description: "Comprehensive guide about Sun-Kissed Long Good Morning Message to My Love: A Day of Sparkling Joy",
    slug: "long-good-morning-message-to-my-love",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800339725,
    title: "Humorous Good Morning Messages: Sparkling Joy into Your Day",
    description: "Comprehensive guide about Humorous Good Morning Messages: Sparkling Joy into Your Day",
    slug: "humorous-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800320016,
    title: "Radiant Good Morning Prayer Message for Her, Shining Hope",
    description: "Comprehensive guide about Radiant Good Morning Prayer Message for Her, Shining Hope",
    slug: "good-morning-prayer-message-for-her",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800300965,
    title: "Radiant Good Morning Prayer Message for a Friend, Shining Hope's New Day",
    description: "Comprehensive guide about Radiant Good Morning Prayer Message for a Friend, Shining Hope's New Day",
    slug: "good-morning-prayer-message-for-a-friend",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800283599,
    title: "Good Morning Messages Friday:  Shining Hope for a Joyful Day",
    description: "Comprehensive guide about Good Morning Messages Friday:  Shining Hope for a Joyful Day",
    slug: "good-morning-messages-friday",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800267334,
    title: "Good Morning Message Friday: Shining Hope's New Dawn",
    description: "Comprehensive guide about Good Morning Message Friday: Shining Hope's New Dawn",
    slug: "good-morning-message-friday",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800246520,
    title: "Shining Good Morning Message for Long Distance Relationship:  Igniting Our Love!",
    description: "Comprehensive guide about Shining Good Morning Message for Long Distance Relationship:  Igniting Our Love!",
    slug: "good-morning-message-for-long-distance-relationship",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800227582,
    title: "Shining Good Morning Message for Her Long Distance, Bursting With Love",
    description: "Comprehensive guide about Shining Good Morning Message for Her Long Distance, Bursting With Love",
    slug: "good-morning-message-for-her-long-distance",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800207169,
    title: "Radiant Good Morning Message for a Long Distance Relationship",
    description: "Comprehensive guide about Radiant Good Morning Message for a Long Distance Relationship",
    slug: "good-morning-message-for-a-long-distance-relationship",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800189179,
    title: "Witty Good Morning Messages: Sparkling Joy Into Your Day",
    description: "Comprehensive guide about Witty Good Morning Messages: Sparkling Joy Into Your Day",
    slug: "witty-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800168058,
    title: "Good Morning Picture Messages: Sunbeams of Joy!",
    description: "Comprehensive guide about Good Morning Picture Messages: Sunbeams of Joy!",
    slug: "good-morning-picture-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800147698,
    title: "Good Morning Funny Messages:  Sunshine & Giggles for a Bright Day!",
    description: "Comprehensive guide about Good Morning Funny Messages:  Sunshine & Giggles for a Bright Day!",
    slug: "good-morning-funny-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800125659,
    title: "Funny Good Morning Text Messages for Him:  Sparking Joyful Smiles!",
    description: "Comprehensive guide about Funny Good Morning Text Messages for Him:  Sparking Joyful Smiles!",
    slug: "funny-good-morning-text-messages-for-him",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800107561,
    title: "Funny Good Morning Text Messages for Her: Sparkling Joyful Starts",
    description: "Comprehensive guide about Funny Good Morning Text Messages for Her: Sparkling Joyful Starts",
    slug: "funny-good-morning-text-messages-for-her",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800086134,
    title: "Sweet Good Morning Message for My Love:  Sunbeams of Joy and Affection",
    description: "Comprehensive guide about Sweet Good Morning Message for My Love:  Sunbeams of Joy and Affection",
    slug: "sweet-good-morning-message-for-my-love",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800068836,
    title: "Good Morning Sunday Messages: Shining Hope for a Joyful Day",
    description: "Comprehensive guide about Good Morning Sunday Messages: Shining Hope for a Joyful Day",
    slug: "good-morning-sunday-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800050190,
    title: "Good Morning Spiritual Messages:  Shining Light on a Joyful Day",
    description: "Comprehensive guide about Good Morning Spiritual Messages:  Shining Light on a Joyful Day",
    slug: "good-morning-spiritual-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800031355,
    title: "Good Morning Messages Sunday:  Shining Hope's New Day",
    description: "Comprehensive guide about Good Morning Messages Sunday:  Shining Hope's New Day",
    slug: "good-morning-messages-sunday",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732800012027,
    title: "Radiant Good Morning Messages Spiritual:  Igniting Your Soul's Sunrise",
    description: "Comprehensive guide about Radiant Good Morning Messages Spiritual:  Igniting Your Soul's Sunrise",
    slug: "good-morning-messages-spiritual",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799989880,
    title: "Good morning messages in WhatsApp: Shining Rays of Joyful Starts",
    description: "Comprehensive guide about Good morning messages in WhatsApp: Shining Rays of Joyful Starts",
    slug: "good-morning-messages-in-whatsapp",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799971805,
    title: "Good morning message whatsapp: Sunbeams of Joy!",
    description: "Comprehensive guide about Good morning message whatsapp: Sunbeams of Joy!",
    slug: "good-morning-message-whatsapp",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799952287,
    title: "Good Morning Message Pics:  Shining Smiles & Sparkling Days",
    description: "Comprehensive guide about Good Morning Message Pics:  Shining Smiles & Sparkling Days",
    slug: "good-morning-message-pics",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799933760,
    title: "Good morning message photo:  Shining Smiles, Sparkling Day!",
    description: "Comprehensive guide about Good morning message photo:  Shining Smiles, Sparkling Day!",
    slug: "good-morning-message-photo",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799916145,
    title: "Good Morning Christian Messages: Shining Hope's New Day",
    description: "Comprehensive guide about Good Morning Christian Messages: Shining Hope's New Day",
    slug: "good-morning-christian-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799897592,
    title: "Radiant Good Morning Blessing Message:  Sunlit Hope Dawns",
    description: "Comprehensive guide about Radiant Good Morning Blessing Message:  Sunlit Hope Dawns",
    slug: "good-morning-blessing-message",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799876072,
    title: "Christian Good Morning Messages: Shining Hope's New Dawn",
    description: "Comprehensive guide about Christian Good Morning Messages: Shining Hope's New Dawn",
    slug: "christian-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799852767,
    title: "Tuesday Good Morning Messages: Shining Smiles & Sparkling Days",
    description: "Comprehensive guide about Tuesday Good Morning Messages: Shining Smiles & Sparkling Days",
    slug: "tuesday-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799833716,
    title: "Spiritual Good Morning Messages: Shining Rays of Hope",
    description: "Comprehensive guide about Spiritual Good Morning Messages: Shining Rays of Hope",
    slug: "spiritual-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799815492,
    title: "Shining Pray Good Morning Message: Ignite Your Day With Joy",
    description: "Comprehensive guide about Shining Pray Good Morning Message: Ignite Your Day With Joy",
    slug: "pray-good-morning-message",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799794805,
    title: "Good Morning WhatsApp Message:  Shining Rays of Joyful Energy",
    description: "Comprehensive guide about Good Morning WhatsApp Message:  Shining Rays of Joyful Energy",
    slug: "good-morning-whatsapp-message",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799773008,
    title: "Good Morning Tuesday Messages:  Shining Hope for a Brighter Day",
    description: "Comprehensive guide about Good Morning Tuesday Messages:  Shining Hope for a Brighter Day",
    slug: "good-morning-tuesday-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799752713,
    title: "Radiant Good Morning Message to My Husband:  A Day of Sunshine",
    description: "Comprehensive guide about Radiant Good Morning Message to My Husband:  A Day of Sunshine",
    slug: "good-morning-message-to-my-husband",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799732436,
    title: "Good Morning Message for Friends:  Sunbeams of Joy and Energy",
    description: "Comprehensive guide about Good Morning Message for Friends:  Sunbeams of Joy and Energy",
    slug: "good-morning-message-for-friends",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799711929,
    title: "Good Morning Friday Messages: Ignite Your Weekend's Joy!",
    description: "Comprehensive guide about Good Morning Friday Messages: Ignite Your Weekend's Joy!",
    slug: "good-morning-friday-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799693064,
    title: "Radiant Good Morning Blessing Messages: Dawn's Joyful Embrace",
    description: "Comprehensive guide about Radiant Good Morning Blessing Messages: Dawn's Joyful Embrace",
    slug: "good-morning-blessing-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799674661,
    title: "Hilarious Good Morning Messages:  Shining Joy into Your Day!",
    description: "Comprehensive guide about Hilarious Good Morning Messages:  Shining Joy into Your Day!",
    slug: "hilarious-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799651382,
    title: "Igniting Your Day: Hot Kiss Good Morning Message",
    description: "Comprehensive guide about Igniting Your Day: Hot Kiss Good Morning Message",
    slug: "hot-kiss-good-morning-message",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799632234,
    title: "Good Morning Messages and Pictures:  Sunbeams of Joy!",
    description: "Comprehensive guide about Good Morning Messages and Pictures:  Sunbeams of Joy!",
    slug: "good-morning-messages-and-pictures",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799611094,
    title: "Funny Good Morning Messages:  Igniting Joyful Days!",
    description: "Comprehensive guide about Funny Good Morning Messages:  Igniting Joyful Days!",
    slug: "funny-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799588388,
    title: "Funniest Good Morning Messages:  Sparking Joyful Starts!",
    description: "Comprehensive guide about Funniest Good Morning Messages:  Sparking Joyful Starts!",
    slug: "funniest-good-morning-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799567786,
    title: "Radiant Good Morning Prayer Messages:  A Sunrise of Hope",
    description: "Comprehensive guide about Radiant Good Morning Prayer Messages:  A Sunrise of Hope",
    slug: "good-morning-prayer-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799547357,
    title: "Good morning message to school teacher:  Shining Smiles & Sparkling Days!",
    description: "Comprehensive guide about Good morning message to school teacher:  Shining Smiles & Sparkling Days!",
    slug: "good-morning-message-to-school-teacher",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799527849,
    title: "Good morning message to school opening day: Shining Smiles & Sparkling New Beginnings",
    description: "Comprehensive guide about Good morning message to school opening day: Shining Smiles & Sparkling New Beginnings",
    slug: "good-morning-message-to-school-opening-day",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799509728,
    title: "Radiant Good Morning Prayer Message:  Igniting Hope's New Day",
    description: "Comprehensive guide about Radiant Good Morning Prayer Message:  Igniting Hope's New Day",
    slug: "good-morning-prayer-message",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799493535,
    title: "Funny Good Morning Text Messages:  Sparking Joyful Starts",
    description: "Comprehensive guide about Funny Good Morning Text Messages:  Sparking Joyful Starts",
    slug: "funny-good-morning-text-messages",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799475904,
    title: "Sweet Good Morning Message for Her: Sunbeams of Joy",
    description: "Comprehensive guide about Sweet Good Morning Message for Her: Sunbeams of Joy",
    slug: "sweet-good-morning-message-for-her",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799455999,
    title: "Radiant Good Morning Message for My Love: A Daybreak of Joy",
    description: "Comprehensive guide about Radiant Good Morning Message for My Love: A Daybreak of Joy",
    slug: "good-morning-message-for-my-love",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799432017,
    title: "Radiant Good Morning Love Message for Her, Shining Brighter Than Sunrise",
    description: "Comprehensive guide about Radiant Good Morning Love Message for Her, Shining Brighter Than Sunrise",
    slug: "good-morning-love-message-for-her",
    category: "Good-Morning-Messages"
  },
  {
    id: 1732799414708,
    title: "Radiant Good Morning Message to My Love:  A Sparkling New Day",
    description: "Comprehensive guide about Radiant Good Morning Message to My Love:  A Sparkling New Day",
    slug: "good-morning-message-to-my-love",
    category: "Good-Morning-Messages"
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
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ARTICLES_DIR = path.join(__dirname, 'src/pages/question');

async function updateArticle(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.astro');
    
    // Ekstrak h1 untuk alt text
    const h1Match = content.match(/<h1>(.*?)<\/h1>/);
    const altText = h1Match ? h1Match[1] : fileName.split('-').join(' ');
    
    // Tambahkan import Image jika belum ada
    if (!content.includes("import { Image } from 'astro:assets'")) {
      content = content.replace(
        /import ArticleLayout/,
        `import { Image } from 'astro:assets';\nimport ArticleLayout`
      );
    }
    
    // Tambahkan properti image ke ArticleLayout
    if (!content.includes('image=')) {
      content = content.replace(
        /headings={headings}/,
        `headings={headings}\n  image="/images/articles/thanksgiving/${fileName}.png"`
      );
    }
    
    // Tambahkan komponen Image dengan SEO yang lebih baik
    if (!content.includes('class="article-image"')) {
      content = content.replace(
        /<\/h1>/,
        `</h1>\n\n<div class="article-image">\n  <Image \n    src="/images/articles/thanksgiving/${fileName}.png"\n    alt="${altText}"\n    width={735}\n    height={400}\n    class="hero-image"\n    loading="eager"\n    decoding="async"\n    title="${altText}"\n  />\n</div>\n`
      );
    }
    
    await fs.writeFile(filePath, content);
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

async function main() {
  try {
    const files = await fs.readdir(ARTICLES_DIR);
    const astroFiles = files.filter(f => f.endsWith('.astro'));
    
    for (const file of astroFiles) {
      await updateArticle(path.join(ARTICLES_DIR, file));
    }
    
    console.log('All articles updated successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
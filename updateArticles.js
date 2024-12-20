import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ARTICLES_DIR = path.join(__dirname, 'src/pages/question');

async function updateArticle(filePath) {
  try {
    // Skip index.astro dan files dalam folder page/
    const fileName = path.basename(filePath);
    if (fileName === 'index.astro' || filePath.includes('page/')) {
      console.log(`Skipping: ${filePath}`);
      return;
    }

    let content = await fs.readFile(filePath, 'utf-8');
    const fileNameWithoutExt = path.basename(filePath, '.astro');
    
    // Sisa kode tetap sama
    const h1Match = content.match(/<h1>(.*?)<\/h1>/);
    const altText = h1Match ? h1Match[1] : fileNameWithoutExt.split('-').join(' ');
    
    if (!content.includes("import { Image } from 'astro:assets'")) {
      content = content.replace(
        /import ArticleLayout/,
        `import { Image } from 'astro:assets';\nimport ArticleLayout`
      );
    }
    
    if (!content.includes('image=')) {
      content = content.replace(
        /headings={headings}/,
        `headings={headings}\n  image="/images/articles/thanksgiving/${fileNameWithoutExt}.png"`
      );
    }
    
    if (!content.includes('class="article-image"')) {
      content = content.replace(
        /<\/h1>/,
        `</h1>\n\n<div class="article-image">\n  <Image \n    src="/images/articles/thanksgiving/${fileNameWithoutExt}.png"\n    alt="${altText}"\n    width={735}\n    height={400}\n    class="hero-image"\n    loading="eager"\n    decoding="async"\n    title="${altText}"\n  />\n</div>\n`
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
    const files = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });
    
    for (const file of files) {
      if (file.isFile() && file.name.endsWith('.astro')) {
        await updateArticle(path.join(ARTICLES_DIR, file.name));
      }
    }
    
    console.log('All articles updated successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
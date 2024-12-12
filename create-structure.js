import { promises as fs } from 'fs';
import path from 'path';

const structure = {
  'prisma': ['schema.prisma'],
  'src': {
    'pages': {
      'api': {
        'trpc': ['[trpc].ts'],
      },
      'auth': ['[...nextauth].ts'],
    },
    'components': ['ListingCard.tsx', 'MatchCard.tsx'],
    'styles': ['globals.css'],
    'utils': ['trpc.ts'],
  },
};

async function createStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const targetPath = path.join(basePath, key);
    if (typeof value === 'object') {
      // Si c'est un objet, crée un répertoire et continue
      try {
        await fs.mkdir(targetPath, { recursive: true });
        console.log(`Created directory: ${targetPath}`);
      } catch (err) {
        if (err.code !== 'EEXIST') throw err;
      }
      await createStructure(targetPath, value);
    } else if (Array.isArray(value)) {
      // Si c'est un tableau, crée des fichiers dans le répertoire
      try {
        await fs.mkdir(targetPath, { recursive: true });
        console.log(`Created directory: ${targetPath}`);
      } catch (err) {
        if (err.code !== 'EEXIST') throw err;
      }
      for (const file of value) {
        const filePath = path.join(targetPath, file);
        try {
          await fs.writeFile(filePath, '', { flag: 'wx' }); // Empêche de remplacer les fichiers existants
          console.log(`Created file: ${filePath}`);
        } catch (err) {
          if (err.code !== 'EEXIST') throw err;
        }
      }
    }
  }
}

// Démarrage du script
const basePath = process.cwd(); // Point de départ : répertoire courant
createStructure(basePath, structure).catch((err) => {
  console.error(`Error: ${err.message}`);
});

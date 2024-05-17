import fsp from 'fs/promises';

// BEGIN
import fs from 'fs';

export const reverse = async (filepath) => {
  try {
    const data = await fs.promises.readFile(filepath, 'utf-8');
    const lines = data.split('\n').reverse().join('\n');
    await fs.promises.writeFile(filepath, lines);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// END
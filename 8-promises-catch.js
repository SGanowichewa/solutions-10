import fsp from 'fs/promises';

// BEGIN
import fs from 'fs';

export const touch = async (filepath) => {
  try {
    await fs.promises.access(filepath, fs.constants.F_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.promises.writeFile(filepath, '');
    } else {
      throw error;
    }
  }
};

// END
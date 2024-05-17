import fsp from 'fs/promises';

// BEGIN
import fs from 'fs';

export const getTypes = async (paths) => {
  const getType = async (path) => {
    try {
      const stats = await fs.promises.stat(path);
      return stats.isDirectory() ? 'directory' : 'file';
    } catch (error) {
      return null;
    }
  };

  const typePromises = paths.map(getType);
  return Promise.all(typePromises);
};

// END
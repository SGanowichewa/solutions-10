import fs from 'fs';

// BEGIN
import { promisify } from 'util';

export async function move(oldPath, newPath, callback) {
  try {
    const data = await fs.promises.readFile(oldPath);
    await fs.promises.writeFile(newPath, data);
    await fs.promises.unlink(oldPath);
    callback(null);
  } catch (err) {
    callback(err);
  }
}


// END

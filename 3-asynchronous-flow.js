import fs from 'fs';

// BEGIN
import { stat } from 'fs/promises';
import { promisify } from 'util';

const compare = promisify(fs.stat);

export async function compareFileSizes(filePath1, filePath2, callback) {
  try {
    const [size1, size2] = await Promise.all([
      compare(filePath1),
      compare(filePath2),
    ]);
    callback(null, Math.sign(size1.size - size2.size));
  } catch (err) {
    callback(err);
  }
}

// END
import fs from 'fs';

// BEGIN

export default async function write(filePath, data, callback) {
  try {
    await fs.promises.writeFile(filePath, data);
    callback(null);
  } catch (err) {
    callback(err);
  }
}

// END
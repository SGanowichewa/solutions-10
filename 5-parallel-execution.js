import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
import { promisify } from 'util';

export async function getDirectorySize(dir, callback) {
  try {
    const files = await fs.promises.readdir(dir);
    const paths = files.map(file => dir + '/' + file);
    const stats = await async.map(paths, promisify(fs.stat));
    const fileSizes = stats.filter(stat => stat.isFile()).map(stat => stat.size);
    callback(null, _.sumBy(fileSizes));
  } catch (err) {
    callback(err, null);
  }
}

// END

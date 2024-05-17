import fs from 'fs';

// BEGIN
export default async function print(filePath) {
    const fs = await import('fs/promises');  
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  }
  
// END

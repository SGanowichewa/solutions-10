import fsp from 'fs/promises';

// BEGIN
import fs from 'fs';

export const exchange = async (file1, file2) => {
  try {
    const data1 = await fs.promises.readFile(file1, 'utf-8');
    
    const data2 = await fs.promises.readFile(file2, 'utf-8');
    
    await fs.promises.writeFile(file1, data2);
    await fs.promises.writeFile(file2, data1);
    
    console.log('Содержимое файлов успешно обменено');
  } catch (error) {
    console.error('Ошибка при обмене содержимым файлов:', error);
  }
};

// END
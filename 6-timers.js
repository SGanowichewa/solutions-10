import fs from 'fs';

// BEGIN

const watch = (filepath, interval, callback) => {
  let lastModifiedTime = null;
  
  const checkFile = async () => {
    try {
      const stats = await fs.promises.stat(filepath);
      const currentModifiedTime = stats.mtimeMs;
      
      if (lastModifiedTime && currentModifiedTime !== lastModifiedTime) {
        callback(null);
      }
      
      lastModifiedTime = currentModifiedTime;
    } catch (error) {
      clearInterval(timerId);
      callback(error);
    }
  };
  
  const timerId = setInterval(checkFile, interval);
  
  return timerId;
};

export default watch;

// END

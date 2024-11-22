import fs from 'fs/promises';

export const readJSONFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Failed to read file at ${filePath}: ${error.message}`);
  }
};

import fs from "fs";
import path from "path";

export const getImagesFromFolder = (folder: string): string[] => {
  const directoryPath = path.join(process.cwd(), "public", folder);
  const files = fs.readdirSync(directoryPath);
  return files.map((file) => `/${folder}/${file}`);
};

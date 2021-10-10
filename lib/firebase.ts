import { initFirebaseAdmin } from "../lib/initFirebaseAdmin";

export const getImages = async (name: string) => {
  const storage = initFirebaseAdmin();
  const [files] = await storage.getFiles({
    directory: `${name}/`,
    autoPaginate: true,
    maxResults: 1,
  });

  const names: string[] = [];
  files.forEach((file) => {
    const { name } = file;
    if (name.includes(".jpg")) {
      names.push(name);
    }
  });

  return names;
};

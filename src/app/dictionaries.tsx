// type DictionaryLoader = () => Promise<any>;

// const dictionaries: Record<string, DictionaryLoader> = {
//   en: () => import("./en.json").then((module) => module.default),
//   ru: () => import("./ru.json").then((module) => module.default),
// };

// export const getDictionary = async (locale: string): Promise<any> => dictionaries[locale]();

//
//

type DictionaryLoader = () => Promise<any>;

const dictionaries: Record<string, DictionaryLoader> = {
  "en-EN": () =>
    import("./dictionaries/en.json").then((module) => module.default),
  "ru-RU": () =>
    import("./dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  const loadDictionary = dictionaries[locale];
  if (loadDictionary) {
    return loadDictionary();
  } else {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
};

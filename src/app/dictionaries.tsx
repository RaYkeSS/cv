// type DictionaryLoader = () => Promise<any>;

// const dictionaries: Record<string, DictionaryLoader> = {
//   en: () => import("./en.json").then((module) => module.default),
//   ru: () => import("./ru.json").then((module) => module.default),
// };

// export const getDictionary = async (locale: string): Promise<any> => dictionaries[locale]();

//
//

type Dictionary = {
  [key: string]: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DictionaryLoader = () => Promise<any>;

const dictionaries: Record<string, DictionaryLoader> = {
  "en-EN": () =>
    import("./dictionaries/en.json").then((module) => module.default),
  "ru-RU": () =>
    import("./dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loadDictionary = dictionaries[locale];
  if (loadDictionary) {
    return loadDictionary();
  } else {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
};

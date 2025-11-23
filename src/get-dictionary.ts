import 'server-only';
import { type Locale, i18n } from './i18n-config';

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ko: () => import('./dictionaries/ko.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    console.error(`Dictionary not found for locale: ${locale}`);
    return dictionaries[i18n.defaultLocale]();
  }
  return dictionaries[locale]();
};

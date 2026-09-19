import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function normalizeChineseLocale(locale) {
  const normalized = locale.toLowerCase();

  if (/^zh-(hant|tw|hk|mo)(-|$)/.test(normalized)) {
    return 'zh-TW';
  }

  if (normalized === 'zh' || /^zh-(hans|cn|sg|my)(-|$)/.test(normalized)) {
    return 'zh-CN';
  }

  return locale;
}

function canonicalizeLocale(locale) {
  try {
    return Intl.getCanonicalLocales(normalizeChineseLocale(locale))[0];
  } catch {
    return undefined;
  }
}

export function selectLocale(acceptLanguage, locales, defaultLocale) {
  const requested = new Negotiator({
    headers: { 'accept-language': acceptLanguage || '' },
  }).languages();
  const normalized = requested
    .filter((locale) => locale !== '*')
    .map(canonicalizeLocale)
    .filter(Boolean);

  if (normalized.length === 0) {
    return defaultLocale;
  }

  return matchLocale(normalized, locales, defaultLocale);
}

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const locales = ['ko', 'en', 'ja', 'it'];
const currencyByCity = {
  kotakinabalu: 'MYR',
  bandarseribegawan: 'BND',
  tokyo: 'JPY',
  fuji: 'JPY',
  shizuoka: 'JPY',
  sapporo: 'JPY',
  rome: 'EUR',
  vatican: 'EUR',
  pisa: 'EUR',
  florence: 'EUR',
  bangkok: 'THB',
  pattaya: 'THB',
  cebu: 'PHP',
  kyoto: 'JPY',
  osaka: 'JPY',
  sydney: 'AUD',
  melbourne: 'AUD',
  singapore: 'SGD',
  taipei: 'TWD',
  shanghai: 'CNY',
  hangzhou: 'CNY',
  suzhou: 'CNY',
};

async function loadDictionary(locale) {
  const contents = await readFile(
    new URL(`../src/dictionaries/${locale}.json`, import.meta.url),
    'utf8',
  );

  return JSON.parse(contents);
}

test('every localized city guide includes practical currency information', async () => {
  for (const locale of locales) {
    const dictionary = await loadDictionary(locale);

    assert.equal(typeof dictionary.city.currency, 'string', `${locale} currency label`);
    assert.ok(dictionary.city.currency.length > 0, `${locale} currency label is not empty`);
    assert.deepEqual(Object.keys(dictionary.cities), Object.keys(currencyByCity));

    for (const [cityId, currencyCode] of Object.entries(currencyByCity)) {
      const currency = dictionary.cities[cityId].currency;

      assert.equal(typeof currency, 'string', `${locale}/${cityId} currency text`);
      assert.match(currency, new RegExp(`\\b${currencyCode}\\b`), `${locale}/${cityId} ISO code`);
      assert.ok(currency.length >= 80, `${locale}/${cityId} includes practical payment guidance`);
    }
  }
});

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { filterCities, getCountries } from '../src/utils/cityFilter.mjs';

async function loadDictionary(locale) {
  return JSON.parse(await readFile(
    new URL(`../src/dictionaries/${locale}.json`, import.meta.url), 'utf8',
  ));
}

// A missing translation key or shortened array would drop guide content or
// break the shared components. IDs and image paths must survive translation.
function checkTranslation(source, translated, path = '') {
  assert.equal(typeof translated, typeof source, `${path}: matching type`);
  if (typeof source === 'string') {
    assert.ok(translated.trim(), `${path}: nonempty translation`);
    if (path.endsWith('.id') || path.endsWith('.image')) {
      assert.equal(translated, source, `${path}: stable resource identifier`);
    } else if (source.length > 80) {
      assert.notEqual(translated, source, `${path}: prose is translated`);
    }
    return;
  }
  assert.equal(Array.isArray(translated), Array.isArray(source), `${path}: matching container`);
  assert.deepEqual(Object.keys(translated).sort(), Object.keys(source).sort(), `${path}: complete content`);
  for (const key of Object.keys(source)) {
    checkTranslation(source[key], translated[key], `${path}.${key}`);
  }
}

test('Malay preserves all guide content and resource identifiers', async () => {
  const [english, malay] = await Promise.all([loadDictionary('en'), loadDictionary('ms')]);
  checkTranslation(english, malay);
});

test('Malay city names and countries work with search and country filters', async () => {
  const { cities } = await loadDictionary('ms');
  const allCities = Object.values(cities);
  assert.deepEqual(filterCities(allCities, ' SINGAPURA ', '').map(city => city.id), ['singapore']);
  assert.deepEqual(filterCities(allCities, 'tokyo', 'Jepun').map(city => city.id), ['tokyo']);
  assert.deepEqual(filterCities(allCities, 'tokyo', 'Malaysia'), []);
  assert.ok(getCountries(allCities, 'ms').includes('Jepun'));
});

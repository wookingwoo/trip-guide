import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { filterCities, getCountries } from '../src/utils/cityFilter.mjs';

async function loadDictionary(locale) {
  return JSON.parse(await readFile(
    new URL(`../src/dictionaries/${locale}.json`, import.meta.url), 'utf8',
  ));
}

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

test('Simplified and Traditional Chinese preserve complete guide content', async () => {
  const [english, simplified, traditional] = await Promise.all([
    loadDictionary('en'), loadDictionary('zh-CN'), loadDictionary('zh-TW'),
  ]);
  checkTranslation(english, simplified, 'zh-CN');
  checkTranslation(english, traditional, 'zh-TW');
});

test('Chinese variants use the expected regional writing systems', async () => {
  const [simplified, traditional] = await Promise.all([
    loadDictionary('zh-CN'), loadDictionary('zh-TW'),
  ]);
  assert.equal(simplified.cities.shanghai.country, '中国');
  assert.equal(traditional.cities.shanghai.country, '中國');
  assert.equal(simplified.cities.taipei.country, '台湾');
  assert.equal(traditional.cities.taipei.country, '台灣');
});

test('Traditional Chinese avoids Simplified-only and Mainland travel wording', async () => {
  const traditional = JSON.stringify(await loadDictionary('zh-TW'));
  const disallowed = [
    '游客', '建筑', '并', '采用', '兼容', '一日游', '拉面',
    '意大利冰淇淋', '酒店', '公交', '出租车', '移动支付',
    '輕松', '運營', '收獲', '復雜', '悠閑',
    '日元', '便利店', '計劃', '盡管', '通過', '注冊', '墻',
  ];

  for (const term of disallowed) {
    assert.equal(traditional.includes(term), false, `zh-TW contains ${term}`);
  }
});

test('Chinese city search and country filters use localized names', async () => {
  const simplifiedCities = Object.values((await loadDictionary('zh-CN')).cities);
  const traditionalCities = Object.values((await loadDictionary('zh-TW')).cities);

  assert.deepEqual(filterCities(simplifiedCities, ' 台北 ', '').map(city => city.id), ['taipei']);
  assert.deepEqual(filterCities(simplifiedCities, '上海', '中国').map(city => city.id), ['shanghai']);
  assert.deepEqual(filterCities(traditionalCities, '上海', '中國').map(city => city.id), ['shanghai']);
  assert.ok(getCountries(traditionalCities, 'zh-TW').includes('台灣'));
});

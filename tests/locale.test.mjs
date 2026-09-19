import assert from 'node:assert/strict';
import test from 'node:test';

import { selectLocale } from '../src/utils/locale.mjs';

const locales = ['ko', 'en', 'ja', 'it', 'ms', 'zh-CN', 'zh-TW'];

test('maps Chinese script and region preferences to the matching site locale', () => {
  const cases = [
    ['zh-CN,zh;q=0.9', 'zh-CN'],
    ['zh-Hans-CN,zh;q=0.9', 'zh-CN'],
    ['zh-SG,zh;q=0.9', 'zh-CN'],
    ['zh-TW,zh;q=0.9', 'zh-TW'],
    ['zh-Hant-TW,zh;q=0.9', 'zh-TW'],
    ['zh-HK,zh;q=0.9', 'zh-TW'],
  ];

  for (const [header, expected] of cases) {
    assert.equal(selectLocale(header, locales, 'ko'), expected, header);
  }
});

test('preserves preference order and falls back to the default locale', () => {
  assert.equal(selectLocale('en-US,en;q=0.9,zh-TW;q=0.8', locales, 'ko'), 'en');
  assert.equal(selectLocale('fr-FR,fr;q=0.9', locales, 'ko'), 'ko');
});

test('ignores malformed locale tokens instead of crashing middleware', () => {
  assert.equal(selectLocale('en-US,en_US;q=0.9', locales, 'ko'), 'en');
  assert.equal(selectLocale('zh-Hant-TW,i-klingon;q=0.9', locales, 'ko'), 'zh-TW');
  assert.equal(selectLocale('en_US,x-private;q=0.9', locales, 'ko'), 'ko');
});

import assert from 'node:assert/strict';
import test from 'node:test';

import { filterCities, getCountries } from '../src/utils/cityFilter.mjs';

const cities = [
  { id: 'tokyo', name: 'Tokyo', country: 'Japan' },
  { id: 'kyoto', name: 'Kyoto', country: 'Japan' },
  { id: 'rome', name: 'Rome', country: 'Italy' },
];

test('filters cities by a case-insensitive trimmed city-name query', () => {
  assert.deepEqual(
    filterCities(cities, '  TOK  ', ''),
    [cities[0]],
  );
});

test('combines the city-name query with an exact country filter', () => {
  assert.deepEqual(filterCities(cities, 'o', 'Japan'), [cities[0], cities[1]]);
  assert.deepEqual(filterCities(cities, 'rome', 'Japan'), []);
});

test('returns unique country options in locale-aware alphabetical order', () => {
  assert.deepEqual(getCountries(cities, 'en'), ['Italy', 'Japan']);
});

/**
 * @template {{ name: string, country: string }} T
 * @param {T[]} cities
 * @param {string} query
 * @param {string} country
 * @returns {T[]}
 */
export function filterCities(cities, query, country) {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  return cities.filter((city) => {
    const matchesQuery = city.name.toLocaleLowerCase().includes(normalizedQuery);
    const matchesCountry = country === '' || city.country === country;

    return matchesQuery && matchesCountry;
  });
}

/**
 * @param {{ name: string, country: string }[]} cities
 * @param {string} locale
 * @returns {string[]}
 */
export function getCountries(cities, locale) {
  return [...new Set(cities.map((city) => city.country))].sort((a, b) =>
    a.localeCompare(b, locale),
  );
}

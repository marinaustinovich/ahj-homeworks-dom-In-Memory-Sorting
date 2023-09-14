export default function sortAuthomatic(type, to, filmsData) {
  const ourFilms = [...filmsData];

  function compare(a, b) {
    if (['id', 'year', 'imdb'].includes(type)) {
      return to === 'max' ? a[type] - b[type] : b[type] - a[type];
    }

    if (type === 'title') {
      return to === 'max' ? a[type].localeCompare(b[type]) : b[type].localeCompare(a[type]);
    }

    return 0;
  }

  try {
    ourFilms.sort(compare);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return {
    films: ourFilms,
    typeSort: type,
    toMinOrMax: to,
  };
}

import data from './data.json';

export default function sortAuthomatic(type, to) {
  const { films } = data;
  const ourFilms = films;
  const dataForTable = {};
  try {
    // compare(a, b) сравнивает две строки, нужен для сортировки
    let compare;

    if (to === 'max') {
      switch (type) {
        case 'id':
        case 'year':
        case 'imdb':
          /* eslint-disable */
          compare = function (a, b) {
            return a[type] - b[type];
          };
          break;
        case 'title':
          /* eslint-disable */
          compare = function (a, b) {
            return a[type] > b[type] ? 1 : -1;
          };
          break;
        default: break;
      }
    } else {
      switch (type) {
        case 'id':
        case 'year':
        case 'imdb':
          /* eslint-disable */
          compare = function (a, b) {
            return b[type] - a[type];
          };
          break;
        case 'title':
          compare = function (a, b) {
            return a[type] > b[type] ? -1 : 1;
          };
          break;
        default: break;
      }
    }

    // сортировка
    ourFilms.sort(compare);
    dataForTable.films = ourFilms;
    dataForTable.typeSort = type;
    dataForTable.toMinOrMax = to;
  } catch (e) {
    /* eslint-disable */
    console.dir(e);
  }
  return dataForTable;
}

import sortAuthomatic from './sortData';
import data from './data.json';

function createTableRow(film) {
  const row = document.createElement('tr');
  const imdb = film.imdb.toFixed(2);

  ['id', 'title', 'year', 'imdb'].forEach((attr) => {
    const cell = document.createElement('td');
    if (attr === 'imdb') {
      cell.textContent = `imdb: ${imdb}`;
      row.setAttribute(`data-${attr}`, imdb);
    } else {
      cell.textContent = film[attr];
      row.setAttribute(`data-${attr}`, film[attr]);
    }
    row.appendChild(cell);
  });

  return row;
}

function updateTableHeader(dataTypeSort, dataToMinOrMax) {
  const thead = document.querySelector('thead');
  const thSort = thead.querySelector(`[data-${dataTypeSort}]`);

  if (thead.querySelector('.sorted')) {
    thead.querySelector('.sorted').classList.remove('sorted');
  }

  thSort.classList.add('sorted');
  thSort.setAttribute('data-to', dataToMinOrMax);
}

function createTableEl(obj) {
  const container = document.querySelector('#films-container');
  if (!(container instanceof HTMLElement)) {
    throw new Error('container is not HTMLElement');
  }

  container.textContent = '';

  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';

  const table = document.createElement('table');
  table.setAttribute('data-id', 'table');
  table.className = 'table_sort';

  const thead = document.createElement('thead');
  thead.setAttribute('data-id', 'thead');
  thead.className = 'table-tile';

  const headerRow = document.createElement('tr');
  ['id', 'title', 'year', 'imdb'].forEach((header) => {
    const th = document.createElement('th');
    th.setAttribute(`data-${header}`, header);
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.setAttribute('data-id', 'tbody');
  obj.films.forEach((film) => {
    tbody.appendChild(createTableRow(film));
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
  container.appendChild(tableContainer);

  updateTableHeader(obj.typeSort, obj.toMinOrMax);
}

export default function createTableElAfterSort() {
  const dataAttributes = ['id', 'title', 'year', 'imdb'];
  let i = 0;

  const timerId = setInterval(() => {
    if (i >= dataAttributes.length) i = 0;

    const dataFilmsToMax = sortAuthomatic(dataAttributes[i], 'max', data.films);
    createTableEl(dataFilmsToMax);

    setTimeout(() => {
      const dataFilmsToMin = sortAuthomatic(dataAttributes[i], 'min', data.films);
      createTableEl(dataFilmsToMin);
      i += 1;
    }, 2000);
  }, 4000);

  setTimeout(() => clearInterval(timerId), 100000);
}

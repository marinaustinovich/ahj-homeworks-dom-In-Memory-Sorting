import sortAuthomatic from './sortData';

function createTableEl(data) {
  const container = document.querySelector('#films-container');
  if (!(container instanceof HTMLElement)) {
    throw new Error('container is not HTMLElement');
  }

  container.innerHTML = `
        <div class="table-container">
          <table data-id="table" class="table_sort">
          <thead data-id=thead></thead>
          <tbody data-id=tbody></tbody>
          </table>
        </div>
      `;

  const theadEl = container.querySelector('[data-id=thead]');
  theadEl.innerHTML = `<tr>
      <th data-id="id">id</th>
      <th data-title="title">title</th>
      <th data-year="year">year</th>
      <th data-imdb="imdb">imdb</th>
      
    </tr>`;
  theadEl.classList.add('table-tile');

  const tbobyEl = container.querySelector('[data-id=tbody]');

  for (let i = 0; i < data.films.length; i += 1) {
    const film = data.films[i];
    const imdb = film.imdb.toFixed(2);
    const cellEl = document.createElement('tr');
    cellEl.setAttribute('data-id', film.id);
    cellEl.setAttribute('data-title', film.title);
    cellEl.setAttribute('data-year', film.year);
    cellEl.setAttribute('data-imdb', imdb);

    cellEl.innerHTML = `<td>${film.id}</td>
    <td>${film.title}</td>
    <td>${film.year}</td>
    <td>imdb: ${imdb}</td>`;

    tbobyEl.appendChild(cellEl);
  }

  const thead = document.querySelector('thead');
  const thSort = thead.querySelector(`[data-${data.typeSort}]`);
  if (thead.querySelector('.sorted')) {
    thead.querySelector('.sorted').classList.remove('sorted');
  }

  thSort.classList.add('sorted');
  thSort.setAttribute('data-to', data.toMinOrMax);
}

export default function createTableElAfterSort() {
  const dataAttributes = ['id', 'title', 'year', 'imdb'];
  let i = 0;

  const timerId = setInterval(() => {
    if (i >= dataAttributes.length) {
      i = 0;
    }

    const dataFilmsToMax = sortAuthomatic(dataAttributes[i], 'max');
    createTableEl(dataFilmsToMax);

    setTimeout(() => {
      const dataFilmsToMin = sortAuthomatic(dataAttributes[i], 'min');
      createTableEl(dataFilmsToMin);
      i += 1;
    }, 2000);
  }, 4000);
  setTimeout(() => clearInterval(timerId), 100000);
}

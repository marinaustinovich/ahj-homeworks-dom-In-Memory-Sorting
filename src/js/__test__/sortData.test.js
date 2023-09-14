import sortAuthomatic from '../sortData';

describe('sortAuthomatic', () => {
  const sampleData = [
    {
      id: 3,
      title: 'B movie',
      year: 2022,
      imdb: 7.5,
    },
    {
      id: 1,
      title: 'A movie',
      year: 2020,
      imdb: 8.5,
    },
    {
      id: 2,
      title: 'C movie',
      year: 2021,
      imdb: 9.0,
    },
  ];

  it('should sort by id in ascending order', () => {
    const result = sortAuthomatic('id', 'max', sampleData);
    expect(result.films[0].id).toBe(1);
    expect(result.films[1].id).toBe(2);
    expect(result.films[2].id).toBe(3);
  });

  it('should sort by title in descending order', () => {
    const result = sortAuthomatic('title', 'min', sampleData);
    expect(result.films[0].title).toBe('C movie');
    expect(result.films[1].title).toBe('B movie');
    expect(result.films[2].title).toBe('A movie');
  });

  it('should sort by year in descending order', () => {
    const result = sortAuthomatic('year', 'min', sampleData);
    expect(result.films[0].year).toBe(2022);
    expect(result.films[1].year).toBe(2021);
    expect(result.films[2].year).toBe(2020);
  });

  it('should sort by imdb in ascending order', () => {
    const result = sortAuthomatic('imdb', 'min', sampleData);
    expect(result.films[0].imdb).toBe(9.0);
    expect(result.films[1].imdb).toBe(8.5);
    expect(result.films[2].imdb).toBe(7.5);
  });

  it('should return correct typeSort and toMinOrMax', () => {
    const result = sortAuthomatic('title', 'min', sampleData);
    expect(result.typeSort).toBe('title');
    expect(result.toMinOrMax).toBe('min');
  });

  it('should handle empty filmsData array', () => {
    const result = sortAuthomatic('id', 'max', []);
    expect(result.films).toEqual([]);
    expect(result.typeSort).toBe('id');
    expect(result.toMinOrMax).toBe('max');
  });

  it('should handle incorrect filmsData type (string)', () => {
    try {
      sortAuthomatic('id', 'max', 'notAnArray');
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError);
    }
  });

  it('should handle incorrect filmsData type (number)', () => {
    try {
      sortAuthomatic('id', 'max', 12345);
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError);
    }
  });

  it('should handle errors during sorting', () => {
    const faultyData = [
      {
        id: 1, title: 'A movie', year: 2020, imdb: 8.5,
      },
      {
        faultyAttribute: 2, title: 'B movie', year: 2021, imdb: 7.5,
      },
    ];
    try {
      sortAuthomatic('faultyAttribute', 'max', faultyData);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});

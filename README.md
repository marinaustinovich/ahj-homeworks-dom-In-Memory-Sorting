
### In-Memory Sorting

[![Build status](https://ci.appveyor.com/api/projects/status/9efguans9byeifhk/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ahj-homeworks-dom-in-memory-sorting/branch/main)

deployment: https://marinaustinovich.github.io/ahj-homeworks-dom-In-Memory-Sorting/
#### Легенда

Хранить всю информацию в DOM и в атрибутах — не всегда лучшая идея, поэтому принято решение реализовать хранение в памяти.

#### Описание

Формат приходящих данных (JSON):
```json
[
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
]
```

Все полученные объекты хранятся в памяти в виде массива. Сортировку осуществляется на базе этого массива. После каждой сортировки пересобирается заново дерево DOM.

Внешний вид без сортировки:

![](./src/img/loading.pngloading.png)

Выводятся оценки всегда в одном виде - после точки два символа.

При сортировке по id (по возрастанию):

![](./src/img/loading-2.png)

Обратите внимание на стрелку возле id.


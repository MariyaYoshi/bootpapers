import * as papersAPI from "./fakeTypePaperService";

const papers = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    symbol: "ОКВ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Очень секретный документ..."
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd471126",
    symbol: "ОКОГУ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Ооочень секретный документ..."
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Соловей С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd413136",
    symbol: "ОКАТО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Зацени анекдот, лол!"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Краснов С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd455437",
    symbol: "ОКАТО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Рукопоп Т.Д."
  },
  {
    _id: "5b21ca3eeb7f6fbccd409784",
    symbol: "ОКЭР",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Мойдодырдин С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191c",
    symbol: "ОКФС",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Дмитриев К.И."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191d",
    symbol: "ОКОПФ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Лосев В.Б."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191e",
    symbol: "ОКПО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192d",
    symbol: "ОКОГУ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47193e",
    symbol: "ОКАТО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47204a",
    symbol: "ОКЭР",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47403d",
    symbol: "ОКФС",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47403c",
    symbol: "ОКОПФ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd414013b",
    symbol: "ОКАТО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Зацени анекдот, лол!"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Краснов С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd45403a",
    symbol: "ОКАТО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Рукопоп Т.Д."
  },
  {
    _id: "5b21ca3eeb7f6fbccd40402e",
    symbol: "ОКЭР",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Мойдодырдин С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47402d",
    symbol: "ОКФС",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Дмитриев К.И."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47402c",
    symbol: "ОКОПФ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Лосев В.Б."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47402b",
    symbol: "ОКПО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47402a",
    symbol: "ОКОГУ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47401e",
    symbol: "ОКАТО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47401c",
    symbol: "ОКЭР",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47401b",
    symbol: "ОКФС",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47401a",
    symbol: "ОКОПФ",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189b",
    symbol: "ОКПО",
    naming: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Название для секретного документа"
    },
    publishDate: "2018-01-03T19:04:28.809Z",
    author: "Кучер С.В."
  }
];

export function getPapers() {
  return papers;
}

export function getPaper(id) {
  return papers.find(m => m._id === id);
}

export function savePaper(paper) {
  let paperInDb = papers.find(m => m._id === paper._id) || {};
  paperInDb.name = paper.name;
  paperInDb.naming = papersAPI.papertypes.find(g => g._id === paper.typeId);
  paperInDb.numberInStock = paper.numberInStock;
  paperInDb.dailyRentalRate = paper.dailyRentalRate;

  if (!paperInDb._id) {
    paperInDb._id = Date.now();
    papers.push(paperInDb);
  }

  return paperInDb;
}

export function deletePaper(id) {
  let paperInDb = papers.find(m => m._id === id);
  papers.splice(papers.indexOf(paperInDb), 1);
  return paperInDb;
}

import get from '@/http/get'

const getFilms = (query) => {
  const url = `https://swapi.dev/api/films/${query}`;
  return new Promise((resolve, reject) => {
    get(url)
      .then(resolve)
      .catch(reject);
  });
};

export default getFilms;

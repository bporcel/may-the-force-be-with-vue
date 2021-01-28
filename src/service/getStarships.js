/* eslint-disable */
import get from '@/http/get';

const getStarships = query => {
  const url = `https://swapi.dev/api/starships/${query}`;
  return new Promise(async resolve => {
    const starships = await get(url).then(res => res);
    _mapInfo(starships.pilots, 'name');
    starships.pilots = await Promise.all(starships.pilots).then(res => res);

    _mapInfo(starships.films, 'title');
    starships.films = await Promise.all(starships.films).then(res => res);

    resolve(starships);
  });
};

const getAllStarships = () => {
  const url = `https://swapi.dev/api/starships/`;
  return new Promise(async (resolve, reject) => {
    const starships = await get(url)
      .then(res => res)
      .catch(reject);
    while (starships.next) {
      const tmp = await get(starships.next)
        .then(res => res)
        .catch(reject);
      starships.next = tmp.next;
      starships.results.push(...tmp.results);
    }
    resolve(starships);
  });
};

const _mapInfo = (items, index) => {
  items.map((item, key) => {
    items[key] = get(item).then(res => res[index]);
  });
};

export { getStarships, getAllStarships };

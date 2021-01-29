/* eslint-disable */
import { get } from '@/service/http';
import { mapUrlArrayToStringArray } from '@/service/helpers';

const getStarships = query => {
  const url = `https://swapi.dev/api/starships/${query}`;
  return new Promise(async (resolve, reject) => {
    const starships = await get(url)
      .then(res => res)
      .catch(reject);
    mapUrlArrayToStringArray(starships.pilots, 'name');
    starships.pilots = await Promise.all(starships.pilots).then(res => res);

    mapUrlArrayToStringArray(starships.films, 'title');
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
      const tmp = await get(starships.next.replace('http', 'https'))
        .then(res => res)
        .catch(reject);
      starships.next = tmp.next;
      starships.results.push(...tmp.results);
    }
    resolve(starships);
  });
};

export { getStarships, getAllStarships };

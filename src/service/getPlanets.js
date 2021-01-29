/* eslint-disable */
import { get } from '@/service/http';
import { mapUrlArrayToStringArray } from '@/service/helpers';

const getPlanets = query => {
  const url = `https://swapi.dev/api/planets/${query}`;
  return new Promise(async (resolve, reject) => {
    const planets = await get(url)
      .then(res => res)
      .catch(reject);
    mapUrlArrayToStringArray(planets.residents, 'name');
    planets.residents = await Promise.all(planets.residents).then(res => res);

    mapUrlArrayToStringArray(planets.films, 'title');
    planets.films = await Promise.all(planets.films).then(res => res);

    resolve(planets);
  });
};

const getAllPlanets = () => {
  const url = `https://swapi.dev/api/planets/`;
  return new Promise(async (resolve, reject) => {
    const planets = await get(url)
      .then(res => res)
      .catch(reject);
    while (planets.next) {
      const tmp = await get(planets.next)
        .then(res => res)
        .catch(reject);
      planets.next = tmp.next;
      planets.results.push(...tmp.results);
    }
    resolve(planets);
  });
};

export { getPlanets, getAllPlanets };

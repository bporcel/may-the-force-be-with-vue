/* eslint-disable */
import get from '@/http/get';

const getPeople = query => {
  const url = `https://swapi.dev/api/people/${query}`;
  return new Promise(async resolve => {
    const people = await get(url).then(res => res);
    _mapInfo(people.films, 'title');
    people.films = await Promise.all(people.films).then(res => res);

    _mapInfo(people.vehicles, 'name');
    people.vehicles = await Promise.all(people.vehicles).then(res => res);

    _mapInfo(people.starships, 'name');
    people.starships = await Promise.all(people.starships).then(res => res);

    people.homeworld = [people.homeworld];
    _mapInfo(people.homeworld, 'name');
    people.homeworld = await Promise.all(people.homeworld).then(res => res);

    resolve(people);
  });
};

const getAllPeople = () => {
  const url = `https://swapi.dev/api/people/`;
  return new Promise(async (resolve, reject) => {
    const people = await get(url)
      .then(res => res)
      .catch(reject);
    while (people.next) {
      const tmp = await get(people.next)
        .then(res => res)
        .catch(reject);
      people.next = tmp.next;
      people.results.push(...tmp.results);
    }
    resolve(people);
  });
};

const _mapInfo = (items, index) => {
  items.map((item, key) => {
    items[key] = get(item).then(res => res[index]);
  });
};

export { getPeople, getAllPeople };

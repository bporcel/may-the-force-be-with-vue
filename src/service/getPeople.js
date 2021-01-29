/* eslint-disable */
import { get } from '@/service/http';
import { mapUrlArrayToStringArray } from '@/service/helpers';

const getPeople = query => {
  const url = `https://swapi.dev/api/people/${query}`;
  return new Promise(async (resolve, reject) => {
    const people = await get(url)
      .then(res => res)
      .catch(reject);

    mapUrlArrayToStringArray(people.films, 'title');
    people.films = await Promise.all(people.films).then(res => res);

    mapUrlArrayToStringArray(people.vehicles, 'name');
    people.vehicles = await Promise.all(people.vehicles).then(res => res);

    mapUrlArrayToStringArray(people.starships, 'name');
    people.starships = await Promise.all(people.starships).then(res => res);

    people.homeworld = [people.homeworld];
    mapUrlArrayToStringArray(people.homeworld, 'name');
    people.homeworld = await Promise.all(people.homeworld).then(res => res);

    people.species = people.species;
    mapUrlArrayToStringArray(people.species, 'name');
    people.species = await Promise.all(people.species).then(res => res);

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
      const tmp = await get(people.next.replace('http', 'https'))
        .then(res => res)
        .catch(reject);
      people.next = tmp.next;
      people.results.push(...tmp.results);
    }

    resolve(people);
  });
};

export { getPeople, getAllPeople };

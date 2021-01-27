import get from "@/http/get";

const getPeople = (query) => {
  const url = `https://swapi.dev/api/people/${query}`;
  return new Promise(async (resolve) => {
    const people = await _getPeople(url);

    if (people.results) {
      people.results.map(async (result) => {
        _mapInfo(result.films, "title");
        result.films = await Promise.all(result.films).then((res) => res);
      });
    } else {
      _mapInfo(people.films, "title");
      people.films = await Promise.all(people.films).then((res) => res);

      _mapInfo(people.vehicles, "name");
      people.vehicles = await Promise.all(people.vehicles).then((res) => res);

      _mapInfo(people.starships, "name");
      people.starships = await Promise.all(people.starships).then((res) => res);

      people.homeworld = [people.homeworld];
      _mapInfo(people.homeworld, "name");
      people.homeworld = await Promise.all(people.homeworld).then((res) => res);
    }

    resolve(people);
  });
};

const _mapInfo = (items, index) => {
  items.map((item, key) => {
    items[key] = get(item).then((res) => res[index]);
  });
};

const _getPeople = (url) => {
  return get(url).then((res) => res);
};

export default getPeople;

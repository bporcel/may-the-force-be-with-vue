import { get } from '@/service/http';

const arrayToString = array => {
  let str = '';
  array.forEach((item, i) => {
    i === array.length - 1 ? (str += item) : (str += `${item}, `);
  });
  return str;
};

const mapUrlArrayToStringArray = (items, index) => {
  items.map((item, key) => {
    items[key] = get(item).then(res => res[index]);
  });
};

export { arrayToString, mapUrlArrayToStringArray };

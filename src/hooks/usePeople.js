import { toRefs, reactive } from "vue";
import useFetch from "@/hooks/useFetch";
import useFilms from "./useFilms";

const usePeople = (query) => {
  const url = `https://swapi.dev/api/people/${query}`;
  const state = reactive({
    people: [],
    error: null,
    fetching: false,
  });

  const { response, error, fetching, fetchData } = useFetch(url);
  fetchData();

  state.people = response;
  state.error = error;
  state.fetching = fetching;

  return { ...toRefs(state) };
};

export default usePeople;

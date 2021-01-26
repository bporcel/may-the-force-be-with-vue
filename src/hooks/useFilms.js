import { toRefs, reactive } from "vue";
import useFetch from "@/hooks/useFetch";

const useFilms = (query) => {
  const url = `https://swapi.dev/api/films/${query}`;
  const state = reactive({
    films: [],
    error: null,
    fetching: false,
  });

  const { response, error, fetching, fetchData } = useFetch(url);
  fetchData();

  state.films = response;
  state.error = error;
  state.fetching = fetching;

  return { ...toRefs(state) };
};

export default useFilms;

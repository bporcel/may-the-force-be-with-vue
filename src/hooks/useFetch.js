import { toRefs, reactive } from "vue";
import get from "@/http/get";

const useFetch = (url) => {
  const state = reactive({
    response: [],
    error: null,
    fetching: false,
  });

  const fetchData = async () => {
    state.fetching = true;
    try {
      await get(url).then((res) => {
        state.response = res;
      });
    } catch (err) {
      state.error = err;
    } finally {
      state.fetching = false;
    }
  };

  return { ...toRefs(state), fetchData };
};

export default useFetch;

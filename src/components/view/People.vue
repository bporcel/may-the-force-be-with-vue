<template>
  <div v-if="fetching">{{ t_("fetching") }}</div>
  <div v-else-if="error">La fuerza se debilita</div>
  <div v-else>
    <h1>Mira todos los que han venido</h1>
    <b-card-pagination
      :records="people.count"
      :perPage="10"
      :data="people.results"
      :handleClickButton="HandleClickChangePage"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import usePeople from "@/hooks/usePeople";
import usei18n from "@/hooks/usei18n";
import BCardPagination from "@/components/shared/BCardPagination";
export default {
  name: "People",
  components: { BCardPagination },
  setup() {
    const { t_ } = usei18n();
    const router = useRouter();
    const state = reactive({
      people: [],
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      const { people, error, fetching } = usePeople("?page=1");
      state.people = people;
      state.error = error;
      state.fetching = fetching;
      router.push(`#1`);
    });

    const HandleClickChangePage = (id) => {
      if (router.currentRoute.value.hash !== `#${id}`) {
        const { people, error, fetching } = usePeople(`?page=${id}`);
        state.error = error;
        state.fetching = fetching;
        state.people = people;
        router.push(`#${id}`);
      }
    };

    return { ...toRefs(state), HandleClickChangePage, t_ };
  },
};
</script>

<style scoped></style>

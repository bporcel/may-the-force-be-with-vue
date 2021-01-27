<template>
  <h1>Hente</h1>
  <div v-if="fetching">{{ t_("fetching") }}</div>
  <div v-else-if="error">La fuerza se debilita</div>
  <div v-else>
    <b-card-pagination
      :records="people.count"
      :perPage="10"
      :data="people.results"
      :handleClickButton="handleClickChangePage"
      :handleClickCard="goToDetail"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import getPeople from "@/service/getPeople";
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
      if (!router.currentRoute.value.fullPath.includes("#page=")) {
        router.push(`#page=1`);
      }
      const query = router.currentRoute.value.hash.replace("#", "?");
      state.fetching = true;
      getPeople(query)
        .then((res) => {
          state.people = res;
        })
        .catch((err) => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const goToDetail = (id) => {
      router.push({ name: "PeopleDetail", params: { id: id } });
    };

    const handleClickChangePage = (id) => {
      if (router.currentRoute.value.hash !== `#page=${id}`) {
        state.fetching = true;
        getPeople(`?page=${id}`)
          .then((res) => {
            state.people = res;
          })
          .catch((err) => {
            state.error = err;
          })
          .finally(() => {
            state.fetching = false;
          });
        router.push(`#page=${id}`);
      }
    };

    return { ...toRefs(state), handleClickChangePage, goToDetail, t_ };
  },
};
</script>

<style scoped></style>

<template>
  <div v-if="fetching">{{ t_("fetching") }}</div>
  <div v-else-if="error">{{ t_("error") }}</div>
  <div v-else>
    <h1>Sup'</h1>
    <b-detail
      :name="person.name"
      :info="[
        person.films,
        person.vehicles,
        person.starships,
        person.homeworld,
      ]"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import getPeople from "@/service/getPeople";
import usei18n from "@/hooks/usei18n";
import BDetail from "@/components/shared/BDetail";
export default {
  name: "Detail",
  components: {
    BDetail,
  },
  setup() {
    const route = useRoute();
    const { t_ } = usei18n();
    const state = reactive({
      person: {},
      films: [],
      planet: {},
      vehicles: [],
      starships: [],
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getPeople(route.fullPath.split("/").pop())
        .then((res) => {
          state.person = res;
        })
        .catch((err) => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });
    return { ...toRefs(state), t_ };
  },
};
</script>

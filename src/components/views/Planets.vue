<template>
  <h1>{{ t_('planets') }}</h1>
  <div v-if="fetching">{{ t_('fetching') }}</div>
  <div v-else-if="error">{{ t_('fetchError') }}</div>
  <div v-else>
    <b-card-pagination
      :records="planets.count"
      :perPage="10"
      :data="planets.results"
      :handleClickCard="goToDetail"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { getAllPlanets } from '@/service/getPlanets';
import usei18n from '@/hooks/usei18n';
import BCardPagination from '@/components/organisms/BCardPagination';
export default {
  name: 'Planets',
  components: { BCardPagination },
  setup() {
    const { t_ } = usei18n();
    const router = useRouter();
    const state = reactive({
      planets: [],
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getAllPlanets()
        .then(res => {
          state.planets = res;
        })
        .catch(err => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const goToDetail = id => {
      router.push({ name: 'PlanetDetail', params: { id: id } });
    };

    return {
      ...toRefs(state),
      goToDetail,
      t_,
    };
  },
};
</script>

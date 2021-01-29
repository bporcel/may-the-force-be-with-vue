<template>
  <h1 class="title">{{ i18n && i18n.t_('planets') }}</h1>
  <h1 class="question">{{ i18n && i18n.t_('planetQuestion') }}</h1>
  <div v-if="fetching"><b-loading /></div>
  <div v-else-if="error"><b-error /></div>
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
import { useI18n } from '@/hooks/usei18n';
import BError from '@/components/atoms/BError';
import BLoading from '@/components/atoms/BLoading';
import BCardPagination from '@/components/organisms/BCardPagination';
export default {
  name: 'Planets',
  components: { BCardPagination, BError, BLoading },
  setup() {
    const i18n = useI18n();
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
      i18n,
    };
  },
};
</script>

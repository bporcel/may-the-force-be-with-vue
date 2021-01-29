<template>
  <div v-if="fetching"><b-loading /></div>
  <div v-else-if="error"><b-error /></div>
  <div v-else>
    <h1>{{ planet.name }}</h1>
    <b-detail
      :data="[
        {
          text: planet.rotation_period && t_('rotationPeriod'),
          data: planet.rotation_period,
        },
        {
          text: planet.orbital_period && t_('orbitalPeriod'),
          data: planet.orbital_period,
        },
        {
          text: planet.diameter && t_('diameter'),
          data: planet.diameter,
        },
        {
          text: planet.climate && t_('climate'),
          data: planet.climate,
        },
        {
          text: planet.gravity && t_('gravity'),
          data: planet.gravity,
        },
        {
          text: planet.terrain && t_('terrain'),
          data: planet.terrain,
        },
        {
          text: planet.surface_water && t_('surfaceWater'),
          data: planet.surface_water,
        },
        {
          text: planet.population && t_('population'),
          data: planet.population,
        },
        {
          text: planet.residents && t_('residents'),
          data: planet.residents,
        },
        {
          text: planet.films && t_('films'),
          data: planet.films,
        },
      ]"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { getPlanets } from '@/service/getPlanets';
import { arrayToString } from '@/service/helpers.js';
import usei18n from '@/hooks/usei18n';
import BError from '@/components/atoms/BError';
import BLoading from '@/components/atoms/BLoading';
import BDetail from '@/components/molecules/BDetail';
export default {
  name: 'Detail',
  components: {
    BDetail,
    BError,
    BLoading,
  },
  setup() {
    const route = useRoute();
    const { t_ } = usei18n();
    const state = reactive({
      planet: {},
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getPlanets(route && route.fullPath.split('/').pop())
        .then(res => {
          res.films = arrayToString(res.films);
          res.residents = arrayToString(res.residents);
          state.planet = res;
        })
        .catch(err => {
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

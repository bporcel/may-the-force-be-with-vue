<template>
  <div v-if="fetching">{{ t_('fetching') }}</div>
  <div v-else-if="error">{{ t_('fetchError') }}</div>
  <div v-else>
    <h1>{{ planet.name }}</h1>
    <b-detail
      :data="[
        {
          text: 'Rotation period: ',
          data: planet.rotation_period,
        },
        {
          text: 'Orbital period: ',
          data: planet.orbital_period,
        },
        {
          text: 'Diameter: ',
          data: planet.diameter,
        },
        {
          text: 'Climate: ',
          data: planet.climate,
        },
        {
          text: 'Gravity: ',
          data: planet.gravity,
        },
        {
          text: 'Terrain: ',
          data: planet.terrain,
        },
        {
          text: 'Surface water: ',
          data: planet.surface_water,
        },
        {
          text: 'Population: ',
          data: planet.population,
        },
        {
          text: 'Residents: ',
          data: planet.residents,
        },
        {
          text: 'Films: ',
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
import usei18n from '@/hooks/usei18n';
import BDetail from '@/components/molecules/BDetail';
export default {
  name: 'Detail',
  components: {
    BDetail,
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
      getPlanets(route.fullPath.split('/').pop())
        .then(res => {
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

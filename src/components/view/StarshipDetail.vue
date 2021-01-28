<template>
  <div v-if="fetching">{{ t_('fetching') }}</div>
  <div v-else-if="error">{{ t_('fetchError') }}</div>
  <div v-else>
    <h1>{{ starship.name }}</h1>
    <b-detail
      :data="[
        {
          text: 'Model: ',
          data: starship.model,
        },
        {
          text: 'Starship class: ',
          data: starship.starship_class,
        },
        {
          text: 'Manufacturer: ',
          data: starship.manufacturer,
        },
        {
          text: 'Cost in Credits: ',
          data: starship.cost_in_credits,
        },
        {
          text: 'Length: ',
          data: starship.length,
        },
        {
          text: 'Max atmosphering speed: ',
          data: starship.max_atmosphering_speed,
        },
        {
          text: 'Crew: ',
          data: starship.crew,
        },
        {
          text: 'Passengers: ',
          data: starship.passengers,
        },
        {
          text: 'Megalight per hour: ',
          data: starship.MGLT,
        },
        {
          text: 'Pilots: ',
          data: starship.pilots,
        },
        {
          text: 'Films: ',
          data: starship.films,
        },
      ]"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { getStarships } from '@/service/getStarships';
import usei18n from '@/hooks/usei18n';
import BDetail from '@/components/shared/BDetail';
export default {
  name: 'StarshipDetail',
  components: {
    BDetail,
  },
  setup() {
    const route = useRoute();
    const { t_ } = usei18n();
    const state = reactive({
      starship: {},
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getStarships(route.fullPath.split('/').pop())
        .then(res => {
          state.starship = res;
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

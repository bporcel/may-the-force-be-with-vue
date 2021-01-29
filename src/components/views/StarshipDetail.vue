<template>
  <div v-if="fetching"><b-loading /></div>
  <div v-else-if="error"><b-error /></div>
  <div v-else>
    <h1>{{ starship.name }}</h1>
    <b-detail
      :data="[
        {
          text: starship.model && t_('model'),
          data: starship.model,
        },
        {
          text: starship.starship_class && t_('starshipsClass'),
          data: starship.starship_class,
        },
        {
          text: starship.manufacturer && t_('manufacturer'),
          data: starship.manufacturer,
        },
        {
          text: starship.cost_in_credits && t_('costCredits'),
          data: starship.cost_in_credits,
        },
        {
          text: starship.length && t_('length'),
          data: starship.length,
        },
        {
          text: starship.max_atmosphering_speed && t_('atmospheringSpeed'),
          data: starship.max_atmosphering_speed,
        },
        {
          text: starship.crew && t_('crew'),
          data: starship.crew,
        },
        {
          text: starship.passengers && t_('passengers'),
          data: starship.passengers,
        },
        {
          text: starship.MGLT && t_('mglt'),
          data: starship.MGLT,
        },
        {
          text: starship.pilots && t_('pilots'),
          data: starship.pilots,
        },
        {
          text: starship.films && t_('films'),
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
import { arrayToString } from '@/service/helpers.js';
import usei18n from '@/hooks/usei18n';
import BError from '@/components/atoms/BError';
import BLoading from '@/components/atoms/BLoading';
import BDetail from '@/components/molecules/BDetail';
export default {
  name: 'StarshipDetail',
  components: {
    BDetail,
    BError,
    BLoading,
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
          res.films = arrayToString(res.films);
          res.pilots = arrayToString(res.pilots);
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

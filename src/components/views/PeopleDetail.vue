<template>
  <div v-if="fetching"><b-loading /></div>
  <div v-else-if="error"><b-error /></div>
  <div v-else>
    <h1>{{ person.name }}</h1>
    <b-detail
      :data="[
        {
          text: person.birth_year && i18n && i18n.t_('birthYear'),
          data: person.birth_year,
        },
        {
          text: person.species && i18n && i18n.t_('species'),
          data: person.species,
        },
        {
          text: person.gender && i18n && i18n.t_('gender'),
          data: person.gender,
        },
        {
          text: person.homeworld && i18n && i18n.t_('homeworld'),
          data: person.homeworld,
        },
        {
          text: person.height && i18n && i18n.t_('height'),
          data: person.height,
        },
        {
          text: person.eye_color && i18n && i18n.t_('eyeColor'),
          data: person.eye_color,
        },
        {
          text: person.hair_color && i18n && i18n.t_('hairColor'),
          data: person.hair_color,
        },
        {
          text: person.skin_color && i18n && i18n.t_('skinColor'),
          data: person.skin_color,
        },
        {
          text: person.vehicles && i18n && i18n.t_('vehicles'),
          data: person.vehicles,
        },
        {
          text: person.starships && i18n && i18n.t_('starships'),
          data: person.starships,
        },
        {
          text: person.films && i18n && i18n.t_('films'),
          data: person.films,
        },
      ]"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { getPeople } from '@/service/getPeople';
import { arrayToString } from '@/service/helpers.js';
import { useI18n } from '@/hooks/usei18n';
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
    const i18n = useI18n();
    const state = reactive({
      person: {},
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getPeople(route && route.fullPath.split('/').pop())
        .then(res => {
          state.person = normalizeArrays(res);
        })
        .catch(err => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const normalizeArrays = res => {
      res.films = arrayToString(res.films);
      res.homeworld = arrayToString(res.homeworld);
      res.starships = arrayToString(res.starships);
      res.vehicles = arrayToString(res.vehicles);
      res.species = arrayToString(res.species);
      return res;
    };

    return { ...toRefs(state), i18n };
  },
};
</script>

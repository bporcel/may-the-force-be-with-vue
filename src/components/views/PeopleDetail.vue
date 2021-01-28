<template>
  <div v-if="fetching">{{ t_('fetching') }}</div>
  <div v-else-if="error">{{ t_('fetchError') }}</div>
  <div v-else>
    <h1>{{ person.name }}</h1>
    <b-detail
      :data="[
        {
          text: person.birth_year && 'Año de nacimiento: ',
          data: person.birth_year,
        },
        {
          text: person.gender && 'Genero: ',
          data: person.gender,
        },
        {
          text: person.eye_color && 'Color de ojos: ',
          data: person.eye_color,
        },
        {
          text: person.height && 'Altura: ',
          data: person.height,
        },
        {
          text: person.hair_color && 'Color de pelo: ',
          data: person.hair_color,
        },
        {
          text: person.skin_color && 'Color de piel: ',
          data: person.skin_color,
        },
        {
          text: person.films && 'Películas: ',
          data: person.films,
        },
        {
          text: person.vehicles && 'Vehiculos: ',
          data: person.vehicles,
        },
        {
          text: person.starships && 'Naves: ',
          data: person.starships,
        },
        {
          text: person.homeworld && 'Planeta natal: ',
          data: person.homeworld,
        },
      ]"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { getPeople } from '@/service/getPeople';
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
      person: {},
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getPeople(route.fullPath.split('/').pop())
        .then(res => {
          res.films = arrayToString(res.films);
          res.homeworld = arrayToString(res.homeworld);
          res.starships = arrayToString(res.starships);
          res.vehicles = arrayToString(res.vehicles);
          state.person = res;
        })
        .catch(err => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const arrayToString = array => {
      let str = '';
      array.forEach((item, i) => {
        i === array.length - 1 ? (str += item) : (str += `${item}, `);
      });
      return str;
    };

    return { ...toRefs(state), t_ };
  },
};
</script>

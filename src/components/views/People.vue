<template>
  <h1>{{ t_('people') }}</h1>
  <div v-if="fetching">{{ t_('fetching') }}</div>
  <div v-else-if="error">{{ t_('fetchError') }}</div>
  <div v-else>
    <b-card-pagination
      :records="people.count"
      :perPage="10"
      :data="people.results"
      :handleClickCard="goToDetail"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { getAllPeople } from '@/service/getPeople';
import usei18n from '@/hooks/usei18n';
import BCardPagination from '@/components/organisms/BCardPagination';
export default {
  name: 'People',
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
      state.fetching = true;
      getAllPeople()
        .then(res => {
          state.people = res;
        })
        .catch(err => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const goToDetail = id => {
      router.push({ name: 'PeopleDetail', params: { id: id } });
    };

    return {
      ...toRefs(state),
      goToDetail,
      t_,
    };
  },
};
</script>

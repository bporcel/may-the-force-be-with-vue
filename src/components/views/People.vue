<template>
  <h1 class="title">{{ i18n.t_('people') }}</h1>
  <h1 class="question">{{ i18n.t_('peopleQuestion') }}</h1>
  <div v-if="fetching"><b-loading /></div>
  <div v-else-if="error"><b-error /></div>
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
import { useI18n } from '@/hooks/usei18n';
import BError from '@/components/atoms/BError';
import BLoading from '@/components/atoms/BLoading';
import BCardPagination from '@/components/organisms/BCardPagination';
export default {
  name: 'People',
  components: { BCardPagination, BError, BLoading },
  setup() {
    const i18n = useI18n();
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
      i18n,
    };
  },
};
</script>

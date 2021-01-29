<template>
  <h1 class="title">{{ i18n && i18n.t_('starships') }}</h1>
  <h1 class="question">{{ i18n && i18n.t_('starshipsQuestion') }}</h1>
  <div v-if="fetching"><b-loading /></div>
  <div v-else-if="error"><b-error /></div>
  <div v-else>
    <b-card-pagination
      :records="starships.count"
      :perPage="10"
      :data="starships.results"
      :handleClickCard="goToDetail"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { getAllStarships } from '@/service/getStarships';
import { useI18n } from '@/hooks/usei18n';
import BError from '@/components/atoms/BError';
import BLoading from '@/components/atoms/BLoading';
import BCardPagination from '@/components/organisms/BCardPagination';
export default {
  name: 'Starships',
  components: { BCardPagination, BError, BLoading },
  setup() {
    const i18n = useI18n();
    const router = useRouter();
    const state = reactive({
      starships: [],
      error: null,
      fetching: false,
    });

    onBeforeMount(() => {
      state.fetching = true;
      getAllStarships()
        .then(res => {
          state.starships = res;
        })
        .catch(err => {
          state.error = err;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const goToDetail = id => {
      router.push({ name: 'StarshipDetail', params: { id: id } });
    };

    return {
      ...toRefs(state),
      goToDetail,
      i18n,
    };
  },
};
</script>

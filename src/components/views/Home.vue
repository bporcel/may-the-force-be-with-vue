<template>
  <div class="subgrid">
    <div>
      <h1 class="title">{{ i18n.t_('forceWithVue') }}</h1>
      <h1 class="question">{{ i18n.t_('whyYouHere') }}</h1>
      <router-link :to="{ name: 'People' }">{{
        i18n.t_('people')
      }}</router-link>
      <router-link :to="{ name: 'Starships' }">{{
        i18n.t_('starships')
      }}</router-link>
      <router-link :to="{ name: 'Planets' }">{{
        i18n.t_('planets')
      }}</router-link>
    </div>
    <img src="~@/assets/background.png" alt="Death Star image" />
  </div>
</template>

<script>
import { useI18n } from '@/hooks/usei18n';
export default {
  name: 'Home',
  setup() {
    const i18n = useI18n();

    return { i18n };
  },
};
</script>

<style lang="scss" scoped>
.subgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  & img {
    width: 100%;
  }
}

@media only screen and (max-width: 1000px) {
  .subgrid {
    grid-template-columns: auto;
    grid-template-rows: auto auto;

    & a {
      text-align: center;
    }

    & img {
      width: 70%;
      justify-self: center;
    }
  }
}
</style>

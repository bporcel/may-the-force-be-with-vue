<template>
  <div class="subgrid">
    <div>
      <h1>{{ t_('forceWithVue') }}</h1>
      <h2>{{ t_('whyYouHere') }}</h2>
      <router-link :to="{ name: 'People' }">{{ t_('people') }}</router-link>
      <router-link :to="{ name: 'Starships' }">{{
        t_('starships')
      }}</router-link>
      <router-link :to="{ name: 'Planets' }">{{ t_('planets') }}</router-link>
    </div>
    <img src="~@/assets/background.png" alt="" />
  </div>
</template>

<script>
import usei18n from '@/hooks/usei18n';
export default {
  name: 'Home',
  setup() {
    const { t_ } = usei18n();

    return { t_ };
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

@media only screen and (max-width: 950px) {
  .subgrid {
    text-align: center;
    grid-template-columns: auto;
    grid-template-rows: auto auto;

    & img {
      width: 70%;
      justify-self: center;
    }
  }
}
</style>

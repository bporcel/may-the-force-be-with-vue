<template>
  <div class="subgrid">
    <div>
      <h1 class="title">{{ t_('forceWithVue') }}</h1>
      <h1>{{ t_('whyYouHere') }}</h1>
      <router-link :to="{ name: 'People' }">{{ t_('people') }}</router-link>
      <router-link :to="{ name: 'Starships' }">{{
        t_('starships')
      }}</router-link>
      <router-link :to="{ name: 'Planets' }">{{ t_('planets') }}</router-link>
    </div>
    <img src="~@/assets/background.png" alt="Death Star image" />
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
.title {
  font-size: 3em;
}

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

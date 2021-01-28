<template>
  <div :class="route.fullPath !== '/' && 'grid'">
    <div class="end">
      <b-navigation />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import BNavigation from '@/components/app/BNavigation';
export default {
  name: 'App',
  components: { BNavigation },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-gap: 3em;

  & .end {
    text-align: right;
    text-align: -webkit-right;
  }
}

@media only screen and (max-width: 850px) {
  .grid {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-gap: 0em;

    & .end {
      justify-self: end;
      text-align: -webkit-right;
    }
  }
}
</style>

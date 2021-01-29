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
import { provideI18n } from '@/hooks/usei18n';
import en from '@/i18n/en';
import BNavigation from '@/components/molecules/BNavigation';
export default {
  name: 'App',
  components: { BNavigation },
  setup() {
    const route = useRoute();

    provideI18n({
      locale: 'en',
      messages: {
        en: en,
      },
    });

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

@media only screen and (max-width: 1000px) {
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

<style lang="scss">
body {
  background-color: $dark-brown;
  margin: 5em;
  letter-spacing: 0.03em;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $yellow;
}

a {
  color: $yellow;
  text-decoration: none;
  border-bottom: solid 1px $yellow;
  padding: 0.3em 0;
  margin: 2em 1em 2em 0;
  font-size: 1.2em;
  display: block;

  &:hover {
    color: $white;
  }
}

.question {
  color: $blue;
  font-weight: bold;
}

.title {
  font-size: 3em;
  margin-top: 0;
}

@media only screen and (max-width: 650px) {
  .card {
    margin: 1em 0;
  }
}

@media only screen and (max-width: 1000px) {
  body {
    margin: 2em;
  }
}
</style>

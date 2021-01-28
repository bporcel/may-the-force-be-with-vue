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

<style lang="scss">
body {
  background-color: #181818;
  // margin: 5% 5% 0 10%;
  margin: 5em;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e0e07a;
}

a {
  color: #e0e07a;
  text-decoration: none;
  border-bottom: solid 1px #e0e07a;
  padding: 0.3em;
  margin: 2em 1em 2em 0;
  font-size: 1.2em;
  display: block;

  &:hover {
    color: #ffffff;
  }
}

button {
  background: none;
  outline: none;
  border: none;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
}

@media only screen and (max-width: 850px) {
  body {
    margin: 2em;
  }
}
</style>

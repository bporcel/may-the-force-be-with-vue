<template>
  <div class="grid">
    <div class="end">
      <b-navigation />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import BNavigation from '@/components/app/BNavigation';
export default {
  name: 'App',
  components: { BNavigation },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: auto;
  grid-gap: 3em;

  & .end {
    text-align: right;
  }
}

@media only screen and (max-width: 1460px) {
  .grid {
    grid-template-columns: auto;
    grid-template-rows: 0.1fr 1fr;
    grid-gap: 0em;
  }
}
</style>

<style lang="scss">
body {
  background-color: #181818;
  // margin: 5% 30% 10% 10%;
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
  margin: 1em;

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

@media only screen and (max-width: 450px) {
  body {
    margin: 2em;
  }
}
</style>

<template>
  <!-- <router-link :to="{ name: 'Home' }">asdasd</router-link> -->
  <router-view />
  <!-- <Home /> -->
</template>

<script>
import Home from "@/components/view/Home";
export default {
  name: "App",
  components: { Home },
  setup() {},
};
</script>

<style lang="scss">
body {
  background-color: #181818;
  margin: 5% 30% 10% 10%;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #e0e07a;
  // font-size: 2em;
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
</style>

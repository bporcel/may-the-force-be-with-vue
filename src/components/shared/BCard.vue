<template>
  <button
    :id="id"
    :to="{ name: 'PeopleDetail' }"
    class="card"
    v-on:click="(e) => handleClick(e.currentTarget.id)"
  >
    {{ name }}
    {{ subtitle }}
  </button>
</template>

<script>
export default {
  name: "b-card",
  props: {
    name: {
      type: String,
      required: true,
    },
    subtitle: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  background-color: #ffffff;
  color: #181818;
  /* text-align: left; */
  padding: 1em;
  margin: 1em 2em 1em 0;
  cursor: pointer;

  &:hover {
    // box-shadow: .5em .5em .3em #000000;
    background-color: #2e2e2e;
    color: #ffffff;
    transition: 500ms;
    border: none;
  }
}
</style>

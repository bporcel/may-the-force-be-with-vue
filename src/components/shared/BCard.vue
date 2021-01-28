<template>
  <button :id="id" class="card" @click="e => handleClick(e.currentTarget.id)">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'b-card',
  props: {
    name: {
      type: String,
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
  padding: 1em;
  margin: 1em 2em 1em 0;
  cursor: pointer;

  &:hover {
    background-color: #2e2e2e;
    color: #ffffff;
    transition: 300ms;
    border: none;
  }
}

@media only screen and (max-width: 650px) {
  .card {
    margin: 1em 0;
  }
}
</style>

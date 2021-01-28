<template>
  <button
    :id="id"
    class="card btn"
    @click="e => handleClick(e.currentTarget.id)"
  >
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
  background-color: $white;
  color: $dark-brown;
  padding: 1em;
  margin: 1em 2em 1em 0;

  &.btn {
    cursor: pointer;
    &:hover {
      background-color: $light-brown;
      color: $white;
      transition: 300ms;
      border: none;
    }
  }
}

@media only screen and (max-width: 650px) {
  .card {
    margin: 1em 0;
  }
}
</style>

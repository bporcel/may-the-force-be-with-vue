<template>
  <b-button :id="id" class="card" @click="e => handleClick(e.currentTarget.id)">
    {{ name }}
  </b-button>
</template>

<script>
import BButton from '@/components/atoms/BButton';
export default {
  name: 'b-card',
  components: { BButton },
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

<style lang="scss" scoped>
.card {
  background-color: $white;
  color: $dark-brown;
  padding: 1em;
  margin: 1em 2em 1em 0;

  &:hover {
    background-color: $light-brown;
    color: $white;
    transition: 300ms;
    border: none;
  }
}
</style>

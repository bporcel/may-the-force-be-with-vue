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

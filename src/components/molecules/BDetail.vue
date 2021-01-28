<template>
  <div class="details">
    <p :key="key" v-for="(d, key) in data">
      <strong>{{ d.text }}</strong>
      {{ d.data }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'b-detail',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  background-color: $white;
  color: $dark-brown;
  padding: 1em;
  width: 75%;
}
</style>

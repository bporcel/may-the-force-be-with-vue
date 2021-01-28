<template>
  <div class="details">
    <p :key="key" v-for="(d, key) in data">
      <strong>{{ d.text }}</strong>
      <span v-if="!Array.isArray(d.data)">
        {{ d.data }}
      </span>
      <span v-else :key="i" v-for="(info, i) in d.data">
        {{ i !== d.data.length - 1 ? `${info}, ` : info }}
      </span>
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

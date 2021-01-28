<template>
  <input
    v-on:input="e => handleFilter(e.target.value)"
    :placeholder="t_('filterPlaceholder')"
  />
</template>

<script>
import usei18n from '@/hooks/usei18n';
export default {
  name: 'b-filter',
  props: {
    handleFilter: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const { t_ } = usei18n();

    return { t_ };
  },
};
</script>

<style scoped>
input {
  padding: 0.2em;
  width: 25em;
}
</style>

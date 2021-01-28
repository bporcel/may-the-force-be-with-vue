<template>
  <span class="before" />
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

<style lang="scss" scoped>
input {
  padding: 0.2em;
  width: 25em;
}
@media only screen and (max-width: 650px) {
  input {
    width: 50%;
  }
  .before::before {
    content: 'Filter';
    display: block;
  }
}
</style>

<template>
  <b-input
    @input="e => handleFilter(e.target.value)"
    :placeholder="t_('filterPlaceholder')"
  />
</template>

<script>
import usei18n from '@/hooks/usei18n';
import BInput from '@/components/atoms/BInput';
export default {
  name: 'b-filter',
  components: { BInput },
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

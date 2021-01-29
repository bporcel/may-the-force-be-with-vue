<template>
  <div>
    <b-input
      @input="e => handleFilter(e.target.value)"
      :placeholder="i18n.t_('filterPlaceholder')"
    />
    <img src="~@/assets/search.png" alt="search icon" />
  </div>
</template>

<script>
import { useI18n } from '@/hooks/usei18n';
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
    const i18n = useI18n();

    return { i18n };
  },
};
</script>

<style lang="scss" scoped>
div {
  & img {
    width: 2em;
    margin: 0 1em;
    vertical-align: middle;
  }
}
</style>

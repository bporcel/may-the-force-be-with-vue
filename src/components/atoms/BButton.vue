<template>
  <button>
    <slot>{{ t_('default') }}</slot>
  </button>
</template>

<script>
import usei18n from '@/hooks/usei18n';
export default {
  name: 'b-input',
  setup() {
    const { t_ } = usei18n();

    return { t_ };
  },
};
</script>

<style lang="scss" scoped>
button {
  background: none;
  outline: none;
  border: none;
  color: $white;
  font-size: 1em;
  cursor: pointer;
  text-align: left;
}
</style>

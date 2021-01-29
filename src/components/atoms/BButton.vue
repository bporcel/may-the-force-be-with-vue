<template>
  <button>
    <slot>{{ i18n && i18n.t_('default') }}</slot>
  </button>
</template>

<script>
import { useI18n } from '@/hooks/usei18n';
export default {
  name: 'b-button',
  setup() {
    const i18n = useI18n();

    return { i18n };
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

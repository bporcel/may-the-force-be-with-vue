<template>
  <p>{{ i18n.t_('error') }}</p>
</template>

<script>
import { useI18n } from '@/hooks/usei18n';
export default {
  name: 'b-error',
  setup() {
    const i18n = useI18n();

    return { i18n };
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 1em;
  margin: 1em 0;
  background-color: $light-brown;
  color: $red;
}
</style>

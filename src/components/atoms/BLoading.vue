<template>
  <p>{{ t_('fetching') }}</p>
</template>

<script>
import usei18n from '@/hooks/usei18n';
export default {
  name: 'b-loading',
  setup() {
    const { t_ } = usei18n();

    return { t_ };
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 1em;
  margin: 1em 0;
  background-color: $light-brown;
  color: $blue;
}
</style>

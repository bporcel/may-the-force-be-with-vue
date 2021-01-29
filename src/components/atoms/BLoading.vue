<template>
  <div class="loading">
    <img src="~@/assets/loading.gif" alt="Death star gif" />
  </div>
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
.loading {
  display: grid;
  background-color: $dark-brown;
  opacity: 40%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

img {
  border-radius: 50%;
  justify-self: center;
  margin: 2em;
  align-self: center;
}
</style>

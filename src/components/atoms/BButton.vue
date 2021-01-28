<template>
  <button><slot /></button>
</template>

<script>
export default {
  name: 'b-input',
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
}
</style>

<template>
  <p>{{ name }}</p>
  <p>{{ info }}</p>
</template>

<script>
export default {
  name: "b-detail",
  props: {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: Array,
      required: true,
    },
  },
};
</script>

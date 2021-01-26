<template>
  <div class="grid">
    <b-card :key="key" v-for="(item, key) in items" :name="item.name" :id="key" />
  </div>
  <button
    :class="`#${i}` === hash ? 'active' : ''"
    :id="i"
    v-on:click="(e) => handleClickButton(e.currentTarget.id)"
    :key="i"
    v-for="i in Math.ceil(records / perPage)"
  >
    {{ i }}
  </button>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import BCard from "@/components/shared/BCard";
export default {
  name: "b-card-pagination",
  components: { BCard },
  props: {
    records: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    handleClickButton: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const hash = useRouter().currentRoute.value.hash;
    const state = reactive({
      items: props.data,
    });
    return { ...toRefs(state), hash };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.active {
  color: #e0e07a;
}
</style>

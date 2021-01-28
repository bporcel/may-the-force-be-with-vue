<template>
  <div>
    <b-filter :handleFilter="handleFilter" />
    <div v-if="items.length > 0">
      <div class="grid">
        <b-card
          :key="key"
          v-for="(item, key) in items"
          :name="item.name"
          :id="item.url.split('/')[5]"
          :handleClick="handleClickCard"
        />
      </div>
      <button
        :class="`pageBtn ${i === currentPage && 'active'}`"
        :id="i"
        v-on:click="e => handleClickButton(e.currentTarget.id)"
        :key="i"
        v-for="i in totalPages"
      >
        {{ i }}
      </button>
    </div>
    <div v-else class="card">No results found</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import BCard from '@/components/shared/BCard';
import BFilter from '@/components/app/BFilter';
export default {
  name: 'b-card-pagination',
  components: { BCard, BFilter },
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
    handleClickCard: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      currentPage: 1,
      items: props.data.slice(0, props.perPage),
      filtered: [],
      totalPages: Math.ceil(props.records / props.perPage),
    });

    const handleClickButton = id => {
      state.currentPage = parseInt(id);

      const start = (state.currentPage - 1) * props.perPage;
      const end = start + props.perPage;

      if (state.filtered.length > 0) {
        state.items = state.filtered.slice(start, end);
      } else {
        state.items = props.data.slice(start, end);
      }
    };

    const handleFilter = value => {
      const tmp = props.data.filter(result =>
        result.name.toLowerCase().includes(value.toLowerCase())
      );
      if (value === '') {
        state.filtered = [];
        state.totalPages = Math.ceil(props.records / props.perPage);
      } else if (tmp.length > 0) {
        state.filtered = tmp;
        state.totalPages = Math.ceil(tmp.length / props.perPage);
      }
      state.items = tmp.slice(0, props.perPage);
      state.currentPage = 1;
    };

    return { ...toRefs(state), handleClickButton, handleFilter };
  },
};
</script>

<style lang="scss" scoped>
.pageBtn {
  font-size: 1.2em;
  &:hover {
    color: $yellow;
  }
  &.active {
    color: $yellow;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

@media only screen and (max-width: 650px) {
  .grid {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
}
</style>

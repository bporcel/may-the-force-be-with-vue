<template>
  <button
    class="bubble"
    :key="key"
    v-for="(line, key) in data"
    @click="handleNavigation(line)"
  >
    {{ mapRoutes[line] && mapRoutes[line].question }}
    <span class="answer">{{ mapRoutes[line] && mapRoutes[line].answer }}</span>
  </button>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'b-navigation',
  setup() {
    const router = useRouter();
    const route = useRouter().currentRoute;
    const data = ref([]);

    const mapRoutes = {
      '/': { question: 'Why are you here?', answer: 'Change answer' },
      '/people': {
        question: 'Who are you looking for?',
        answer: 'Change answer',
      },
      '/planets': {
        question: 'What planet are you looking for?',
        answer: 'Change answer',
      },
      '/starships': {
        question: 'Which starship are you looking for?',
        answer: 'Change answer',
      },
    };

    watch(route, (to, from) => {
      if (route.value.name === 'Home') {
        data.value = [];
      } else {
        const index = data.value.indexOf(to.fullPath);
        data.value.splice(index, data.value.length - 1);
        if (!from.fullPath.match(/[0-9]/)) {
          data.value.push(from.fullPath);
        }
      }
    });

    const handleNavigation = line => {
      const index = data.value.indexOf(line);
      data.value.splice(index, data.value.length - 1);
      router.push(line);
    };

    return { data, route, handleNavigation, mapRoutes };
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  margin: 1em;
  padding: 1em;
  text-align: right;
  background-color: $light-brown;
  border-radius: 0.2em;
  display: block;
  & .answer {
    display: block;
    padding-top: 0.5em;
    opacity: 0.5;
  }
}
</style>

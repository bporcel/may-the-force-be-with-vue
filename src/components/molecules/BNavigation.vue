<template>
  <b-button
    class="bubble"
    :key="key"
    v-for="(line, key) in data"
    @click="handleNavigation(line)"
  >
    <span class="question">{{
      mapRoutes[line] && mapRoutes[line].question
    }}</span>
    <span class="answer">{{ mapRoutes[line] && mapRoutes[line].answer }}</span>
  </b-button>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '@/hooks/usei18n';
import BButton from '@/components/atoms/BButton';

export default {
  name: 'b-navigation',
  components: {
    BButton,
  },
  setup() {
    const i18n = useI18n();
    const router = useRouter();
    const route = router && router.currentRoute;
    const data = ref([]);

    const mapRoutes = {
      '/': {
        question: i18n && i18n.t_('whyYouHere'),
        answer: i18n && i18n.t_('changeAnswer'),
      },
      '/people': {
        question: i18n && i18n.t_('peopleQuestion'),
        answer: i18n && i18n.t_('changeAnswer'),
      },
      '/planets': {
        question: i18n && i18n.t_('planetQuestion'),
        answer: i18n && i18n.t_('changeAnswer'),
      },
      '/starships': {
        question: i18n && i18n.t_('starshipsQuestion'),
        answer: i18n && i18n.t_('changeAnswer'),
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

    return { data, handleNavigation, mapRoutes };
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
  }
  &:hover {
    & .answer {
      color: $yellow;
    }
  }
}
</style>

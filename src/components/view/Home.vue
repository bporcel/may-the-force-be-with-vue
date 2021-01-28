<template>
  <h1>{{ t_('forceWithVue') }}</h1>
  <h2>{{ t_('whyYouHere') }}</h2>
  <router-link :to="{ name: 'People' }">{{ t_('people') }}</router-link>
  <router-link :to="{ name: 'Starships' }">{{ t_('starships') }}</router-link>
  <router-link :to="{ name: 'Planets' }">{{ t_('planets') }}</router-link>
</template>

<script>
import usei18n from '@/hooks/usei18n';
export default {
  name: 'Home',
  components: {},
  setup() {
    const { t_ } = usei18n();

    return { t_ };
  },
};
</script>

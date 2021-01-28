<template>
  <h1>{{ t_('forceWithVue') }}</h1>
  <h2>{{ t_('whyYouHere') }}</h2>
  <router-link
    :key="key"
    :to="{ name: option.path }"
    v-for="(option, key) in options"
    >{{ option.text }}</router-link
  >
  <!-- <button v-on:click="changeLang()">es</button> -->
</template>

<script>
import usei18n from '@/hooks/usei18n';
export default {
  name: 'Home',
  components: {},
  setup() {
    const { t_ } = usei18n();

    const options = [
      { text: t_('people'), path: 'People' },
      { text: t_('starships'), path: 'Starships' },
      { text: t_('planets'), path: 'Planets' },
    ];

    // const changeLang = () => {
    //   i18n.changeLanguage("es");
    // };

    return { options, t_ };
  },
};
</script>

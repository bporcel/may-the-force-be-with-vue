<template>
  <h1>Tiempo largo sin verte</h1>
  <p>¿Qué has venido a buscar?</p>
  <router-link
    :key="key"
    :to="{ name: option.path }"
    v-for="(option, key) in options"
    >{{ option.text }}</router-link
  >
  <button v-on:click="changeLang()">en</button>
</template>

<script>
import usei18n from "@/hooks/usei18n";
export default {
  name: "Home",
  components: {},
  setup() {
    const { t_, i18n } = usei18n();

    const options = [
      { text: t_("people"), path: "People" },
      { text: t_("starships"), path: "Starships" },
      { text: t_("planets"), path: "Planets" },
    ];

    const changeLang = () => {
      i18n.changeLanguage("en");
    };

    return { options, changeLang };
  },
};
</script>

<style scoped></style>

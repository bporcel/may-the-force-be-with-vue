import { ref, provide, inject } from 'vue';

const createI18n = config => ({
  locale: ref(config.locale),
  messages: config.messages,
  t_(key) {
    return this.messages[this.locale.value][key];
  },
});

const i18nSymbol = Symbol();

const provideI18n = i18nConfig => {
  const i18n = createI18n(i18nConfig);
  provide(i18nSymbol, i18n);
};

const useI18n = () => {
  const i18n = inject(i18nSymbol);
  if (!i18n) {
    throw new Error('No i18n provided');
  }
  return i18n;
};

export { useI18n, provideI18n };

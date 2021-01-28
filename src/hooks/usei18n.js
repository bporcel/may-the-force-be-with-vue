import { ref } from 'vue';
import es from '@/i18n/es';
import en from '@/i18n/en';

const usei18n = () => {
  const languages = {
    es: es,
    en: en,
  };

  const changeLang = lang => {
    i18n.currentLanguage = languages[lang];
  };

  const i18n = {
    currentLanguage: ref(languages['en']),
    changeLanguage: changeLang,
  };

  const t_ = key => {
    return i18n.currentLanguage.value[key];
  };

  return { t_, i18n };
  //   return { t_, i18n, i18n };
};

export default usei18n;

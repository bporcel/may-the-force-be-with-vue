import { reactive } from 'vue';
import en from '@/i18n/en';

const usei18n = () => {
  const languages = {
    en: en,
  };

  const changeLang = lang => {
    i18n.currentLanguage = languages[lang];
  };

  const i18n = reactive({
    currentLanguage: languages['en'],
    changeLanguage: changeLang,
  });

  const t_ = key => {
    return i18n.currentLanguage[key];
  };

  return { t_, i18n };
};

export default usei18n;

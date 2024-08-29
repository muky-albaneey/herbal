import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from './locales/en/en.json';
import frLang from './locales/fr/fr.json';
import useAuthStore from "../store/lang.store";

const getInitialLanguage = () => {
  const { lang_token } = useAuthStore.getState(); // Use Zustand's `getState` method
  return lang_token || 'en'; // Default to 'en' if no language is set
};

const resources = {
  en: {
    translation: enLang
  },
  fr: {
    translation: frLang
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(), // Set the initial language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

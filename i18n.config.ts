import pt from "./i18n/pt.json";
import en from "./i18n/en.json";
import es from "./i18n/es.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  messages: {
    pt,
    en,
    es
  }
}))
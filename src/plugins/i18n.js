import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = {
    vn: require("@/locales/vn.json"),
    en: require("@/locales/en.json"),
  };
  return locales;
}

export default new VueI18n({
  locale: "vn",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});

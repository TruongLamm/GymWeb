import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#e5eaf5",
        secondary: "#a0d2eb",
        buttons: "#8458B3",
      },
      dark: {
        primary: "#494D5F",
        secondary: "#FFFFFF",
        buttons: "#8458B3",
      },
    },
  },
});

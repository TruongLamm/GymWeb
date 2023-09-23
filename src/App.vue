<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import layoutBlank from "./components/layouts/Blank.vue";
import layoutHome from "./components/layouts/Home.vue";

export default {
  name: "App",
  components: {
    layoutBlank,
    layoutHome,
  },

  data: () => ({
    layout: "layout-blank",
    // isAdmin: false,
    // layoutadmin: "layout-admin",
  }),
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  watch: {
    $route() {
      if (this.$route.meta.layout !== "home") {
        this.layout = "layout-blank";
      } else {
        this.layout = "layout-blank";
      }
    },
  },
};
</script>

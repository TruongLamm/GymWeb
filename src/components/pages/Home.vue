<template>
  <v-cart width="100vw" min-height="100vh" height="wrap-content">
    <Banner></Banner>
    <AboutUs></AboutUs>
    <Benefits></Benefits>
  </v-cart>
</template>

<script>
import AboutUs from "../Atoms/AboutUs.vue";
import Benefits from "../Organisms/Benefits.vue";
import Banner from "../Organisms/Banner.vue";
export default {
  components: {
    Banner,
    AboutUs,
    Benefits,
  },
};
</script>

<style></style>

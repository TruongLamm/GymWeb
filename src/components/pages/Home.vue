<template>
  <v-cart width="100vw" min-height="100vh" height="wrap-content">
    <Banner></Banner>
    <Benefits></Benefits>
  </v-cart>
</template>

<script>
import Benefits from "../Organisms/Benefits.vue";
import Banner from "../Organisms/Banner.vue";
export default {
  components: {
    Banner,
    Benefits,
  },
};
</script>

<style></style>

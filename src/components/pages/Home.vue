<template>
  <v-cart width="100vw" min-height="100vh" height="wrap-content">
    <Banner></Banner>
    <Benefits></Benefits>
    <Instructors></Instructors>
  </v-cart>
</template>

<script>
import Benefits from "../Organisms/Benefits.vue";
import Banner from "../Organisms/Banner.vue";
import Instructors from "../Organisms/Instructors.vue";
export default {
  components: {
    Banner,
    Benefits,
    Instructors,
  },
};
</script>

<style></style>

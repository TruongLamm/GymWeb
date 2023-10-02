<template>
  <v-cart width="100vw" min-height="100vh" height="wrap-content">
    <Banner></Banner>
    <Benefits></Benefits>
    <Classes></Classes>
  </v-cart>
</template>

<script>
import Benefits from "../Organisms/Benefits.vue";
import Banner from "../Organisms/Banner.vue";
import Classes from "../Organisms/Classes.vue";
export default {
  components: {
    Banner,
    Benefits,
    Classes,
  },
};
</script>

<style scoped lang="scss"></style>

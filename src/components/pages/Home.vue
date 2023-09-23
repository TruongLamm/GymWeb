<template>
  <v-card>
    <AboutUs></AboutUs>
    <Benefits></Benefits>
  </v-card>
</template>

<script>
import AboutUs from "../Atoms/AboutUs.vue";
import Benefits from "../Organisms/Benefits.vue";
export default {
  component: {
    AboutUs,
    Benefits,
  },
  components: { AboutUs, Benefits },
};
</script>
<style></style>

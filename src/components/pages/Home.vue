<template>
  <v-cart width="100vw" min-height="100vh" height="wrap-content">
    <Banner></Banner>
    <Benefits></Benefits>
    <Classes></Classes>
    <Instructors></Instructors>
    <Feedback></Feedback>
    <BMI></BMI>
  </v-cart>
</template>

<script>
import Benefits from "../Organisms/Benefits.vue";
import Banner from "../Organisms/Banner.vue";
import Classes from "../Organisms/Classes.vue";
import Instructors from "../Organisms/Instructors.vue";
import Feedback from "../Organisms/Feedback.vue";
import BMI from "../Organisms/BMI.vue";
export default {
  components: {
    Banner,
    Benefits,
    Classes,
    Instructors,
    Feedback,
    BMI,
  },
};
</script>

<style scoped lang="scss"></style>

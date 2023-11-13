<template>
  <v-cart width="100vw" min-height="100vh" height="wrap-content">
    <Banner class="banner_custom"></Banner>
    <Login></Login>
  </v-cart>
</template>

<script>
import Banner from "../Organisms/Banner.vue";
import Login from "../Organisms/Login.vue";
export default {
  components: {
    Banner,
    Login,
  },
};
</script>

<style scoped lang="scss">
.banner_custom {
}
</style>

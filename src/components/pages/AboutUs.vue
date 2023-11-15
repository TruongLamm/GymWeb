<!-- eslint-disable -->
<template>
    <v-cart width="100vw" min-height="100vh" height="wrap-content">
        <Banner></Banner>
        <AUDetails></AUDetails>
    </v-cart>
</template>
<!-- eslint-disable -->
<script>
    import Banner from "../Organisms/Banner.vue";
    import AUDetails from "../Organisms/AUDetails.vue";
    export default {
    components: {
        Banner,
        AUDetails,
    },
    };
</script>

<style scoped lang="scss">
</style>
  
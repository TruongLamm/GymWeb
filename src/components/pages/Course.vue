<!-- eslint-disable -->
<template>
    <v-cart width="100vw" min-height="100vh" height="wrap-content">
        <Banner></Banner>
        <CourseInfo></CourseInfo>
        <Feedback></Feedback>
    </v-cart>
</template>
<!-- eslint-disable -->
<script>
    import Banner from "../Organisms/Banner.vue";
    import CourseInfo from "../Organisms/CourseInfo.vue";
    import Feedback from "../Organisms/Feedback.vue";
    export default {
    components: {
        Banner,
        CourseInfo,
        Feedback,
    },
    };
</script>

<style scoped lang="scss">
</style>
  
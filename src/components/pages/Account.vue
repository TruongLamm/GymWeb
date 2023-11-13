<!-- eslint-disable -->
<template>
    <v-cart width="100vw" min-height="100vh" height="wrap-content">
        <Banner></Banner>
        <AccountForm></AccountForm>
    </v-cart>
</template>
<!-- eslint-disable -->
<script>
    import Banner from "../Organisms/Banner.vue";
    import AccountForm from "../Organisms/AccountForm.vue";
    export default {
    components: {
        Banner,
        AccountForm,
    },
    };
</script>

<style scoped lang="scss">
</style>
  
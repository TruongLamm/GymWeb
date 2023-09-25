<template>
  <div class="banner">
    <img
      class="banner-img"
      src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
      alt=""
    />
    <div class="banner-ele">
      <h1 class="banner-text">
        Welcome to <span style="color: #ff4601">Goodlyfe</span> Gyms
      </h1>
      <AboutUs></AboutUs>
    </div>
  </div>
</template>
<script>
import AboutUs from "../Atoms/AboutUs.vue";
export default {
  components: {
    AboutUs,
  },
};
</script>
<style scoped lang="scss">
.banner {
  position: relative;
  .banner-img {
    width: 100%;
    max-height: 691px;
    object-fit: cover;
    object-position: 15% 18%;
  }
  .banner-ele {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .banner-text {
      font-family: "Poppins", sans-serif;
      font-size: 70px;
      font-weight: 700;
      line-height: 77px;
      letter-spacing: 0px;
      max-width: 600px;
      text-align: center;
      color: white;
      padding-bottom: 30px;
    }
  }
}
</style>

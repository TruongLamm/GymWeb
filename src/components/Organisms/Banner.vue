<template>
  <div class="banner">
    <img
      class="banner-img"
      src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
      alt=""
    />
    <h1 class="banner-text">
      Welcome to <span style="color: #ff4601">Goodlyfe</span> Gyms
    </h1>
  </div>
</template>
<script>
export default {};
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
  .banner-text {
    font-family: "Poppins", sans-serif;
    font-size: 70px;
    font-weight: 700;
    line-height: 77px;
    letter-spacing: 0px;
    max-width: 600px;
    text-align: center;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: white;
  }
}
</style>

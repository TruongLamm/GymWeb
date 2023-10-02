<!-- eslint-disable -->
<template>
  <section class="page-style classes-style">
    <span class="classes-title">Classes</span>
    <div class="classes-card">
      <ClassesCard
        v-for="product in products"
        :key="product.title"
        :product = "product"
      ></ClassesCard>
    </div>
    <v-btn
      class="classes-btn-see"
      >
      See all
    </v-btn>
  </section>
</template>
<!-- eslint-disable -->
<script>
import ClassesCard from "../Molecules/ClassesCard.vue";
export default {
  components: {
    ClassesCard
  },
  data: () => {
    return {
      products:[
        {
          src: require("../../assets/img/card-background-img.png"),
          courseName: "Yoga",
          quantity: "30",
          title: "Strength & Sweat",
          duration: "2",
          trainer: "Esther Howard",
          slot: "30",
          difficulty: "Beginner"
        },
        {
          src: require("../../assets/img/card-background-img.png"),
          courseName: "Yoga",
          quantity: "30",
          title: "Strength & Sweat",
          duration: "2",
          trainer: "Esther Howard",
          slot: "30",
          difficulty: "Beginner"
        },
        {
          src: require("../../assets/img/card-background-img.png"),
          courseName: "Yoga",
          quantity: "30",
          title: "Strength & Sweat",
          duration: "2",
          trainer: "Esther Howard",
          slot: "30",
          difficulty: "Beginner"
        },
      ]
    }
  },
};
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.page-style{
  padding: 0 125px;
}
.classes-style{
  background-color: #2E2E2E;
  font-family: "Poppins", sans-serif;
  padding-bottom: 36px;
}
.classes-card{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
}
.classes-title{
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 170.9%; /* 82.032px */
  letter-spacing: 0.96px;
  display: flex;
  justify-content: center;
  color: white;
  padding: 40px 0 35px;
}
.classes-btn-see{
    background-color: #FF4601 !important;
    color: white;
    border-radius: 38.5px;
    border: 1px solid #FF4601;
    padding: 7px 20px; /* Adjust padding as needed */
    width: 192px;
    height: 45px !important;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-transform: inherit;
    display: block;
    margin: 0 auto;
}
</style>
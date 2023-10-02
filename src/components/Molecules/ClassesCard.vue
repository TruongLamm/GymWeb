<!-- eslint-disable -->
<template>
    <v-card
      :loading="loading"
      class="card-style"
      max-width="374"
      color="#2E2E2E"
      flat
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"   
          indeterminate
        ></v-progress-linear>
      </template>
      <div class="card-header">
          <img class="img-background" src="../../assets/img/card-background-img.png" alt="card-background-img.png">
          <v-img
            class="img-card" 
            height="250"
            src="../../assets/img/img-card-1.png" alt="img-card-1.png"
          ></v-img>
      </div>
      <div class="card-status">
        <span class="status-icon status-style">{{ product.courseName }}</span>
        <span class="status-icon-user">{{ product.quantity }} <span>Students</span> </span>
      </div>
  
      <v-card-title >
        <span>{{ product.title }}</span>
        <span class="title-duration-icon title-duration-style">{{ product.duration }} <span>H</span> </span>
      </v-card-title>
      
      <v-card-text>
        <span class="text-trainer">Trainer: <span>{{ product.trainer }}</span></span>
        <li>
          No. of Classes: <span>{{ product.slot }}</span>
        </li>
        <li>
          Difficulty: <span>{{ product.difficulty }}</span>
        </li>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
        class="card-btn-learn"
        >
        Learn more
        </v-btn>
        <v-btn
        class="card-btn-trail"
        >
        Start a free trail
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<!-- eslint-disable -->
<script>
import AboutUs from "../Atoms/AboutUs.vue";
export default {
  name: 'product',
  props: ['product'],
  components: {
    AboutUs
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped lang="scss">
.card-style{
  color: white;
  .card-header{
      position: relative;
      display: flex;
      justify-content: center;
      .img-background{
          position: absolute;
          bottom: -5px;
      }
      .img-card{
          max-width: 364px;
      }
  }
  .card-status{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 170.9%; /* 27.344px */
    letter-spacing: 0.32px;
    padding: 5px 0;
    margin: 15px 0 5px;
    .status-icon:before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #FF4601;
      border-radius: 50px;
      margin-right: 9px;
    }
    .status-style{
      display: flex;
      align-items: center; 
    }
    .status-icon-user:before {
      content: "";
      display: block;
      background: url("../../assets/icon/solar_users.png") no-repeat;
      width: 25px;
      height: 25px;
      float: left;
      margin-right: 10px;
    }
  }
  .v-card__title{
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 170.9%; /* 41.016px */
    letter-spacing: 0.48px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-duration-icon:before {
      content: "";
      display: block;
      background: url("../../assets/icon/ion_timer-outline.png") no-repeat;
      width: 25px;
      height: 25px;
      float: left;
      margin-right: 10px;
    }
    .title-duration-style{
      display: flex;
      align-items: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 170.9%; /* 27.344px */
      letter-spacing: 0.32px;
    }
  }
  .v-card__text{
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 170.9%; /* 27.344px */
    letter-spacing: 0.32px;
    padding: 0 0 20px;
    .text-trainer{
      display: block;
      margin-bottom: 10px;
    }
  }
  .v-card__actions{
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  .card-btn-learn{
    background-color: transparent;
    color: #FF4601;
    border-radius: 38.5px;
    border: 1px solid #FF4601;
    padding: 10px 20px; /* Adjust padding as needed */
    width: 145px;
    height: 45px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    text-transform: initial;
  }
  .card-btn-trail{
    background-color: transparent;
    color: #FFFFFF;
    border-radius: 38.5px;
    border: 1px solid #FFFFFF;
    padding: 10px 20px; /* Adjust padding as needed */
    width: 195px;
    height: 45px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    text-transform: initial;
  }
}
</style>
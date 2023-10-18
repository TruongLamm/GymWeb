<template>
  <v-card class="feedback-card">
    <div class="feedback-text">
      {{ feedback.text }}
    </div>
    <div class="rating">
      <div v-for="i in feedback.starRating" :key="i">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          class="star-icon"
        >
          <path
            d="M27.5 12.3033L18.5125 11.5283L15 3.2533L11.4875 11.5408L2.5 12.3033L9.325 18.2158L7.275 27.0033L15 22.3408L22.725 27.0033L20.6875 18.2158L27.5 12.3033ZM15 20.0033L10.3 22.8408L11.55 17.4908L7.4 13.8908L12.875 13.4158L15 8.3783L17.1375 13.4283L22.6125 13.9033L18.4625 17.5033L19.7125 22.8533L15 20.0033Z"
            fill="url(#paint0_linear_1_690)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_690"
              x1="0.918675"
              y1="3.2533"
              x2="28.4789"
              y2="3.2533"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF4300" />
              <stop offset="1" stop-color="#FF6400" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div class="customer-info">
      <div class="customer-info-container">
        <div class="profile-picture">
          <img :src="feedback.profilePicture" alt="customer-pic" />
        </div>
        <span class="customer-name">{{ feedback.customerName }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FeedbackCard",
  props: {
    feedback: {
      type: Object,
      required: true,
    },
    starRating: {
      type: Number,
      required: true,
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.feedback-card {
  background-color: #050505cc;
  width: 360px;
  height: 444px;
  flex-shrink: 0;
  padding-top: 5%;
  padding-left: 3%;
}
.feedback-text {
  color: #fff;
  width: 275px;
  text-align: justify;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-transform: capitalize;
}
.customer-info {
  margin-top: 20%;
}
.customer-info-container {
  display: flex;
  align-items: center;
}
.customer-name {
  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 10px;
}
.rating {
  display: flex;
  align-items: center;
}
.star-icon {
  margin: 0 5px;
}
</style>

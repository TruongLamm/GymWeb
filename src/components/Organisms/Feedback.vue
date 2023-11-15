<template>
  <div class="feedback-page">
    <h2 class="feedback-title">
      <span style="color: #ff4601">Client's Feedback</span>
    </h2>
    <v-carousel class="feedback-carousel" @change="onCarouselSlideChange">
      <v-carousel-item
        v-for="(feedbackGroup, index) in feedbackGroups"
        :key="index"
      >
        <div class="feedback-group">
          <FeedbackCard
            v-for="(feedback, feedbackIndex) in feedbackGroup"
            :key="feedbackIndex"
            :feedback="feedback"
            :starRating="
              feedbackList[currentSlide * 3 + feedbackIndex].starRating
            "
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import FeedbackCard from "../Molecules/FeedbackCard.vue";
export default {
  components: {
    FeedbackCard,
  },
  methods: {
    onCarouselSlideChange(index) {
      this.currentSlide = index;
    },
  },
  computed: {
    feedbackGroups() {
      const groups = [];
      for (let i = 0; i < this.feedbackList.length; i += 3) {
        groups.push(this.feedbackList.slice(i, i + 3));
      }
      return groups;
    },
  },
  data: () => ({
    currentSlide: 0,
    justify: ["start", "center", "end", "space-around", "space-between"],
    feedbackList: [
      {
        profilePicture: require("../../assets/img/henry.png"),
        customerName: "Courtney Henry",
        text: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
        starRating: 5,
      },
      {
        profilePicture: require("../../assets/img/simmon.png"),
        customerName: "Brooklyn Simmons",
        text: "This a great historic site to visit. I rented a little cart and the driver was a really good friendl",
        starRating: 3,
      },
      {
        profilePicture: require("../../assets/img/cooper.png"),
        customerName: "Jane Cooper",
        text: "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
        starRating: 1,
      },
      {
        profilePicture: require("../../assets/img/cooper.png"),
        customerName: "Haha Cooper",
        text: "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
        starRating: 4,
      },
      {
        profilePicture: require("../../assets/img/cooper.png"),
        customerName: "Ohno Cooper",
        text: "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
        starRating: 4,
      },
      {
        profilePicture: require("../../assets/img/cooper.png"),
        customerName: "Ohno Cooper",
        text: "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
        starRating: 4,
      },
      {
        profilePicture: require("../../assets/img/cooper.png"),
        customerName: "Ohno Cooper",
        text: "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
        starRating: 4,
      },
      {
        profilePicture: require("../../assets/img/cooper.png"),
        customerName: "Ohno Cooper",
        text: "I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful",
        starRating: 4,
      },
    ],
  }),
};
</script>
d
<style lang="scss">
.feedback-title {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: 0.02em;
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 10px;
}
.feedback-group {
  display: flex;
  justify-content: space-evenly;
}
.v-carousel__controls {
  background: none;
  padding-top: 15px;
  margin-top: 5px;
}
.feedback-page {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%),
    rgba(255, 70, 1, 0.3);
  min-height: 700px;
}
</style>

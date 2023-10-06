<template>
  <div class="instructors">
    <div class="instructors-ele">
      <h2 class="instructors-text">
        <span style="color: #ff4601">Instructors</span>
      </h2>
      <div class="trainer">
        <v-row class="trainer_img">
          <v-col>
            <v-card class="card" outlined tile>
              <img
                class="trainer_1"
                src="../../assets/img/jacob.png"
                alt="Jacob Jones"
              />
              <h1 style="text-align: center">Jacob Jones</h1>
              <h3 style="text-align: center">Gym trainer</h3>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="card" outlined tile>
              <img
                class="trainer_2"
                src="../../assets/img/leslie.png"
                alt="Leslie Alexander"
              />
              <h1 style="text-align: center">Leslie Alexander</h1>
              <h3 style="text-align: center">Gym trainer</h3>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="card" outlined tile>
              <img
                class="trainer_3"
                src="../../assets/img/cameron.png"
                alt="Cameron Williamson"
              />
              <h1 style="text-align: center">Cameron Williamson</h1>
              <h3 style="text-align: center">Gym trainer</h3>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="card" outlined tile>
              <img
                class="trainer_4"
                src="../../assets/img/jane.png"
                alt="Jane Cooper"
              />
              <h1 style="text-align: center">Jane Cooper</h1>
              <h3 style="text-align: center">Gym trainer</h3>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    justify: ["start", "center", "end", "space-around", "space-between"],
  }),
};
</script>

<style scoped lang="scss">
.instructors-text {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: 0.02em;
  text-align: center;
}
.trainer {
  display: flex;
  justify-content: space-between;
  padding: 5%;
}
.card {
  border: none;
}
img {
  width: 100%;
}
h1 {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 41px;
  letter-spacing: 0.02em;
  color: #ff4601;
}
h3 {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #ff4601;
}
</style>

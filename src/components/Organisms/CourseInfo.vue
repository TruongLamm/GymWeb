<template>
  <div class="cinfo">
    <div class="cinfo-intro">
      <v-row>
        <v-col cols="8" sm="6" md="6">
          <v-card class="cinfo-col" outlined tile>
            <div class="cinfo-ele">
              <h2 class="cinfo-text">
                Become a Group Exercise Instructor with Goodlyfe
              </h2>
              <p class="cinfo-pa">
                For fitness professionals and personal trainers, instructing
                group exercise classes can be a tremendously lucrative endeavour
                due to the large amount of clients you can enquire. These
                sessions can also aid with client retention, as it’s proven that
                group training actually results in more clients coming back time
                and time again. <br /><br />

                Goodlyfe's Group Fitness Instructor CPD will teach how to pace
                these training sessions in order to get results that meet your
                demographics' different goals.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <div class="cinfo-img">
            <img
              class="cinfo-img-1"
              src="../../assets/img/female_ropes.png"
              alt="female_ropes"
            />
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="cinfo-card">
      <v-row class="cinfo-card-table">
        <v-col
          v-for="(cinfo, index) in cinfos.slice(0, 3)"
          :key="index"
          cols="4"
        >
          <CinfoCard :cinfo="cinfo"></CinfoCard>
        </v-col>
        <v-col
          v-for="(cinfo, index) in cinfos.slice(3, 6)"
          :key="index"
          cols="4"
        >
          <CinfoCard :cinfo="cinfo"></CinfoCard>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import CinfoCard from "../Molecules/CinfoCard.vue";
export default {
  components: {
    CinfoCard,
  },
  data: () => ({
    cinfos: [
      {
        icon: require("../../assets/img/icon_User.png"),
        title: "Trainer",
        text: "Esther Howard",
      },
      {
        icon: require("../../assets/img/icon_Pin.png"),
        title: "Location",
        text: "ABC Center",
      },
      {
        icon: require("../../assets/img/icon_Thermometer.png"),
        title: "Status",
        text: "Opening",
      },
      {
        icon: require("../../assets/img/icon_Calendar.png"),
        title: "Course Length",
        text: "1 Day",
      },
      {
        icon: require("../../assets/img/icon_Users.png"),
        title: "Capacity",
        text: "10",
      },
      {
        icon: require("../../assets/img/icon_Television.png"),
        title: "Course Type",
        text: "CPD Short Course",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.cinfo-intro {
  padding: 5%;
}
.cinfo-col {
  border: none;
}
.cinfo-text {
  color: #1e1e1e;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.cinfo-pa {
  width: 599px;
  color: #424242;
  text-align: justify;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
}
.cinfo-img-1 {
  width: 510px;
  height: 589px;
  flex-shrink: 0;
}
.cinfo-card {
  padding: 8%;
}
</style>

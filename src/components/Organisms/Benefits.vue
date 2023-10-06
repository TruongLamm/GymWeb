<template>
  <div class="benefits">
    <v-row>
      <v-col cols="8" sm="6" md="6">
        <v-card class="col-benefits" outlined tile>
          <div class="benefits-ele">
            <h2 class="benefits-text">
              The <span style="color: #ff4601">Benefits</span> You Get When You
              Join Us
            </h2>
            <p class="p-benefits">
              For some people, putting in the hard work that it takes
            </p>
            <div class="free-cons">
              <v-row class="row" v-for="i in 3" :key="i">
                <v-col class="align-start" v-for="j in 2" :key="j" sm="4">
                  <v-card class="card" outlined tile>
                    Free consultation
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <AboutUs class="btn-benefits"></AboutUs>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <div class="benefits-img">
          <img
            class="benefits-img-1"
            src="../../assets/img/male_lifting_weights.png"
            alt="male_lifting_weights"
          />
          <img
            class="benefits-img-2"
            src="../../assets/img/female_doing_situps.png"
            alt="male_lifting_weights"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AboutUs from "../Atoms/AboutUs.vue";
export default {
  components: {
    AboutUs,
  },
  data: () => ({
    justify: ["start", "center", "end", "space-around", "space-between"],
  }),
};
</script>

<style scoped lang="scss">
.card {
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 15px;
}

.benefits-text {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 40px;
}

.p-benefits {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
}
.benefits-img {
  position: relative;
}
.benefits-img-1 {
  position: absolute;
  width: 397.33px;
  height: 399px;
}

.benefits-img-2 {
  position: absolute;
  width: 275.95px;
  height: 359px;
  right: 50px;
  top: 150px;
}
.benefits {
  padding: 10%;
}

.col-benefits {
  border: none;
}
.btn-benefits {
  background-color: white;
  color: #ff4601;
}
.free-cons {
  padding-bottom: 10%;
}
</style>

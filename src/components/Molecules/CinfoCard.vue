<template>
  <v-card class="cinfo-card-details">
    <div class="cinfo-content">
      <div class="cinfo-icon">
        <img :src="cinfo.icon" alt="cinfo-icon" />
      </div>
      <div class="cinfo-text-wrapper">
        <div class="cinfo-title">{{ cinfo.title }}</div>
        <div class="cinfo-detail">{{ cinfo.text }}</div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CinfoCard",
  props: {
    cinfo: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.cinfo-card-details {
  width: 370px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #979797;
  background: rgba(217, 217, 217, 0);
}

.cinfo-content {
  display: flex;
  align-items: center;
  padding: 16px;
}

.cinfo-icon {
  width: 30px;
  height: 53.332px;
  flex-shrink: 0;
  margin-right: 16px;
}

.cinfo-text-wrapper {
  display: flex;
  flex-direction: column;
}

.cinfo-title {
  color: #424242;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 37px;
  padding-left: 20px;
}

.cinfo-detail {
  color: #000;
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 170.9%;
  letter-spacing: 0.48px;
  padding-left: 20px;
}
</style>

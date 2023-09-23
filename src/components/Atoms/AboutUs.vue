<template>
  <div>
    <button class="btn-AboutUS" @click="handleButtonClick">About Us</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick() {
      alert("Button clicked!");
    },
  },
};
</script>

<style scoped lang="scss">
.btn-AboutUS {
  background-color: #ff4601;
  color: white;
  border: 2px solid #ff4601;
  border-radius: 50px;
  padding: 10px 20px; /* Adjust padding as needed */
  cursor: pointer;
  font-size: 24px;
  width: 237px;
  height: 68px;
  top: 522px;
  left: 602px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 300;
}
</style>

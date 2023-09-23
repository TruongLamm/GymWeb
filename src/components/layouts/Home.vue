<template>
  <v-card
    width="100vw"
    class="d-flex flex-column align-center justify-space-between"
    style="min-height: 100vh; position: relative"
    tile
  >
    <v-container max-width="1200px" class="ma-0">
      <slot></slot>
    </v-container>
  </v-card>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>

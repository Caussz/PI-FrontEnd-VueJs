<script setup>
import FormLogin from "../FormLogin.vue";
</script>

<template>
  <div class="loading">
    <v-progress-circular
      :model-value="value"
      :rotate="360"
      :size="100"
      :width="15"
      color="#99B898"
    >
      <template v-slot:default> {{ value }} % </template>
    </v-progress-circular>
  </div>
  <FormLogin />
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 11;
}
</style>

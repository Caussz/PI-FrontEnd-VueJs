<script setup>
import { FormLogin, LoadingComponent, ZyraImagesComponent } from "@/components";
</script>

<template>
  <LoadingComponent />
  <main>
    <ZyraImagesComponent />
    <div class="form-container">
      <FormLogin />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.form-container {
  width: 30%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

@media (max-width: 956px) {
  .form-container {
    width: 40%;
  }
}
</style>

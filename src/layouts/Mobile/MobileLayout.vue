<script setup>
import { DefaultHeader } from "@/components";
</script>

<template>
  <DefaultHeader />
  <main id="router-container">
    <RouterView />
  </main>
</template>
<style scoped>
#router-container {
  padding-top: 15vh;
}
</style>

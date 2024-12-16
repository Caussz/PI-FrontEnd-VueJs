<script setup>
import { DefaultHeader } from "@/components";
</script>

<template>
  <DefaultHeader />
  <main>
    <RouterView />
  </main>
</template>
<style scoped>
main {
  padding-top: 17vh;
}
</style>

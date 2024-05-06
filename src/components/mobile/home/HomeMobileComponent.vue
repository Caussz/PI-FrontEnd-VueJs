<script setup>
import { SubjectsComponent, Header, LastUpdates } from '../../index';
</script>

<template>
  <Header />
  <main>
    <LastUpdates />
    <SubjectsComponent />
  </main>
</template>

<style scoped>
main {
  padding: 0 7%;
}
</style>
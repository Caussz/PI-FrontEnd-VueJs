<script setup>
import { SubjectsComponent, Header, LastUpdates, Search } from '../../index';
</script>

<template>
  <Header />
  <main>
    <Search />
    <LastUpdates />
    <SubjectsComponent />
  </main>
</template>

<style scoped>
main {
  padding: 0 7%;
}
</style>
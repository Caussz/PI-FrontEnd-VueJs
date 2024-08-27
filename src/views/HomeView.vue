<script setup>
import { CurricularComponent, LastUpdates, SearchBar } from '@/components';
</script>

<template>
  <main>
    <SearchBar />
    <LastUpdates />
    <CurricularComponent />
  </main>
</template>

<style scoped>
main {
  padding: 0 7%;
}
</style>
<script setup>
import { DefaultAside } from "@/components";
</script>

<template>
  <div class="layout-large">
    <aside>
      <DefaultAside />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style scoped>
.layout-large {
  display: grid;
  grid-template-columns: auto auto;
  width: 100vw;
  height: 100vh;
  gap: 15vw;
}
</style>

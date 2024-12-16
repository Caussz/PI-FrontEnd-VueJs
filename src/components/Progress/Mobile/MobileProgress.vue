<script setup>
import { Tools } from "@/components/icons";
</script>
<template>
  <main>
    <div>
      <Tools size="50" />
      <h1>Sistema em manutenção</h1>
    </div>
  </main>
</template>
<style scoped>

div {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 24vh 0;

  span {
    color: #99b898;
  }
}

h1 {
  color: #99b898;
}
</style>

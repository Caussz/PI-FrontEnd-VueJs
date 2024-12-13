<script setup>
import { Tools, BackButton } from '@/components/icons'
</script>
<template>
  <main>
    <BackButton/>
    <div>
      <Tools size="50" />
      <h1>Sistema em manutenção</h1>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

div {
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    color: #99b898;
  }
}

h1 {
  color: #99b898;
}
</style>

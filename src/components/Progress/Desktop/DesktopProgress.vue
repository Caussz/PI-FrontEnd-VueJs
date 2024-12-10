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
  flex-direction: column;
}

div {
  margin: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #99b898;
  }
}

h1 {
  color: #99b898;
}

a {
  border: 1px #505050 solid;
  width: 2rem;
  height: 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 4%;
  top: 4%;

  & span {
    color: white;
    display: flex;
  }
}
</style>

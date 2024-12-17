<script setup>
import { Tools } from "@/components/icons";
</script>
<template>
  <div>
    <Tools size="50" />
    <h1>Sistema em manutenção</h1>
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20vw;
  height: auto;

  span {
    color: var(--light-green);
  }
}

h1 {
  color: var(--light-green);
}

a {
  border: 1px var(--lightest-grey) solid;
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
    color: var(--white);
    display: flex;
  }
}
</style>

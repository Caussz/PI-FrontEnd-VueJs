<script setup>
import { ChevronLeft } from "@/components/icons";
import { RouterLink } from "vue-router";
</script>
<template>
  <RouterLink to="/">
    <ChevronLeft />
  </RouterLink>
</template>
<style scoped>
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

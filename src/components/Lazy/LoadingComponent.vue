<script setup>
import { useUserStore } from "@/stores";

const userStore = useUserStore();
</script>

<template>
  <div class="loading" v-if="userStore.loading">
    <v-progress-circular
      color="primary"
      indeterminate
      :size="80"
      :width="4"
    ></v-progress-circular>
  </div>
</template>

<style scoped>
main {
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #1E1E1E;
    justify-content: center;
    align-items: center;
    animation: loadingAnim 1s backwards ease-in-out;
    right: 100%;
}

@keyframes loadingAnim{
    0%,25%{
        right: 0;
    }
    100%{
        right: 100%;
    }
}

span {
    color: var(--light-green);
    rotate:270deg;
    font-family: "Kodchasan", sans-serif;
    font-size: 6rem;
    font-weight: 400;
}

span::before, span::after{
    content: "";
    display: block;
    height: 0;
    width: 0;
}

span::before{
    margin-top: -2rem;
}
</style>

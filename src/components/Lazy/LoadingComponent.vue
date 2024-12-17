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
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 11;
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

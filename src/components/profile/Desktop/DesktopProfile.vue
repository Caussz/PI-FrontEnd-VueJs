<script setup>
import { onMounted } from "vue";

import { useUserStore } from "@/stores";

const userStore = useUserStore();

onMounted(() => (userStore.user));

</script>
<template>
  <main>
    <div class="user-image">
      <div class="image">
        <img
          :src="userStore.user.photo"
          alt=""
        />
        <p class="name">{{ userStore.user.name }}</p>
        <p class="id">{{ userStore.user.matricula }}</p>
      </div>
    </div>
    <div class="container">
      <div class="info">
        <p>Nome</p>
        <div>{{ userStore.user.name }}</div>
      </div>
      <div class="info">
        <p>Email</p>
        <div>olivercalenbard2info1@gmail.com</div>
      </div>
      <div class="info">
        <p>Matrícula</p>
        <div>2022305863</div>
      </div>
      <div class="info">
        <p>Curso</p>
        <div>Informártica para internet</div>
      </div>
      <div class="info">
        <p>Status</p>
        <div>Ativo</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-repeat: round;
  background-size: cover;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10vw;
  margin-left: -25vw;
}

.container {
  display: grid;
  grid-template-columns: 29vw 27vw;
  margin: 2vw 0;
}

.info div {
  background-color: var(--dark-grey);
  border-radius: 7px;
  width: 22vw;
  color: var(--white);
  padding: 0.7vw 1.2vw;
  border: 1px var(--lightest-grey) solid;
  font-weight: 400;
  margin: 0.2vw;
}

input:focus {
  outline: none;
}

.info {
  margin: 1vw;
  color: var(--white);
  font-size: 0.8em;
  font-weight: 600;
}

.user-image {
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 20vw;

  & .name {
    font-weight: 600;
  }

  & .image {
    & img {
      width: 8vw;
    }
  }

  & .id {
    font-size: 0.8em;
  }
}
</style>

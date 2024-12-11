<script setup>
import { BackButton } from "@/components/icons";
import { onMounted } from "vue";

import { useUserStore } from "@/stores";

const userStore = useUserStore();

onMounted(() => console.log(userStore.user));

</script>
<template>
  <main>
    <BackButton />
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
  background-image: url(https://i.ibb.co/dMvLSTz/Splash-screen-design-2.png);
  background-repeat: round;
  background-size: cover;
  background-color: #1e1e1e;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 29vw 27vw;
  margin: 2vw 0;
}

.info div {
  background-color: #282828;
  border-radius: 7px;
  width: 22vw;
  color: white;
  padding: 0.7vw 1.2vw;
  border: 1px #505050 solid;
  font-weight: 400;
  margin: 0.2vw;
}

input:focus {
  outline: none;
}

.info {
  margin: 1vw;
  color: white;
  font-size: 0.8em;
  font-weight: 600;
}

.user-image {
  color: white;
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

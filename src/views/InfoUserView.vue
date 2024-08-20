<script setup>
import {
  ChevronLeft,
  CameraOutline
} from '@/components/icons'
</script>
<template>
  <main>
    <div class="top">
      <div class="back-button">
        <ChevronLeft class="icon" />
      </div>
      <div class="user-image">
        <div class="image">
          <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" alt="" />
          <div class="camera">
            <CameraOutline class="icon" size="15px" />
          </div>
        </div>
        <p class="name">Oliver Calenbard</p>
        <p class="id">2022305863</p>
      </div>
    </div>
    <div class="container">
      <div class="info">
        <p>Nome</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Email</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Matrícula</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Curso</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Nível</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Status</p>
        <input type="text" />
      </div>
      <div class="info">
        <p>Entrada</p>
        <input type="text" />
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
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
  grid-template-columns: 27vw 25vw;
  margin: 2vw 0;
}

input {
  background-color: #3a3a3ab5;
  border-radius: 7px;
  width: 20vw;
  color: white;
  padding: 0.7vw 1.2vw;
  border: 1px #505050 solid;
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

  & .name {
    font-weight: 600;
  }

  & .image {
    & img {
      width: 7vw;
    }
  }

  & .id {
    font-size: 0.8em;
  }
}

.top {
  width: 100vw;
}

.back-button {
  width: 2vw;
  height: 2vw;
  margin-left: 2vw;
  border-radius: 10vw;
  border: #505050 solid 1px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3vw;
}

.icon {
  margin: 0.3vw 0.3vw 0 0.2vw; /* remover  */
}

.camera {
  background-color: #181818;
  border-radius: 2vw;
  border: #505050 solid 1px;
  width: 1.5vw;
  height: 1.5vw;
  position: relative;
  left: 4vw;
  bottom: 2vw
}
</style>

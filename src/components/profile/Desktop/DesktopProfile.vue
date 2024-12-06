<script setup>
import { ChevronLeft, CameraOutline } from "@/components/icons";
</script>
<template>
  <main>
    <CheckCircle />
    <div class="top">
      <div class="back-button">
        <ChevronLeft class="icon-arrow" />
      </div>
      <div class="user-image">
        <div class="image">
          <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" alt="" />
          <div class="camera">
            <CameraOutline class="icon-cam" size="15" />
          </div>
        </div>
        <p class="name">Oliver Calenbard</p>
        <p class="id">2022305863</p>
      </div>
    </div>
    <div class="container">
      <div class="info">
        <p>Nome</p>
        <div>Oliver Calenbard</div>
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
        <p>Nível</p>
        <div>Técnico integrado</div>
      </div>
      <div class="info">
        <p>Status</p>
        <div>Ativo</div>
      </div>
      <div class="info">
        <p>Entrada</p>
        <div>Técnico integrado</div>
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

.top {
  width: 100vw;
  display: grid;
  grid-template-columns: 40vw 1vw;
}

.back-button {
  width: 2vw;
  height: 2vw;
  margin-left: 2vw;
  border-radius: 10vw;
  border: var(--lightest-grey) solid 1px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3vw;
}

.icon-arrow {
  margin: 0.3vw 0.3vw 0 0.2vw;
}

.icon-cam {
  margin: 0.2vw 0 0 0;
}
.camera {
  background-color: #181818;
  border-radius: 2vw;
  border: var(--lightest-grey) solid 1px;
  width: 1.3vw;
  height: 1.3vw;
  position: relative;
  left: 5.5vw;
  bottom: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
''

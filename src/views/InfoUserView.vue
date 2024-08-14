<script setup></script>
<template>
  <div class="user-image">
    <div class="image">
    <img
      src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
      alt=""
    />

    </div>
    <p class="name">Oliver Calenbard</p>
    <p class="id">2022305863</p>
  </div>
  <div class="main">
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
</template>
<style scoped>
.main {
  display: grid;
  grid-template-columns: 25vw 25vw;
  background-color: black;
  align-items: center;
  justify-content: center;
  margin: 2vw 0;
}

input {
  background-color: #282828;
  border-radius: 7px;
  width: 20vw;
  color: white;
  padding: 0.7vw 1.2vw;
}

.info {
  margin: 1vw;
  color: white;
  font-size: 0.8em;
  font-weight: 600;
}

.image {
}

.user-image {
    background-color: grey;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .name {
        font-weight: 600;
        font-size: 1.1em;
    }

    & .image {

        & img {
            width: 7vw;
        }
    }

    & .id {
        font-size: 0.9em;
    }

}
</style>

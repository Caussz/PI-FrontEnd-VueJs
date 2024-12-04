<script setup>
import FormLogin from '@/components/Form/Login/FormLogin.vue'
</script>

<template>
  <main>
  <div class="aside-form">
    <img
      src="https://i.postimg.cc/76YHLbYX/Captura-de-tela-de-2024-03-27-14-44-03-removebg-preview.png"
    />
    <img
      src="https://i.postimg.cc/76YHLbYX/Captura-de-tela-de-2024-03-27-14-44-03-removebg-preview.png"
    />
  </div>
  <div class="form-container">
    <FormLogin />
  </div>
  </main>
</template>

<style scoped>
main{
display: flex;
}

.aside-form {
  overflow: hidden;
  height: 100vh;
  width: 60vw;
  position: relative;
}

@media (max-width: 1100px) {
  img {
    width: 30vw !important;
  }
}

img {
  width: 23vw;
  position: absolute;
  z-index: 10;
}

img:nth-child(1) {
  top: -15%;
}

img:nth-child(2) {
  bottom: -15%;
  right: 20%;
  rotate: 0.5turn;
}

.form-container {
  width: 30%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

@media (max-width: 956px) {
  .form-container {
    width: 40%;
  }
}
</style>

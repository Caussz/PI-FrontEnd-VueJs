<template>
  <div class="aside-form">
    <img
      src="https://i.postimg.cc/76YHLbYX/Captura-de-tela-de-2024-03-27-14-44-03-removebg-preview.png"
    />
    <img
      src="https://i.postimg.cc/76YHLbYX/Captura-de-tela-de-2024-03-27-14-44-03-removebg-preview.png"
    />
  </div>
</template>

<style scoped>
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
</style>

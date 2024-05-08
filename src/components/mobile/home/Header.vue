<script setup>
  import Menu from 'vue-material-design-icons/Menu.vue'
</script>

<template>
  <header>
    <img src="https://i.ibb.co/4ty80mN/image.png" alt="" />
    <div class="user-info">
      <p>Nome do usuário</p>
      <p>123456789</p>
    </div>
    <div class="menu-icon">
      <Menu size="35"/>
    </div>
  </header>
</template>

<style scoped>
.menu-icon {
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-info {
  margin-left: 4%;
  font-size: .7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.user-info p:nth-child(1) {
  font-weight: 600;
  font-size: .8rem;
}

header {
  display: flex;
  padding: 9% 5% 5% 5%;
  color: #ffffff;
}

img {
  width: 15%;
  border-radius: 50%;
}
</style>

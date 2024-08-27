<script setup>
import { useUserStore } from '@/stores';
import { Menu } from '@/components/icons';

const { user } = useUserStore()
</script>

<template>
  <header>
    <img :src="user.photo" :alt="user.name" />
    <div class="user-info">
      <p>{{user.name}}</p>
      <p>{{user.matricula}}</p>
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>

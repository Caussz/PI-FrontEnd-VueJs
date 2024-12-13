<script setup>
import { useUserStore } from "@/stores";
import { Menu } from "@/components/icons";
import { DefaultAside } from "@/components";
import { reactive, ref } from "vue";

const { user } = useUserStore();

const showAside = ref(false);

function Show() {
  showAside.value ? (showAside.value = false) : (showAside.value = true);
}
</script>

<template>
  <header>
    <img :src="user.photo" :alt="user.name" />
    <div class="user-info">
      <p>{{ user.name }}</p>
      <p>{{ user.matricula }}</p>
    </div>
    <div class="menu-icon" @click="Show()">
      <Menu size="35" />
    </div>
  </header>
  <DefaultAside v-if="showAside" :Show="Show" />
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
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.user-info p:nth-child(1) {
  font-weight: 600;
  font-size: 0.8rem;
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

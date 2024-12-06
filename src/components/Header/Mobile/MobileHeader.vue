<script setup>
import { useUserStore } from "@/stores";
import { Menu, HomeOutline } from "@/components/icons";
import { DefaultAside, SelectYear } from "@/components";
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const { user } = useUserStore();

const showAside = ref(false);
const transition = ref();
const modalYear = ref(false);

function Show() {
  showAside.value = !showAside.value;
  transition.value = !transition.value;
}

function ShowModal() {
  modalYear.value = !modalYear.value;
  Show();
}
</script>

<template>
  <SelectYear v-if="modalYear" @close="modalYear = !modalYear" />
  <header>
    <div v-if="route.name == 'home' || route.name == ''" class="user-container">
      <img :src="user.photo" :alt="user.name" />
      <div class="user-info">
        <p>{{ user.name }}</p>
        <p>{{ user.matricula }}</p>
      </div>
    </div>
    <div class="title-container" v-else>
      <RouterLink to="/">
        <HomeOutline size="28" class="menu-icon" />
      </RouterLink>
      <p class="page-name">{{ route.name }}</p>
    </div>
    <div class="menu-icon" @click="Show()">
      <Menu size="28" />
    </div>
    <DefaultAside
      v-if="showAside"
      :Show="Show"
      :showAside="showAside"
      :transition="transition"
      :ShowModal="ShowModal"
    />
  </header>
</template>

<style scoped>
.title-container {
  display: flex;
  justify-content: space-between;
  width: 86vw;
}

.user-container {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #ffffff;
}

.page-name {
  margin: auto auto;
  font-size: 1.3rem;
  font-weight: 500;
}

.menu-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-info {
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
  justify-content: space-between;
  width: 100vw;
  padding: 3%;
  position: fixed;
  background-color: #1e1e1e;
  z-index: 10;
  color: var(--var(--white));
}

img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: #ffffff 1px solid;
}
</style>

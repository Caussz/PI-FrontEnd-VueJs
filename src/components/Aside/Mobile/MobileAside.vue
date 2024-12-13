<script setup>
import { RouterLink } from "vue-router";
import { SelectYear } from "@/components";
import { ref } from "vue";

defineProps(["Show"]);

const modalYear = ref(false);

function showModal() {
  modalYear.value = !modalYear.value;
}

import {
  HomeOutline,
  ListBoxOutline,
  CalendarWeekOutline,
  AlertBoxOutline,
  SchoolOutline,
  AccountGroup,
  Logout,
  AccountOutline,
  Certificate,
} from "@/components/icons";
</script>

<template>
  <SelectYear v-if="modalYear" />
  <div class="aside-back" @click="Show"></div>
    <div class="aside-container">
      <div class="navigation">
        <img src="https://i.ibb.co/WFNcSTx/Vector.png" alt="" />
        <RouterLink to="/">
          <HomeOutline size="20" />
          <p>Home</p>
        </RouterLink>
        <RouterLink to="/profile">
          <AccountOutline size="20" />
          <p>Profile</p>
        </RouterLink>
        <RouterLink to="/activitis">
          <ListBoxOutline size="20" />
          <p>Atividades</p>
        </RouterLink>
        <RouterLink to="/calendar">
          <CalendarWeekOutline size="20" />
          <p>Calendário acâdemico</p>
        </RouterLink>
        <RouterLink to="/communique">
          <AlertBoxOutline size="20" />
          <p>Comunicados</p>
        </RouterLink>
        <RouterLink to="/grades">
          <SchoolOutline size="20" />
          <p>Notas</p>
        </RouterLink>
        <div @click="showModal">
          <Certificate size="20" />
          <p>Boletim</p>
        </div>
        <RouterLink to="/class">
          <AccountGroup size="20" />
          <p>Turma</p>
        </RouterLink>
      </div>
      <div class="aside-bottom">
        <RouterLink to="/login">
          <Logout size="20" />
          <p>Sair</p>
        </RouterLink>
      </div>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.aside-back {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.aside-container {
  height: 100vh;
  min-width: 65vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #242424;
  padding: 0 0 0 5vw;
  z-index: 10;
  top: 0;
  right: 0;
}

img {
  display: flex;
  margin: 3vh auto;
}

a,
.navigation div {
  color: white;
  display: flex;
  gap: 1vw;
  padding: 1vh 2vw;
  align-items: center;
}

.navigation {
  color: white;

  & .router-link-active {
    width: 100%;
    border-right: white 3px solid;
  }

  & a:hover,
  div:hover {
    background-color: #ffffff08;
  }
}

.aside-bottom {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 27vw;

  & div {
    display: flex;
    padding: 0.2vw 0;
    gap: 1vw;
  }
}
</style>

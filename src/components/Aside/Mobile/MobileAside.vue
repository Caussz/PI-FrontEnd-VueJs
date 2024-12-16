<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

defineProps(["Show", "showAside", "transition", "ShowModal"]);
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
  <div :class="transition ? 'fade-anim aside-back' : 'aside-back'" @click="Show"></div>
  <div :class="transition ? 'slide-anim aside-container' : 'aside-container'">
    <div class="navigation">
      <img src="https://i.ibb.co/WFNcSTx/Vector.png" alt="" />
      <RouterLink @click="Show" to="/">
        <HomeOutline size="20" />
        <p>Home</p>
      </RouterLink>
      <RouterLink @click="Show" to="/profile">
        <AccountOutline size="20" />
        <p>Profile</p>
      </RouterLink>
      <RouterLink @click="Show" to="/activities">
        <ListBoxOutline size="20" />
        <p>Atividades</p>
      </RouterLink>
      <a
        href="https://public.tableau.com/app/profile/ifc.proen/viz/CalendrioAcadmico2024/Calendrio?publish=yes"
        target="_blank"
      >
        <CalendarWeekOutline size="20" />
        <p>Calendário acâdemico</p>
      </a>
      <RouterLink @click="Show" to="/communique">
        <AlertBoxOutline size="20" />
        <p>Comunicados</p>
      </RouterLink>
      <RouterLink @click="Show" to="/grades">
        <SchoolOutline size="20" />
        <p>Notas</p>
      </RouterLink>
      <div @click="ShowModal">
        <Certificate size="20" />
        <p>Boletim</p>
      </div>
      <RouterLink @click="Show" to="/class">
        <AccountGroup size="20" />
        <p>Turma</p>
      </RouterLink>
    </div>
    <div class="aside-bottom">
      <RouterLink @click="Show" to="/login">
        <Logout size="20" />
        <p>Sair</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.slide-anim {
  animation: slide 0.4s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
}

.fade-anim {
  animation: fade 0.5s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    translate: 100% 0;
  }
  100% {
    translate: 0 0;
  }
}

.aside-back {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.aside-container {
  height: 100vh;
  min-width: 65vw;
  position: fixed;
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

  & .router-link-exact-active {
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

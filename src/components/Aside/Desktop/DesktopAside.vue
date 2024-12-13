<script setup>
import { RouterLink } from "vue-router";
import { SelectYear } from "@/components";
import { ref } from "vue";

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
  <SelectYear v-if="modalYear" @close="modalYear = !modalYear" />
  <aside>
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
      <RouterLink to="/activities"> 
        <ListBoxOutline size="20" />
        <p>Atividades</p>
      </RouterLink>
      <a href="https://public.tableau.com/app/profile/ifc.proen/viz/CalendrioAcadmico2024/Calendrio?publish=yes" target="_blank">
        <CalendarWeekOutline size="20" />
        <p>Calendário acâdemico</p>
      </a>
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
  </aside>
</template>

<style scoped>
aside {
  max-height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #13131396;
  position: fixed;
}

img {
  display: flex;
  margin: 3vw auto;
}

a,
.navigation div {
  color: white;
  display: flex;
  gap: 1vw;
  padding: 0.5vw 2vw;
  align-items: center;
}

.navigation {
  color: white;

  & a {
    display: flex;
    gap: 1vw;
    padding: 0.5vw 2vw;
    align-items: center;
    color: white;
  }

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

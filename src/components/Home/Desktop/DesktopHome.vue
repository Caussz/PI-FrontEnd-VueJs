<script setup>
import { RouterLink } from "vue-router";
import { SelectYear } from "@/components";
import { onMounted, ref } from "vue";

import { useUserStore } from "@/stores";

const modalYear = ref(false);
const userStore = useUserStore();

function showModal() {
  modalYear.value = !modalYear.value;
}

onMounted(() => console.log(userStore.user));
import {
  NotebookOutline,
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
  <div id="layout-large">
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
    </aside>
    <main>
      <div class="discipline-container">
        <table>
          <tr>
            <th>Componente curricular</th>
            <th>Local</th>
            <th>Horário</th>
          </tr>
          <div class="table-scroll">
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Desenvolvimento de dispositivos móveis</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
            <tr>
              <td class="discipline">
                <NotebookOutline />
                <p>Matemática</p>
              </td>
              <td>E-305</td>
              <td>(15/02/2024 - 11/12/2024)</td>
            </tr>
          </div>
        </table>
      </div>
      <div class="profile-container">
        <img :src="userStore.user.photo" :alt="userStore.user.name" />
        <h2>{{ userStore.user.name }}</h2>
        <p>{{ userStore.user.matricula }}</p>
      </div>
    </main>
  </div>
</template>
<style scoped>
#layout-large {
  min-height: 100vh;
  display: flex;
}

table {
  border-collapse: collapse;
  overflow: auto;
  width: 45vw;
}

.table-scroll {
  border-collapse: collapse;
  width: 143.56%;
  max-height: 70vh;
  overflow: auto;
}

.table-scroll::-webkit-scrollbar {
  width: 8px;
}

.table-scroll::-webkit-scrollbar-thumb {
  background-color: #99b898;
  border-radius: 20px;
}

table tr:first-of-type {
  pointer-events: none;
}

tr {
  width: 100%;
}

tr:hover {
  background-color: #ffffff08;
}

th {
  color: white;
  padding: 1vw;
  word-wrap: break-word;
  font-size: 1.2em;
}

td {
  color: #99b898;
  border-top: #43424246 1px solid;
  padding: 1vw;
}

.discipline {
  display: flex;
  align-items: center;
  gap: 1vw;
  color: #99b898;

  & p {
    color: white;
  }
}

main {
  display: flex;
  margin-top: 10vh;
}

aside {
  max-height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #13131396;
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

/* discipline-container */

.discipline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  margin: 1.5vh 10vw;
}

/* profile */
.profile-container {
  border: #505050 solid 1px;
  border-radius: 20px;
  width: 18vw;
  height: 18vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 1.1em;
  }

  & p {
    font-size: 0.8em;
  }

  & img {
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    margin: 3vw 0 2vw 0;
  }
}

button {
  background-color: #242424;
  border: #505050 solid 1px;
  color: white;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
}
</style>

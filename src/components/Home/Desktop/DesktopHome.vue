<script setup>
import { RouterLink } from 'vue-router'
import { SelectYear } from '@/components'
import { onMounted, ref } from 'vue'

import { useUserStore } from '@/stores'

const modalYear = ref(false)
const userStore = useUserStore()

function showModal() {
  modalYear.value = !modalYear.value
}

onMounted(() => console.log(userStore.user))
</script>
<template>
  <SelectYear v-if="modalYear" @close="modalYear = !modalYear" />
  <div id="layout-large">
    <aside>
      <div class="navigation">
        <img src="https://i.ibb.co/WFNcSTx/Vector.png" alt="" />
        <RouterLink to="/">
          <HomeOutline size="20" />
          Home
        </RouterLink>
        <RouterLink to="/activities">
          <ListBoxOutline size="20" />
          Atividades
        </RouterLink>
        <RouterLink to="/communique">
          <AlertBoxOutline size="20" />
          Comunicados
        </RouterLink>
        <a @click="showModal">
          <SchoolOutline size="20" />
          Notas
        </a>
        <RouterLink to="/class">
          <AccountGroup size="20" />
          Turma
        </RouterLink>
      </div>
      <div class="aside-bottom">
        <RouterLink to="/login">
          <Logout size="20" />
          <p>Sair</p>
        </RouterLink>
      </div>
    </aside>
    <header>
      <div class="header-buttons">
        <button></button>
        <button>
          <AccountOutline />
        </button>
      </div>
    </header>
    <main>
      <div class="discipline-container">
        <div class="cards-guidance">
          <h2>Últimas atualizações</h2>
          <div>
            <p>Ver mais</p>
            <ChevronRight class="icon" size="20" />
          </div>
        </div>
        <div class="card">
          <div>
            <h2>Matemática</h2>
            <p>Tarefa alterda</p>
          </div>
          <p>05/10/2024</p>
        </div>
        <div class="card">
          <div>
            <h2>Matemática</h2>
            <p>Tarefa alterda</p>
          </div>
          <p>05/10/2024</p>
        </div>
        <table>
          <tr>
            <th>Componente curricular</th>
            <th>Local</th>
            <th>Horário</th>
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
        </table>
      </div>
      <div class="profile-container">
        <img
          :src="userStore.user.photo"
          :alt="userStore.user.name"
        />
        <h2>{{userStore.user.name}}</h2>
        <p>{{userStore.user.matricula}}</p>
      </div>
    </main>
  </div>
</template>
<style scoped>
/* table */
table {
  border-collapse: collapse;
  width: 100%;
}
table tr:first-of-type {
  pointer-events: none;
}

tr {
  width: 100%;
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

tr:hover {
  background-color: #ffffff08;
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

#layout-large {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 0.5fr 6fr;
  grid-template-areas:
    'aside header'
    'aside main';
}

main {
  display: flex;
  grid-area: main;
}

header {
  grid-area: header;
  display: flex;
  padding: 1vw;
  justify-content: flex-end;
  gap: 26vw;
}

aside {
  height: 100vh;
  grid-area: aside;
  position: fixed;
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
  display: flex;
  flex-direction: column;

  & .router-link-active {
    display: flex;
    align-items: center;
    gap: 1vw;
    text-decoration: none;
    color: white;
    width: 76%;
    padding: 0.5vw 2vw;
    border-right: white 3px solid;
  }

  & .router-link-active:hover,
  a:hover {
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
  margin: 1.5vw 12vw;
}

.search-bar {
  width: 17vw;
  margin-left: 16vw;
}

.card {
  background-color: #242424;
  border: #505050 solid 1px;
  border-radius: 20px;
  width: 100%;
  margin: 0.7vw;
  height: 7.5vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  gap: 16vw;

  & div > p {
    color: #ffffff61;
  }
}

.card:hover {
  background-image: linear-gradient(#99b898, #445244);
  color: black;

  & div > p {
    color: #212121c4;
  }
}

.cards-guidance {
  display: flex;
  justify-content: space-between;
  width: 95%;

  & p {
    color: #ffffff3b;
    font-size: 0.9em;
  }

  div {
    display: flex;
  }
  h2 {
    color: white;
    font-size: 1.2em;
  }
}

.icon {
  color: #ffffff3b;
}

.curricular-guidance {
  display: flex;
  color: white;
  justify-content: space-around;
  padding: 1vw;

  & h2 {
    font-size: 1em;
  }
}

.curricular-container {
  width: 100%;
}

.line {
  display: flex;
  justify-content: space-around;
  color: #99b898;
  padding: 1vw;
}

.line:hover {
  background-color: #ffffff08;
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

.header-buttons {
  display: flex;
  gap: 1vw;
}

button {
  background-color: #242424;
  border: #505050 solid 1px;
  color: white;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
}

.search-bar {
  margin: 0;
}
</style>

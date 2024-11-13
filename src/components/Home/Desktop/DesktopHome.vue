<script setup>
import { SelectYear } from '@/components'
import { ref } from 'vue'
import {
  ChevronRight,
  NotebookOutline,
  HomeOutline,
  ListBoxOutline,
  CalendarWeekOutline,
  AlertBoxOutline,
  SchoolOutline,
  AccountGroup,
  AccountOutline,
  Help,
  Logout
} from '@/components/icons'

const modalYear = ref(false)

function showModal() {
  modalYear.value = !modalYear.value
}

</script>
<template>
  <SelectYear v-if="modalYear"/>
  <div id="layout-large">
    <aside>const
      <div class="navigation">
        <img src="https://i.ibb.co/WFNcSTx/Vector.png" alt="" />
        <router-link to="/">
          <HomeOutline size="20" />
          <a href="/">Home</a>
        </router-link>
        <div>
          <ListBoxOutline size="20" />
          <a href="/activities">Atividades</a>
        </div>
        <div>
          <CalendarWeekOutline size="20" />
          <a href="/academic-calendar">Calendário acâdemico</a>
        </div>
        <div>
          <AlertBoxOutline size="20" />
          <a href="/communique">Comunicados</a>
        </div>
        <div>
          <SchoolOutline size="20" />
          <a @click="showModal">Notas</a>
        </div>
        <div>
          <AccountGroup size="20" />
          <a href="/class">Turma</a>
        </div>
      </div>
      <div class="aside-bottom">
        <div>
          <Help size="20" />
          <p>Suporte</p>
        </div>
        <div>
          <Logout size="20" />
          <p>Sair</p>
        </div>
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
          src="https://wallpapers.com/images/hd/solid-light-blue-background-q4ei4i2ruw3b5gp9.jpg"
          alt=""
        />
        <h2>Oliver Calenbard</h2>
        <p>2022305854</p>
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

.navigation {
  color: white;

  & div {
    display: flex;
    gap: 1vw;
    padding: 0.5vw 2vw;
    align-items: center;
  }

  & a {
    color: white;
  }

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
  padding: 0.2vw 2vw;

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

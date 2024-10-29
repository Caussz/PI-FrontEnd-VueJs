<script setup>
import SearchBar from '../../Search/SearchBar.vue'
import {
  ChevronRight,
  NotebookOutline,
  HomeOutline,
  ListBoxOutline,
  CalendarWeekOutline,
  AlertBoxOutline,
  SchoolOutline,
  AccountGroup
} from '@/components/icons'
</script>
<template>
  <main>
    <div class="side-bar">
      <div class="navigation">
        <router-link to="/">
          <HomeOutline />
          <p>Home</p>
        </router-link>
        <div>
          <ListBoxOutline />
          <p>Atividades</p>
        </div>
        <div>
          <CalendarWeekOutline />
          <p>Calêndario acâdemico</p>
        </div>
        <div>
          <AlertBoxOutline />
          <p>Comunicados importantes</p>
        </div>
        <div>
          <SchoolOutline />
          <p>Notas</p>
        </div>
        <div>
          <AccountGroup />
          <p>Turma</p>
        </div>
      </div>
    </div>
    <!-- <nav>
      <SearchBar class="search-bar" />
    </nav> -->
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
      <div class="curricular-container">
        <div class="curricular-guidance">
          <h2>Componente curricular</h2>
          <h2>Local</h2>
          <h2>Horário</h2>
        </div>
        <div class="line">
          <NotebookOutline />
          <p class="discipline">Matemática</p>
          <p>Local</p>
          <p>3M34 (15/02/2024 - 11/12/2024)</p>
        </div>
        <hr />
        <div class="line">
          <NotebookOutline />
          <p class="discipline">Matemática</p>
          <p>Local</p>
          <p>3M34 (15/02/2024 - 11/12/2024)</p>
        </div>
        <hr />
        <div class="line">
          <NotebookOutline />
          <p class="discipline">Matemática</p>
          <p>Local</p>
          <p>3M34 (15/02/2024 - 11/12/2024)</p>
        </div>
        <hr />
        <div class="line">
          <NotebookOutline />
          <p class="discipline">Matemática</p>
          <p>Local</p>
          <p>3M34 (15/02/2024 - 11/12/2024)</p>
        </div>
        <hr />
        <div class="line">
          <NotebookOutline />
          <p class="discipline">Matemática</p>
          <p>Local</p>
          <p>3M34 (15/02/2024 - 11/12/2024)</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20vw 80vw;
}

/* side-bar */
.side-bar {
  background-color: #1c1b1b;
  width: 100%;
}

.navigation {
  color: white;

  & div {
    /* background-color: red; */
    display: flex;
    gap: 1vw;
    padding: 0.2vw 2vw;
  }

  & .router-link-active {
    display: flex;
    gap: 1vw;
    text-decoration: none;
    color: white;
    background-color: #83838323;
    width: 79%;
    padding: 0.2vw 2vw;
    border-right: white 3px solid;
  }
}

/* discipline-container */
hr {
  background-color: #43424246;
  height: 1px;
}

.discipline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  margin: 3vw 5vw;
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
  height: 6vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7em;
  gap: 12vw;

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
  /* gap: 13vw; */
  justify-content: space-between;
  width: 95%;

  p {
    color: #ffffff3b;
    font-size: 0.8em;
  }

  div {
    display: flex;
  }
  h2 {
    color: white;
    font-size: 0.9em;
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

.discipline {
  color: white;
}
</style>

<script setup>
import SearchBar from '../../Search/SearchBar.vue'
import { ChevronRight } from '@/components/icons'
</script>
<template>
  <SearchBar class="search-bar" />
  <div class="center">
    <!-- MUDAR NOME DA CLASS -->
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
    </div>
  </div>
</template>
<style scoped>
.center {
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
  gap: 13vw;
  width: 100%;

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

  & h2 {
    font-size: 1em;
  }
}
</style>

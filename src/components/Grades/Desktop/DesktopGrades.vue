<script setup>
import { ChevronDown } from '@/components/icons'
import { ref } from 'vue'

const show = ref(false)
</script>
<template>
  <div class="card-container">
    <div class="card" @click="show = !show">
      <h2>Matemática</h2>
      <ChevronDown />
    </div>
    <table v-if="show">
      <tr>
        <th>Trimestre 1</th>
        <th>Recuperação</th>
        <th>Trimestre 2</th>
        <th>Recuperação</th>
        <th>Trimestre 3</th>
        <th>Recuperação</th>
      </tr>
      <tr>
        <th class="father-inside-table">
          <table class="inside-table">
            <tr>
              <th>AV1</th>
              <th>AV2</th>
              <th>AV3</th>
            </tr>
            <tr>
              <th>8</th>
              <th>8</th>
              <th>8</th>
            </tr>
          </table>
        </th>
        <th class="recuperation">9</th>
        <th class="father-inside-table">
          <table class="inside-table">
            <tr>
              <th>AV1</th>
              <th>AV2</th>
              <th>AV3</th>
            </tr>
            <tr>
              <th>8</th>
              <th>8</th>
              <th>8</th>
            </tr>
          </table>
        </th>
        <th class="recuperation"></th>
        <th class="father-inside-table">
          <table class="inside-table">
            <tr>
              <th>AV1</th>
              <th>AV2</th>
              <th>AV3</th>
            </tr>
            <tr>
              <th>8</th>
              <th>8</th>
              <th>8</th>
            </tr>
          </table>
        </th>
        <th class="recuperation"></th>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.card-container {
  margin: 2vw 0;
}

.card {
  background-color: var(--light-grey);
  display: grid;
  grid-template-columns: 55% 43%;
  align-items: center;
  justify-items: end;
  border-radius: 10px 10px 0 0;
  width: 70vw;

  & h2 {
    font-size: 1.2em;
    padding: 1vw;
  }
}

th {
  border: solid 2px var(--light-grey);
  padding: 0.7vw 1.3vw;
}

.recuperation {
  color: var(--light-green);
  font-weight: 400;
}

table {
  border-collapse: collapse;
}

.father-inside-table {
  padding: 0;
  border: 0;
  border-collapse: collapse;
}

.inside-table {
  border: solid 2px var(--light-grey);
  border-top: 0;
  border-collapse: collapse;
  color: #728971;

  & th {
    border: none;
    font-weight: 400;
  }
}
</style>

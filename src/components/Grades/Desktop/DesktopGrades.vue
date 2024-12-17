<script setup>
import { ChevronDown } from "@/components/icons";
import { ref } from "vue";

const subjects = ref([
  { subject: "BIOLOGIA", show: false },
  { subject: "DESENVOLVIMENTO PARA DISPOSITIVOS MÓVEIS", show: false },
  { subject: "DESENVOLVIMENTO WEB III", show: false },
  { subject: "FILOSOFIA", show: false },
  { subject: "FÍSICA", show: false },
  { subject: "GEOGRAFIA", show: false },
  { subject: "HISTÓRIA", show: false },
  { subject: "MATEMÁTICA", show: false },
  { subject: "PORTUGUÊS", show: false },
  { subject: "PROJETO INTEGRADOR III", show: false },
  { subject: "QUÍMICA", show: false },
  { subject: "REDES DE COMPUTADORES", show: false },
  { subject: "SOCIOLOGIA", show: false },
]);
</script>
<template>
  <div class="card-container" v-for="subject in subjects" :key="subject">
    <div class="card" @click="subject.show = !subject.show">
      <h2>{{ subject.subject }}</h2>
      <ChevronDown />
    </div>
    <table v-if="subject.show">
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

.card > table {
  width: 75vw;
}

.card {
  background-color: var(--light-grey);
  display: flex;
  grid-template-columns: 55% 43%;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  width: 70vw;

  & h2 {
    font-size: 1.2em;
    padding: 1vw;
  }

  & span {
    margin-right: 1vw;
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

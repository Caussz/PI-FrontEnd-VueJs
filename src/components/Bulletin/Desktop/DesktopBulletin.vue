<script setup>
import { useUserStore } from "@/stores";

const userStore = useUserStore();

// Transformar os dados de gradesComputed no formato do bulletinInfo
const bulletinInfo = userStore.gradesComputed.map((grade) => ({
  class: grade.fullName,
  firstTri: parseFloat(grade.notas.Tri1 || 0),
  firstTriReav: parseFloat(grade.notas.Tri1Reava || 0),
  secTri: parseFloat(grade.notas.Tri2 || 0),
  secTriReav: parseFloat(grade.notas.Tri2Reava || 0),
  thirtTri: parseFloat(grade.notas.Tri3 || 0),
  thirtTriReav: parseFloat(grade.notas.Tri3Reava || 0),
  finalAverage: parseFloat(grade.notas.MediaFinal || 0),
  absence: parseInt(grade.notas.Faltas || 0, 10),
  situation: grade.notas.Situacao || "Não definido",
}));

</script>

<template>
  <main>
    <h1>Boletim Escolar - 2022</h1>
    <div class="info">
      <p>Aluno(a): {{ userStore.user.name }}</p>
      <p>Matricula: {{userStore.user.matricula}}</p>
      <p>
        {{ userStore.user.course }}
      </p>
      <p>Frequencia final: 96,0%</p>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <td>Componente curricular</td>
            <td>Trimestre 1</td>
            <td>Trimestre 1 Reavaliação</td>
            <td>Trimestre 2</td>
            <td>Trimestre 2 Reavaliação</td>
            <td>Trimestre 3</td>
            <td>Trimestre 3 Reavaliação</td>
            <td>Média final</td>
            <td>Faltas</td>
            <td>Situação</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in bulletinInfo" :key="info">
            <td>{{ info.class }}</td>
            <td>{{ info.firstTri }}</td>
            <td>{{ info.firstTriReav }}</td>
            <td>{{ info.secTri }}</td>
            <td>{{ info.secTriReav }}</td>
            <td>{{ info.thirtTri }}</td>
            <td>{{ info.thirtTriReav }}</td>
            <td>{{ info.finalAverage }}</td>
            <td>{{ info.absence }}</td>
            <td>{{ info.situation }}</td>
          </tr>
          <tr class="absence-info">
            <td colspan="7"></td>
            <td colspan="3">Total de Faltas: 8</td>
          </tr>
          <tr class="absence-info">
            <td colspan="7"></td>
            <td colspan="3">
              Total de Faltas: 8 Percentual de Faltas referente ao Período Letivo: 3%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 0.8rem;
}

.info {
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 0.4rem;
  width: 90%;
  margin-bottom: 2rem;
}

.table-container {
  display: flex;
  flex-direction: column;
  width: 95%;

  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-wrap-style: stable;
  margin-bottom: 3rem;

  & thead {
    background-color: #2b2b2b;
    border: #2b2b2b solid 2px;

    & tr > td {
      text-align: center;
    }
    & tr > td {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
  }

  & tbody > tr > td {
    padding: 0.2rem 0;
    text-align: center;
    border: 2px solid #2b2b2b;
  }

  & tbody > tr > td:first-of-type {
    text-align: start;
    padding-inline: 2rem;
  }

  & tbody > tr > td:first-of-type,
  tbody > tr > td:last-of-type {
    color: #99b898;
  }

  & .absence-info td:first-of-type {
    border: none;
  }

  & .absence-info td:last-of-type {
    background-color: #2b2b2b;
    padding: .6rem;
    color: white;
    text-align: start;
  }
}

h1 {
  color: #99b898;
  margin: 3.5rem 0;
  font-weight: 500;
}
</style>

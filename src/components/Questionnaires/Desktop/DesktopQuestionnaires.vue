<script setup>
const questionnairesList = [
  {
    title: "Avaliação 1 sobre PWAs e VueJS",
    start: "05/08/2024 08:00",
    end: "05/08/2024 08:00",
  },
];
</script>

<template>
  <main>
    <h1>Questionários</h1>

    <table>
      <thead>
        <tr>
          <td>Título</td>
          <td>Inicio</td>
          <td>Fim</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="questionnaire in questionnairesList" :key="questionnaire">
          <td>{{ questionnaire.title }}</td>
          <td>{{ questionnaire.start }}</td>
          <td>{{ questionnaire.end }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<style scoped>
main {
  margin: 0 auto;
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20vh;
}

h1 {
  color: white;
}

table {
  color: white;
  border-collapse: collapse;
  width: 60vw;

  & td:not(:first-of-type) {
    text-align: center;
  }

  & thead {
    background-color: #353535;
  }

  & tbody {
    & tr:hover td {
      background-color: #353535;
    }
  }

  & td {
    border: 1px solid #353535;
    padding: 1rem;
  }
}
</style>

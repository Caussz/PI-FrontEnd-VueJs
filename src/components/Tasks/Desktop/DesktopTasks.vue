<script setup>
const tasksList = [
  {
    title: "Projeto frontend PWA da garagem",
    start: "03/07/2024 00h00 - 17/07/2024 13h00",
    note: true,
    shipments: 10,
  },
];
</script>

<template>
  <main>
    <h1>Atividades</h1>
    <table>
      <thead>
        <tr>
          <td>Título</td>
          <td>Período de entrega</td>
          <td>Possui nota</td>
          <td>Envios</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasksList" :key="task">
          <td>{{ task.title }}</td>
          <td>{{ task.start }}</td>
          <td>{{ task.note ? "sim" : "não" }}</td>
          <td>{{ task.shipments }}</td>
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

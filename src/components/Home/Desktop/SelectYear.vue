<script setup></script>

<template>
  <main>
    <h1>Selecione o ano escolar:</h1>
    <table>
      <thead>
        <tr>
          <th>Ano</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2022</td>
          <td>Aprovado</td>
        </tr>
        <tr>
          <td>2023</td>
          <td>Aprovado</td>
        </tr>
        <tr>
          <td>2024</td>
          <td>Matriculado</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  background-color: #212121;
  color: white;
}

h1 {
  color: #99b898;
  font-size: 1.3rem;
}
table {
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #2d2d2d;
  & thead{
	  border: 1px solid #2d2d2d;
    background-color: #2d2d2d;
    padding: 0;
  }

  & tbody > tr > td:last-of-type{
	color: #99b898;
  } 
}
</style>

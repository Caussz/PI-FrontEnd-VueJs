<script setup>
import { ChevronRight } from "@/components/icons";
</script>

<template>
  <main>
    <h1>Selecione o ano escolar</h1>
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
          <td>Aprovado <ChevronRight /></td>
        </tr>
        <tr>
          <td>2023</td>
          <td>Aprovado <ChevronRight /></td>
        </tr>
        <tr>
          <td>2024</td>
          <td>Matriculado<ChevronRight /></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45vw;
  height: 35vh;
  background-color: #212121;
  color: white;
}

h1 {
  color: #99b898;
  font-size: 1.3rem;
}
table {
  width: 30vw;
  border-collapse: collapse;
  border: 1px solid #2d2d2d;
  text-align: center;
  padding: 4rem;

  & td,
  th {
    border: 1px solid #2d2d2d;
    height: 2.5rem;
  }

  & thead {
    border: 1px solid #2d2d2d;
    background-color: #2d2d2d;
    padding: 0;

    & th {
      font-weight: 500 !important;
    }
  }

  & tbody > tr td:last-of-type {
    color: #99b898;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & span {
      position: absolute;
      right: 1rem;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }
}
</style>

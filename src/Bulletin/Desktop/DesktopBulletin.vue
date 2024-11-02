<script setup>
const bulletinInfo = [
  {
    class: 'INB0201-1 - ARTES',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0202-1 - BIOLOGIA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0203-1 - EDUCAÇÃO FÍSICA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0204-1 - FÍSICA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0205-1 - GEOGRAFIA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0206-1 - HISTÓRIA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0209-1 - MATEMÁTICA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0210-1 - PORTUGUÊS',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0211-1 - QUÍMICA',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0212-1 - INTRODUÇÃO À COMPUTAÇÃO',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0213-1 - PROGRAMAÇÃO I',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0214-1 - DESENVOLVIMENTO WEB I',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  },
  {
    class: 'INB0215-1 - PROJETO INTEGRADOR I',
    firstTri: 8.0,
    firstTriReav: 8.0,
    secTri: 8.0,
    secTriReav: 8.0,
    thirtTri: 8.0,
    thirtTriReav: 8.0,
    finalAverage: 8.0,
    absence: 8,
    situation: 'APROVADO'
  }
]
</script>
<template>
  <main>
    <h1>Boletim escolar - 2022</h1>
    <div class="info">
      <p>Aluno(a): Oliver Calenbard</p>
      <p>Matricula: 2022305854</p>
      <p>
        Turma de entrada: TÉCNICO EM INFORMÁTICA PARA INTERNET INTEGRADO AO ENSINO MÉDIO - A (2022)
      </p>
      <p>Frequencia final: 96,0%</p>
    </div>

    <table>
      <tr>
        <td>Componente curricular</td>
        <td>Trimestre 1</td>
        <td>Trimestre 1 reavaliação</td>
        <td>Trimestre 2</td>
        <td>Trimestre 2 reavaliação</td>
        <td>Trimestre 3</td>
        <td>Trimestre 2 reavaliação</td>
        <td>Média final</td>
        <td>Faltas</td>
        <td>Situação</td>
      </tr>
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
    </table>
    <div class="absence-info">
      <p>Total de Faltas: 8</p>
      <p>Percentual de Faltas referente ao Período Letivo: 3%</p>
    </div>
  </main>
</template>

<style scoped></style>

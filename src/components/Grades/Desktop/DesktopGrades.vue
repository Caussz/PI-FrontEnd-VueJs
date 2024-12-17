<script setup>
import { ChevronDown } from "@/components/icons";
</script>
<template>
  <main>
    <h1>Notas</h1>
    <div>
      <div class="card">
        <h2>Matemática</h2>
        <ChevronDown />
      </div>
    </div>

    <table>
        <tr>
            <th>trimestre 1</th>
            <th>reavaliação</th>
            <th>trimestre 2</th>
            <th>reavaliação</th>
            <th>trimestre 3</th>
            <th>reavaliação</th>
        </tr>
        <tr>
            
        </tr>
    </table>
  </main>
</template>
<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
}

.card {
  background-color: var(--light-grey);
  height: 4vw;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
}

h1 {
    font-size: 1.3em;
}

h2 {
    font-size: 1em;
    font-weight: 600;
}
</style>

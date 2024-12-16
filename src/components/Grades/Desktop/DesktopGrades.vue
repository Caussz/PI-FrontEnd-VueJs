<script setup></script>
<template>

    <div class="card">
        <h2>Matemática</h2>
    </div>

<table>
    <tr>
        <th>Trimestre 1</th>
        <th>Recuperação</th>
        <th>Trimestre 2</th>
        <th>Recuperação</th>
        <th>Trimestre 3</th>
        <th>Recuperação</th>
    </tr>
    <tr>
        <p>AP1</p>
        <p>AP2</p>
        <p>AP3</p>
        <p>8</p>
        <p>8</p>
        <p>8</p>
    </tr>
</table>
</template>
<style scoped>
.card {
    background-color: #2D2D2D;
    display: flex;
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
    border-radius: 10px 10px 0 0;
    margin: 2vw;

    & h2 {
        font-size: 1.2em;
        padding: 1vw;
    }
}

th {
    border: solid 2px #2C2C2C;
    padding: 0.7vw 1.3vw;
}

table {
    border-collapse: collapse;
}
</style>

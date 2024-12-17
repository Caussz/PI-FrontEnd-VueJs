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
      <th></th>
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
      <th></th>
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
      <th></th>
    </tr>
  </table>
</template>
<style scoped>
.card {
  background-color: var(--light-grey);
  height: 4vw;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  margin: 2vw;

  & h2 {
    font-size: 1.2em;
    padding: 1vw;
  }
}

th {
  border: solid 2px #2c2c2c;
  padding: 0.7vw 1.3vw;
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
  border: solid 2px #2c2c2c;
  border-top: 0;
  color: #728971;
  border-collapse: collapse;

  & th {
    border: none;
    font-weight: 400;
  }
}
</style>

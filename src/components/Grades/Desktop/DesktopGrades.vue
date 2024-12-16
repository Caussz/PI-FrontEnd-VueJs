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
      <th>
        <table class="inside-table">
          <tr>
            <th class="inside-tr">AV1</th>
            <th class="inside-tr">AV2</th>
            <th class="inside-tr">AV3</th>
          </tr>
          <tr>
            <th class="inside-tr">8</th>
            <th class="inside-tr">8</th>
            <th class="inside-tr">8</th>
          </tr>
        </table>
      </th>
      <th></th>
      <th>
        <table class="inside-table">
          <tr>
            <th class="inside-tr">AV1</th>
            <th class="inside-tr">AV2</th>
            <th class="inside-tr">AV3</th>
          </tr>
          <tr>
            <th class="inside-tr">8</th>
            <th class="inside-tr">8</th>
            <th class="inside-tr">8</th>
          </tr>
        </table>
      </th>
      <th></th>
      <th>
        <table class="inside-table">
          <tr>
            <th class="inside-tr">AV1</th>
            <th class="inside-tr">AV2</th>
            <th class="inside-tr">AV3</th>
          </tr>
          <tr>
            <th class="inside-tr">8</th>
            <th class="inside-tr">8</th>
            <th class="inside-tr">8</th>
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

.inside-table {
  border: solid 2px #2c2c2c;
  color: #728971;
  border-collapse: collapse;

  & .inside-tr {
    border: none;
    font-weight: 400;
  }
}
</style>

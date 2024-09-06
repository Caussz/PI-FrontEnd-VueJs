<script setup></script>
<template>
  <div class="fade">
    <div class="modal">
      <h2>Cadastro</h2>
      <p>
        Para concluir o cadastro, é necessário inserir seu número de telefone no campo indicado e
        clicar em <span style="color: #99b898;">"Enviar"</span>.
      </p>
      <div class="input-container">
        <p>Telefone</p>
        <input type="tel" placeholder="554712345678" />
      </div>
      <button>Enviar</button>
    </div>
  </div>
</template>
<style scoped>
.fade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  position: absolute;
  background-color: #282828;
  width: 65vw;
  padding: 10vw 8vw 7vw 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7vw;
  border-radius: 35px;
  box-shadow: 0px 4px 30px 0px;
}

h2 {
  color: #99b898;
  font-weight: 500;
}

p {
  color: white;
  font-weight: 500;
}

input {
    background-color: #3A3A3AB5;
    border: #99B898 1px solid;
    outline: none;
    width: 60vw;
    padding: 2vw;
    border-radius: 5px;
    height: 5vw;
    color: #716F6F;
}

button {
  background-color: #99B898;
  color: #000000;
  font-weight: 500;
  width: 100%;
  padding-block: 1rem;
  border-radius: 5rem;
  font-size: 1.1rem;
}
</style>

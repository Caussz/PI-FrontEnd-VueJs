<script setup></script>
<template>
  <div class="background-blur">
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
.background-blur {
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.205);
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
  font-size: .76rem;
}

input {
    background-color: #3A3A3AB5;
    border: #99B898 1px solid;
    outline: none;
    width: 60vw;
    padding: 2vh 2.3vw;
    border-radius: 5px;
    color: #716F6F;
}

button {
  background-color: #99B898;
  color: #000000;
  font-weight: 500;
  width: 100%;
  padding-block: 1rem;
  border-radius: 5rem;
  font-size: .9rem;
}
</style>

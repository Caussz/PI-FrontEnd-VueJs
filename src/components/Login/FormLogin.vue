<script setup>
import { ref } from 'vue'

import { CheckCircle, EyeOffOutline, EyeOutline } from '@/components/icons'

const showPass = ref(false)
</script>

<template>
  <form>
    <h1>Entrar</h1>
    <label>
      <p>Usuário</p>
      <div class="input-container">
        <input type="text" placeholder="Digite seu usuário" />
        <CheckCircle />
      </div>
    </label>
    <label>
      <p>Senha</p>
      <div class="input-container">
        <input type="password" placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁" />
        <EyeOutline v-if="!showPass" @click="showPass = !showPass" />
        <EyeOffOutline v-if="showPass" @click="showPass = !showPass" />
      </div>
    </label>
    <button>Entrar</button>
  </form>
</template>

<style scoped>
label {
  width: 100%;
}

.input-container {
  width: 100% !important;
  background-color: var(--input-back-color);
  border: 1px solid var(--border-button-login-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--icon-login-color);
  padding: 5% 0;
  border-radius: 9px;
  margin-top: 1%;
}
.input-container:focus-within {
  border: solid 1px #99b89873;
}
.input-container span {
  height: 20px;
}

input {
  background-color: transparent;
  color: red;
}

input:focus-visible {
  outline: 0;
}

button {
  margin-top: 15%;
  background-color: var(--button-login-color);
  color: var(--text-butto-color);
  font-weight: 500;
  width: 100%;
  padding-block: 1rem;
  border-radius: 5rem;
  font-size: 1.1rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  gap: 2vh;
}

p {
  font-weight: 300;
  font-size: 0.9rem;
}

h1 {
  margin-bottom: 10%;
  font-weight: 500;
}

h1,
p {
  color: var(--text-login-color);
}

@media (max-width: 1200px) and (min-width: 768px) {
  .input-container {
    width: 130%;
  }
}

@media (max-width: 756px) {
    p, input {
        font-size: 1.1em;
    }
}
</style>

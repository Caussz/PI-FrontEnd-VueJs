<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore, useStudentStore } from "@/stores";
import PopUpLoginComponent from "@/components/PopUp/PopUpLoginComponent.vue";
import PopUpFinishComponent from "@/components/PopUp/PopUpFinishComponent.vue";
import EyeOffOutline from "vue-material-design-icons/EyeOffOutline.vue";
import EyeOutline from "vue-material-design-icons/EyeOutline.vue";

const userStore = useUserStore();
const studentStore = useStudentStore();

const user = reactive({
  name: "",
  pass: "",
  image: null,
});

const router = useRouter();
const showPass = ref(false);

const entrar = async () => {
  studentStore.setStudent(user.name, user.pass)
  await userStore.login(user.name, user.pass)
  router.push({ name: "home" });
};
</script>

<template>
  <form>
    <h1>Entrar</h1>
    <label>
      <p>Usuário</p>
      <div class="input-container">
        <input type="text" placeholder="Digite seu usuário" v-model="user.name"/>
        <CheckCircle />
      </div>
    </label>
    <label>
      <p>Senha</p>
      <div class="input-container">
        <input :type="showPass? 'text': 'password'" placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁" v-model="user.pass"/>
        <EyeOutline v-if="!showPass" @click="showPass = !showPass" />
        <EyeOffOutline v-if="showPass" @click="showPass = !showPass" />
      </div>
    </label>
    <button @click.prevent="entrar">Entrar</button>
    <p class="terms-text">
      Li e concordo com os termos da <a>politica de privacidade</a>
    </p>
    <PopUpLoginComponent v-if="userStore.user.loggedStatus == 1" />
    <PopUpFinishComponent v-if="userStore.user.loggedStatus == 2" />
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
  color: #99b89873;
  width: 85%;
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

p {
  font-weight: 300;
  font-size: 0.9rem;
}

h1 {
  margin-bottom: 10%;
  font-weight: 500;
  text-align: center;
}

h1,
p {
  color: var(--text-login-color);
}

@media (min-width: 768px) {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    gap: 2vh;
  }
}

@media (max-width: 768px) {
  p,
  input {
    font-size: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: auto;
    padding-top: 15vh;
    gap: 2vh;
  }
}
</style>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { CheckCircle, EyeOffOutline, EyeOutline } from "@/components/icons";
import { useUserStore } from "@/stores";
import { AuthService } from "@/services";
import PopUp from "../../../PopUp/PopUpLoginComponent.vue";
import PopUpFinish from "../../../PopUp/PopUpLoginComponent.vue";

const { getUserImage, getinfo, getUserFormat } = useUserStore();

const user = reactive({
  name: "",
  pass: "",
  image: null,
});

const router = useRouter();
const verSenha = ref(false);

const entrar = async () => {
  const { studentInfo } = await AuthService.getUserInfo(user.name, user.pass);
  getinfo(studentInfo);
  getUserImage(studentInfo?.photo);
  getUserFormat(studentInfo?.name);
  router.push({ name: "home" });
};
</script>

<template>
  <main>
    <div class="form">
      <h1>Entrar</h1>
      <label>
        <p>Usuário</p>
        <div class="input-container">
          <input type="text" v-model="user.name" />
          <CheckCircle />
        </div>
      </label>
      <label>
        <p>Senha</p>
        <div class="input-container">
          <input :type="verSenha ? 'text' : 'password'" v-model="user.pass" />
          <EyeOutline v-if="!verSenha" @click="verSenha = !verSenha" />
          <EyeOffOutline v-if="verSenha" @click="verSenha = !verSenha" />
        </div>
      </label>
      <button @click.prevent="entrar">Entrar</button>
      <p class="terms-text">
        Li e concordo com os termos da <a>politica de privacidade</a>
      </p>
      <PopUp />
      <!-- <PopUpFinish /> -->
    </div>
  </main>
</template>

<style scoped>
.terms-text {
  font-size: 0.7rem;
  font-weight: 300;
}
.terms-text a {
  color: #99b898;
}

label {
  width: 100%;
}

.input-container {
  width: 100%;
  background-color: #3a3a3ab5;
  border: 1px solid #505050;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #716f6f;
  padding: 1rem 0;
  border-radius: 9px;
  margin-top: 1%;
}

.input-container span {
  height: 20px;
}

input {
  background-color: transparent;
  color: #716f6f;
}

input:focus-visible {
  outline: 0;
}

button {
  margin-top: 15%;
  background-color: #99b898;
  color: #000000;
  font-weight: 500;
  width: 100%;
  padding-block: 1rem;
  border-radius: 5rem;
  font-size: 1.1rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 2vh;
}

main {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  justify-content: center;
  align-items: center;
}

p {
  font-weight: 400;
  font-size: 0.8rem;
}

h1 {
  margin-bottom: 10%;
  font-weight: 500;
}

h1,
p {
  color: #ffffff;
}
</style>

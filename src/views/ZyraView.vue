<script setup>
import {ref} from 'vue'

import LoadingComponent from '@/components/LoadingComponent.vue';

import CheckCircle from 'vue-material-design-icons/CheckCircle.vue';
import EyeOffOutline from 'vue-material-design-icons/EyeOffOutline.vue';
import EyeOutline from 'vue-material-design-icons/EyeOutline.vue';

const verSenha = ref(false)
</script>

<template>
    <main>
        <LoadingComponent/>
        <form>
            <h1>Entrar</h1>
            <label>
                <p>Usuário</p>
                <div class="input-container">
                    <input type="email">
                    <CheckCircle/>
                </div>
            </label>
            <label>
                <p>Senha</p>
                <div class="input-container">
                    <input type="email">
                    <EyeOutline v-if="!verSenha" @click="verSenha = !verSenha"/>
                    <EyeOffOutline v-if="verSenha" @click="verSenha = !verSenha"/>
                </div>
            </label>
            <button>Entrar</button>
        </form>
    </main>
</template>

<style scoped>
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
    color: #716F6F;
    padding: 1rem 0;
    border-radius: 9px;
    margin-top: 1%;
}
.input-container span{
    height: 20px;
}

input{
    background-color: transparent;
    color: #716F6F;
}

input:focus-visible {
    outline: 0;
}

button {
    margin-top: 15%;
    background-color: #99B898;
    color: #000000;
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
    width: 90%;
    gap: 2vh;
}

main {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #1E1E1E;
    justify-content: center;
    align-items: center;
}

p {
    font-weight: 300;
    font-size: .8rem;
}

h1 {
    margin-bottom: 10%;
font-weight: 500;
}

h1,
p {
    color: #FFFFFF;
}
</style>
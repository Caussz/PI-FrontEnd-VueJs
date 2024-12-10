<script setup>
import { useRouter } from "vue-router";
import { defineEmits } from "vue";
import { ChevronRight, Close } from "@/components/icons";

const router = useRouter()

const emit = defineEmits(["close"]);

const items = [{
  year: 2022,
  situation: "APROVADO"
},
{
  year: 2023,
  situation: "APROVADO"
},
{
  year: 2024,
  situation: "MATRICULADO"
},
]
</script>

<template>
  <main>
    <div class="content-container">
      <Close class="close-btn" size="30" @click="$emit('close')" />
      <h1>Selecione o ano escolar</h1>
      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" @click="router.push('/bulletin')">
            <td>{{ item.year }}</td>
            <td>
              <div> {{item.situation}} <ChevronRight /> </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: #9b9b9b15;
  z-index: 1;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 35vw;
  background-color: #212121;
  color: white;
  padding: 2rem 2rem 4rem 2rem;
  border-radius: 2rem;
}

.close-btn {
  cursor: pointer;
  align-self: self-end;
}

.close-btn:hover {
  scale: 1.1;
  transition: 0.3s ease-in-out all;
}

h1 {
  color: #99b898;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

table {
  width: 30vw;
  border-collapse: collapse;
  border: 1px solid #2d2d2d;
  text-align: center;
  padding: 4rem;

  & td,
  th {
    border: 1px solid #2d2d2d;
    height: 2.5rem;
  }

  & thead {
    border: 1px solid #2d2d2d;
    background-color: #2d2d2d;
    padding: 0;

    & th {
      font-weight: 500 !important;
    }
  }

  & tbody > tr td:last-of-type:hover {
    border: 1px solid #99b898;
    transition: 0.3s ease-in-out all;
  }

  & tbody > tr td:last-of-type {
    color: #99b898;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & span {
      position: absolute;
      right: 1rem;
      display: flex;
      align-items: center;
      color: #ffffff;
      top: 25%;
    }
  }

  & a {
    color: #99b898;
  }
}
</style>

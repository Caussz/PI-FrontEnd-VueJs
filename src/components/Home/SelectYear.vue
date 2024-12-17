<script setup>
import { useRouter } from "vue-router";
import { defineEmits } from "vue";
import { ChevronRight, Close } from "@/components/icons";

const router = useRouter();

const emit = defineEmits(["close"]);

const items = [
  {
    year: 2022,
    situation: "APROVADO",
  },
  {
    year: 2023,
    situation: "APROVADO",
  },
  {
    year: 2024,
    situation: "MATRICULADO",
  },
];
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
        <tbody @click="$emit('close')">
          <tr
            v-for="(item, index) in items"
            :key="index"
            @click="router.push('/bulletin')"
          >
            <td>{{ item.year }}</td>
            <td>
              <div>{{ item.situation }} <ChevronRight /></div>
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
  left: 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 35vw;
  background-color: var( --darker-grey);
  color: var(--white);
  padding: 2rem 2rem 4rem 2rem;
  border: 1px solid var(--light-grey);
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
  color: var(--light-green);
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

table {
  width: 30vw;
  border-collapse: collapse;
  border: 1px solid var(--light-grey);
  text-align: center;
  padding: 4rem;

  & td,
  th {
    border: 1px solid var(--light-grey);
    height: 2.5rem;
  }

  & thead {
    border: 1px solid var(--light-grey);
    background-color: var(--light-grey);
    padding: 0;

    & th {
      font-weight: 500 !important;
    }
  }

  & tbody > tr td:last-of-type:hover {
    border: 1px solid var(--light-green);
    transition: 0.3s ease-in-out all;
  }

  & tbody > tr td:last-of-type {
    color: var(--light-green);
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
      top: 25%;
      color: var(--white);
    }
  }

  & a {
    color: var(--light-green);
  }
}

@media (max-width: 768px) {
  .content-container {
    width: 90vw;
    height: auto;
    padding: 5rem 2rem 2rem 2rem;
    position: relative;
  }

  table {
    width: 80vw;
  }

  h1 {
    font-size: 1.3rem;
    position: absolute;
    left: 1.5rem;
    top: 1.9rem;
  }

  .close-btn {
    position: absolute;
    right: 1.1rem;
    top: 1.9rem;
  }
}
</style>

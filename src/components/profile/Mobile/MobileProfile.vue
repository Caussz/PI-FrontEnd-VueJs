<script setup>
import { CameraOutline } from '@/components/icons';
import { useUserStore } from "@/stores";

const { user } = useUserStore();

const informations = {
  Nome: "Oliver Calenbard",
  Email: "olivercalenbard2info1@gmail.com",
  Matrícula: 2022305854,
  Curso: "Informática para internet",
  Nível: "Técnico integrado",
  Status: "Ativo",
  Entrada: 2023,
};
</script>

<template>
  <div class="profile-img">
    <img :src="user.photo" :alt="user.name" />
    <div class="icon-container">
      <CameraOutline size="20" />
    </div>
  </div>
  <span class="info-container">
    <p>Nome</p>
    <div class="field-information">
      <p>{{ informations.Nome }}</p>
    </div>
  </span>
  <span class="info-container">
    <p>Email</p>
    <div class="field-information">
      <p>{{ informations.Email }}</p>
    </div>
  </span>
  <span class="info-container">
    <p>Matrícula</p>
    <div class="field-information">
      <p>{{ informations.Matrícula }}</p>
    </div>
  </span>
  <span class="info-container">
    <p>Curso</p>
    <div class="field-information">
      <p>{{ informations.Curso }}</p>
    </div>
  </span>
  <span class="info-container">
    <p>Nível</p>
    <div class="field-information">
      <p>{{ informations.Nível }}</p>
    </div>
  </span>
  <span class="info-container">
    <p>Status</p>
    <div class="field-information">
      <p>{{ informations.Status }}</p>
    </div>
  </span>
  <span class="info-container">
    <p>Entrada</p>
    <div class="field-information">
      <p>{{ informations.Entrada }}</p>
    </div>
  </span>
</template>

<style scoped>
.info-container {
  width: 90%;
  overflow-x: hidden;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 500;
}

.field-information {
  background-color: var(--dark-grey);
  border: 1px solid #716f6f;
  padding: 0.8rem;
  border-radius: 0.4rem;
}

.profile-img {
  position: relative;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

.icon-container {
  position: absolute;
  right: 36%;
  bottom: 25%;
  background-color: #1e1e1e;
  border: 1px solid #716f6f;
  color: #fff;
  max-height: 1.5rem;
  padding: 0.2rem 0.2rem 0 0.2rem;
  border-radius: 50%;
}

img {
  width: 25%;
  border-radius: 50%;
  border: 2px solid #716f6f;
}
</style>

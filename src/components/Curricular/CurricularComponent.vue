<script setup>
import { TitleComponent, TextCard } from "@/components";

const subjects = [
  { subject: "BIOLOGIA", room: "E304" },
  { subject: "DESENVOLVIMENTO PARA DISPOSITIVOS MÓVEIS", room: "B2" },
  { subject: "DESENVOLVIMENTO WEB III", room: "B1" },
  { subject: "FILOSOFIA", room: "E304" },
  { subject: "FÍSICA", room: "E304" },
  { subject: "GEOGRAFIA", room: "E304" },
  { subject: "HISTÓRIA", room: "E304" },
  { subject: "MATEMÁTICA", room: "E304" },
  { subject: "PORTUGUÊS", room: "E304" },
  { subject: "PROJETO INTEGRADOR III", room: "B1" },
  { subject: "QUÍMICA", room: "E304" },
  { subject: "REDES DE COMPUTADORES", room: "B5" },
  { subject: "SOCIOLOGIA", room: "E304" },
];
</script>

<template>
  <div>
    <TitleComponent text="Componente Curricular" />
    <div v-for="subject in subjects" :key="subject">
      <TextCard
        :title="subject.subject"
        :information="subject.room"
        infoColor="gradient"
        icon="book"
        actionIcon="dots"
        :bgCard="true"
      />
    </div>
  </div>
</template>

<style scoped></style>

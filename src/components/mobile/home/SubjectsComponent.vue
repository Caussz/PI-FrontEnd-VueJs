<script setup>
import { TitleComponent, TextCard } from "../../index.js";

const subjects = [
    { subject: 'Matemática', room: 'E304' },
    { subject: 'Português', room: 'E305' }
]
</script>

<template>
    <TitleComponent text="Componente Curricular" />
    <div v-for="subject in subjects" :key="subject">
        <TextCard :title='subject.subject' :information='subject.room' infoColor="gradient" icon="book" actionIcon="dots" :bgCard="true" />
    </div>
</template>

<style scoped></style>

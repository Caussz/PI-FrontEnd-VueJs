<script setup>
import { TitleComponent, SubjectCard } from "../../index.js";

const subjects = [
    { subject: 'Matemática', room: 'E304' },
    { subject: 'Português', room: 'E305' }
]

</script>

<template>
    <TitleComponent text="Componente Curricular" />
    <div v-for="subject in subjects" :key="subject">
        <SubjectCard :subject='subject.subject' :room='subject.room' />
    </div>
</template>

<style scoped></style>

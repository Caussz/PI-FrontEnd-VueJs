<script setup>
import { TitleComponent, TextCard } from "@/components";

const subjects = [
    { subject: 'Matemática', room: 'E304' },
    { subject: 'Português', room: 'E305' }
]
</script>

<template>
    <div>
        <TitleComponent text="Componente Curricular" />
        <div v-for="subject in subjects" :key="subject">
            <TextCard :title='subject.subject' :information='subject.room' infoColor="gradient" icon="book" actionIcon="dots" :bgCard="true" />
        </div>
    </div>
</template>

<style scoped></style>

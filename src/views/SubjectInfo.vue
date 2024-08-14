<script setup>
import { TitleComponent, TextCard } from "../components"

const Informations = [
    { title: "Prova de matematica", information: "10/05/2024 10:55" },
    { title: "Prova de matematica basica para todos os alunos interessados", information: "01/04/2024 10:55" },
]
</script>

<template>
    <TitleComponent text="Matemática" :outHome="true" />
    <span v-for="Info in Informations" :key="i">
        <div class="cards-container">
            <TextCard icon="calendar" actionIcon="arrow" :title="Info.title" :information="Info.information"
                infoColor="gray" />
        </div>
    </span>
</template>

<style scoped>
.cards-container {
    margin-top: 5%;
    padding: 0 1rem;
}
</style>
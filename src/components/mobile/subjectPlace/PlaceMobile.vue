<script setup>
import { TitleComponent, TextCard } from "../../index.js"
</script>

<template>
    <TitleComponent text="Matemática" :outHome="true" />
    <div class="cards-container">
        <TextCard actionIcon="arrow" title="Local" information="E304" infoColor="white" />
        <TextCard actionIcon="arrow" title="Horário"
            information="8:00 - 9:30 (terça-feira)" infoColor="white" />
    </div>
</template>

<style scoped>
.cards-container{
    margin-top: 5%;
    padding: 0 1rem;
}
</style>
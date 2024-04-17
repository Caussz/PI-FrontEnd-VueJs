<script setup>
import { TitleComponent, UpdateCard } from '../../index.js'

const update = [
    { subject: 'Matemática', desc: 'Tarefa atualizada', date: '11/09/2024' }
]
</script>


<template>
    <TitleComponent text="Ultimas atualizações" />
    <UpdateCard :subject='update[0].subject' :desc='update[0].desc' :date="update[0].date" />
</template>

<style scoped></style>
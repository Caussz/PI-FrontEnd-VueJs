<script setup>
import { NotebookMultiple, DotsVertical } from '../../icons/index.js'

const props = defineProps({
    subject: String,
    room: String,
})
</script>

<template>
    <div class="container">
        <div class="icon-container">
            <NotebookMultiple />
        </div>
        <div class="infos">
            <p>{{ props.subject }}</p>
            <p class="gradient-text">{{ props.room }}</p>
        </div>
        <div class="icon-container">
            <DotsVertical />
        </div>
    </div>

</template>

<style scoped>
.infos {
    width: 70%;
    overflow-x: hidden;
}

.icon-container {
    translate: 0 15%;
}

.container {
    color: #99B898;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 2% auto;
    border: #505050 solid 1px;
    background-color: #242424;
    padding: 1rem 0;
    border-radius: .5rem;
}

.container p:nth-child(1) {
    color: #FFFFFF;
}

.gradient-text {
    background: -webkit-linear-gradient(0deg, #99B898, #445244);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
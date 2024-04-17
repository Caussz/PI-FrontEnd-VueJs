<script setup>
import { ChevronLeft, ChevronRight } from '../../icons/index.js'

const props = defineProps({
    subject: String,
    desc: String,
    date: String
})
</script>


<template>
    <div class="container">
        <div class="icon-container">
            <ChevronLeft />
        </div>
        <div class="infos">
            <p>{{ props.subject }} - {{ props.date }}</p>
            <p class="gradient-text">{{ props.desc }}</p>
        </div>
        <div class="icon-container">
            <ChevronRight />
        </div>
    </div>

</template>

<style scoped>
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
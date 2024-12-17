<script setup>
import { NotebookMultiple, DotsVertical } from '@/components/icons';

const props = defineProps({
    subject: String,
    room: String,
});
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
    color: var(--light-green);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 2% 0;
    border: var(--lightest-grey) solid 1px;
    background-color: var(--darker-grey);
    padding: 1rem 0;
    border-radius: .5rem;
}

.container p:nth-child(1) {
    color: var(--white);
}

.gradient-text {
    background: -webkit-linear-gradient(0deg, var(--light-green), var(--dark-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
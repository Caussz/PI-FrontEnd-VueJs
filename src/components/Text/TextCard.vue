<script setup>
import { NotebookMultiple, DotsVertical, CalendarBlankOutline, ChevronRight } from '@/components/icons';

const props = defineProps({
    title: String,
    information: String,
    infoColor: String,
    icon: String,
    actionIcon: String,
    bgCard: Boolean
});
</script>

<template>
    <div :class="bgCard? 'container bg-card': 'container'">
        <div class="icon-container" v-if="props.icon == 'book'">
            <NotebookMultiple />
        </div>
        <div class="icon-container icon-bg" v-if="props.icon == 'calendar'">
            <CalendarBlankOutline />
        </div>
        <div class="infos">
            <p>{{ props.title }}</p>
            <p :class="props.infoColor">{{ props.information }}</p>
        </div>
        <div class="icon-container" v-if="props.actionIcon == 'dots'">
            <DotsVertical />
        </div>
        <div class="icon-container" v-if="props.actionIcon == 'arrow'">
            <ChevronRight />
        </div>
    </div>

</template>

<style scoped>
.icon-bg {
    background: linear-gradient(90deg, var(--dark-green), var(--light-green));
    min-width: 40px !important;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--darker-grey);
    translate: 0 0 !important;
}

.icon-bg span {
    translate: 0 9%;
}

.infos {
    width: 70%;
    overflow-x: hidden;
}

.icon-container {
    translate: 0 15%;
    margin: 0 6%;
}

.container {
    color: var(--light-green);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: .8rem;
    margin: 0 auto;
    padding: .8rem 0;
}

.bg-card {
    margin: 4% auto;
    border: var(--lightest-grey) solid 1px;
    background-color: var(--darker-grey);
    border-radius: .5rem;
}

.container p:nth-child(1) {
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;
}

.gradient {
    background: -webkit-linear-gradient(0deg, var(--light-green), var(--dark-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gray {
    color: var(--lightest-grey);
}

.var(--white) {
    color: var(--var(--white));
}
</style>
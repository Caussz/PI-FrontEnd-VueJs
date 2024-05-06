<script setup>
import { ArrowRight } from '../../icons/index.js'

const props = defineProps({
    subject: String,
    desc: String,
    date: String
})
</script>

<template>
    <div class="cards-container">
        <div class="container">
            <div class="infos">
                <p> {{ props.subject }}</p>
                <p>{{ props.desc }}</p>
            </div>
            <div class="card-bottom">
                <p>{{ props.date }}</p>
                <button>
                    <ArrowRight size="18" />
                </button>
            </div>
        </div>
        <div class="container">
            <div class="infos">
                <p> {{ props.subject }}</p>
                <p>{{ props.desc }}</p>
            </div>
            <div class="card-bottom">
                <p>{{ props.date }}</p>
                <button>
                    <ArrowRight size="18" />
                </button>
            </div>
        </div>
        <div class="container">
            <div class="infos">
                <p> {{ props.subject }}</p>
                <p>{{ props.desc }}</p>
            </div>
            <div class="card-bottom">
                <p>{{ props.date }}</p>
                <button>
                    <ArrowRight size="18" />
                </button>
            </div>
        </div>
        <div class="container">
            <div class="infos">
                <p> {{ props.subject }}</p>
                <p>{{ props.desc }}</p>
            </div>
            <div class="card-bottom">
                <p>{{ props.date }}</p>
                <button>
                    <ArrowRight size="18" />
                </button>
            </div>
        </div>
        <div class="container">
            <div class="infos">
                <p> {{ props.subject }}</p>
                <p>{{ props.desc }}</p>
            </div>
            <div class="card-bottom">
                <p>{{ props.date }}</p>
                <button>
                    <ArrowRight size="18" />
                </button>
            </div>
        </div>
        <div class="container">
            <div class="infos">
                <p> {{ props.subject }}</p>
                <p>{{ props.desc }}</p>
            </div>
            <div class="card-bottom">
                <p>{{ props.date }}</p>
                <button>
                    <ArrowRight size="18" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards-container{
    overflow-x: hidden;
    display: flex;
    width: 108%;
    gap: 1rem;
}

.container {
    color: #99B898;
    width: 35%;
    height: 6rem;
    margin: 2% 0 5% 0;
    border: #505050 solid 1px;
    background-color: #242424;
    padding: 5%;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container p {
    color: #FFFFFF;
}

.container p:nth-child(1) {
    font-weight: 500;
}

.container p:nth-child(2) {
    font-size: .6rem;
    font-weight: 300;
}

.infos {
    overflow-x: hidden;
}

.card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-bottom p {
    font-size: .6rem;
}

button {
    background: linear-gradient(#99B898, #445244);
    color: #242424;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .4rem;
}

button span {
    translate: 0 10%;
}
</style>
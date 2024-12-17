<script setup>
import { Magnify } from '@/components/icons';
</script>

<template>
    <label class="search-component">
        <Magnify />
        <input type="text" placeholder="Pesquisa">
    </label>
</template>

<style scoped>
.search-component {
    background-color: #242424;
    border: #505050 solid 1px;
    border-radius: 2rem;
    max-width: 100%;
    color: #fff;
    display: flex;
    padding: .5rem 1rem;
    margin: .5rem 0 1rem 0;
    gap: .4rem;
}

.search-component span {
    translate: 0 .2rem;
}

input {
    background: none;
    color: #fff;
    outline: none;
}
</style>
<script setup>
import {LoadingComponent, DefaultLoginForm} from '@/components';
import { useScreen } from '@/composables';

const { isMobile } = useScreen()
</script>

<template>
    <main>
        <LoadingComponent v-if="isMobile"/>
        <DefaultLoginForm />
    </main>
</template>
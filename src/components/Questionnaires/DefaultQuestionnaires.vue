<script setup>
import DesktopQuestionnaires from "./Desktop/DesktopQuestionnaires.vue";
import MobileQuestionnaire from "./Mobile/MobileQuestionnaire.vue";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <nav>
        <MobileQuestionnaire v-if="isMobile" />
        <DesktopQuestionnaires v-else />
    </nav>
</template>

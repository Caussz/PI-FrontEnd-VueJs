<script setup>
import DesktopTasks from "./Desktop/DesktopTasks.vue";
import MobileTasks from "./Mobile/MobileTasks.vue";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <nav>
        <MobileTasks v-if="isMobile" />
        <DesktopTasks v-else />
    </nav>
</template>

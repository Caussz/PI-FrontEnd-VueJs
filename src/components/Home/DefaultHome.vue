<script setup>
import DesktopHome from "./Desktop/DesktopHome.vue";
import MobileHome from "../Home/Mobile/MobileHome.vue";
import { useScreen } from "@/composables";
import { onMounted } from "vue";

import { useUserStore } from '@/stores'

const { isMobile } = useScreen();

const userStore = useUserStore()

onMounted(async() => {
    await userStore.getGrades('vcaua', '251006Cc$', "1")
    console.log('ok');
    console.log(userStore.userGrades.grades);

})
</script>

<template>
    <nav>
        <MobileHome v-if="isMobile" />
        <DesktopHome v-else />
    </nav>
</template>

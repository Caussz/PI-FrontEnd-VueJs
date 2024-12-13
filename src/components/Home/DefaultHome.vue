<script setup>
import DesktopHome from "./Desktop/DesktopHome.vue";
import MobileHome from "../Home/Mobile/MobileHome.vue";
import { useScreen } from "@/composables";
import { onMounted } from "vue";

import { useGradesStore, useStudentStore } from '@/stores'

const { isMobile } = useScreen();

const gradesStore = useGradesStore()
const studentStore = useStudentStore()

onMounted(async() => {
    await gradesStore.getGrades(studentStore.studentName, studentStore.studentPass , "1")
    ('ok');
    (gradesStore.grades.grades);

})
</script>

<template>
    <nav>
        <MobileHome v-if="isMobile" />
        <DesktopHome v-else />
    </nav>
</template>

import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

import { GradeService } from '@/services';

import { computed } from 'vue';

export const useGradesStore = defineStore('grades', () => {

    const allGrades = useStorage('grades', {
        grades: [],
        photo: '',
        loading: false
    });

    const gradesComputed = computed(() => allGrades.value.grades);

    const getGrades = async (name, pass, index) => {
        allGrades.value.loading = true
        const { grades, studentInfo } = await GradeService.getGradesInfo(name, pass, index)
        allGrades.value.grades = grades
        allGrades.value.photo = studentInfo?.photo
        allGrades.value.loading = false
    }

    return { getGrades, allGrades, gradesComputed };
});

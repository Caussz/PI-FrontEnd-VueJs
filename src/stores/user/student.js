import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

export const useStudentStore = defineStore('student', () => {

    const student = useStorage('student', {
        name: '',
        loggedStatus: 0,
        pass: ''
    })

    const studentName = computed(() => student.value.name)
    const studentPass = computed(() => student.value.pass)

    const setStudent = ((user, pass) => {
        student.value.name = user
        student.value.pass = pass
    })

    return { studentName, studentPass, student, setStudent };
});

import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

import { AuthService } from '@/services';

import { convertImage } from '@/helpers';
import { computed } from 'vue';

export const useUserStore = defineStore('user', () => {


	const user = useStorage('user', {
		name: '',
		status: '',
		course: '',
		photo: null,
		loggedStatus: 0
	})

	const userGrades = useStorage('grades', {
		grades: null,
		photo: ''
	});

	const gradesComputed = computed(() => userGrades.value.grades);

	function getUserImage(image) {
		const userImage = convertImage(image);
		user.value.photo = userImage;
	};

	function getinfo(info) {
		user.value = info;
		user.value.loggedIn = true
	};

	const getGrades = async (name, pass, index) => {
		const {grades, studentInfo} = await AuthService.getGradesInfo(name, pass, index)
		userGrades.value.grades = grades
		userGrades.value.photo = studentInfo?.photo
	}

	const login = async (name, pass) => {
		try {
			const { studentInfo } = await AuthService.getUserInfo(name, pass);
			getinfo(studentInfo);
			getUserImage(studentInfo?.photo);
			getUserFormat(studentInfo?.name);
			return true
		} catch (error) {
			console.log(error);
			return false
		}
	  };

	function getUserFormat(name) {
		const [matricula, nome] = name.split(' - ');

		const nomeFormatado = nome
			.toLowerCase()
			.split(' ')
			.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
			.join(' ');

		user.value.name = nomeFormatado;
		user.value.matricula = matricula.trim();
	};

	return { user, getUserImage, getinfo, getUserFormat, login, getGrades, userGrades, gradesComputed };
});

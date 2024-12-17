import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

import { AuthService } from '@/services';

import { convertImage } from '@/helpers';

export const useUserStore = defineStore('user', () => {


	const user = useStorage('user', {
		name: '',
		status: '',
		course: '',
		photo: null,
		loggedStatus: 0,
		loading: false
	})

	const loading = computed(() => user.value.loading)

	function getUserImage(image) {
		const userImage = convertImage(image);
		user.value.photo = userImage;
	};

	function getinfo(info) {
		user.value = info;
		user.value.loggedIn = true
	};

	const login = async (name, pass) => {
		try {
			user.value.loading = true
			const studentInfo = await AuthService.getUserInfo(name, pass);
			getinfo(studentInfo);
			getUserImage(studentInfo?.photo);
			getUserFormat(studentInfo?.name);
			user.value.loading = false
			return true
		} catch (error) {
			(error);
			user.value.loading = false
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

	return { user, getUserImage, getinfo, getUserFormat, login, loading };
});

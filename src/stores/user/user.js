import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

import { convertImage } from '@/helpers';

export const useUserStore = defineStore('user', () => {

  const user = useStorage('user', {
    name: '',
    status: '',
    course: '',
    photo: null
  })

function getUserImage(image) {
    const userImage = convertImage(image);
    user.value.photo = userImage;
};

function getinfo(info) {
    user.value = info;
    user.value.loggedIn = true
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

  return { user, getUserImage, getinfo, getUserFormat };
});

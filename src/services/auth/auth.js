import axios from 'axios';
import { useUserStore } from '@/stores';

const userStore = useUserStore();
class AuthService {
  async getUserInfo(user, pass) {
    try {
      const response = await axios.get('http://localhost:7000/sigaa/student/', {
        params: {
          user,
          pass
        }
      });
      userStore.user.loggedStatus = 1;
      return response.data;
    } catch (error) {
      console.error('Erro ao obter as notas:', error);
      throw error;
    }
  }
}

export default new AuthService();

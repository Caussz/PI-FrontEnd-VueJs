import axios from 'axios';
import { useUserStore } from '@/stores';

class AuthService {
  async getUserInfo(user, pass) {

    const userStore = useUserStore();
    try {
      const { data } = await axios.get('http://localhost:3000/api/sigaa/student', {
        params: {
          user,
          pass
        }
      });
      userStore.user.loggedStatus = 1;
      return data;
    } catch (error) {
      console.error('Erro ao obter as informacoes:', error);
      throw error;
    }
  }

  async getGradesInfo(user, pass, index) {
    try {
      const { data } = await axios.get('http://localhost:3000/api/sigaa/notas', {
        params: {
          user,
          pass,
          index
        }
      });
      return data;
    } catch (error) {
      console.error('Erro ao obter as notas:', error);
      throw error;
    }
  }
}

export default new AuthService();

import axios from 'axios';

class AuthService {
  async getUserInfo(user, pass) {
    try {
      const response = await axios.get('http://localhost:7000/sigaa/student/', {
        params: {
          user,
          pass
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter as notas:', error);
      throw error;
    }
  }
}

export default new AuthService();

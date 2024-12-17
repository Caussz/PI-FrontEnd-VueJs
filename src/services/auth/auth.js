import axios from 'axios';

class AuthService {
  async getUserInfo(username, password) {

    try {
      const { data } = await axios.get('https://backend-pi-e6a356cd1d5a.herokuapp.com/api/students/', {
        params: {
          username,
          password
        }
      });
      return data;
    } catch (error) {
      console.error('Erro ao obter as informacoes:', error);
      throw error;
    }
  }

  async getGradesInfo(username, password, index) {
    try {
      const { data } = await axios.get('https://backend-pi-e6a356cd1d5a.herokuapp.com/api/grades/', {
        params: {
          username,
          password,
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

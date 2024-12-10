import axios from 'axios';

class GradeService {

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

export default new GradeService();

import AxiosService from '@/services/AxiosService';


const ApiService = {
  async fetchScoreBoard() {
    return AxiosService.get('/scores');
  }
}

export default ApiService;

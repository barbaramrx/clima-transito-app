import Api from './Api.js';

class ApiService extends Api {
  constructor() {
    super('/api/weather');
  }

  getStop(stop) {
    return this.get(`/parada/${stop}`);
  }
}

export default ApiService;

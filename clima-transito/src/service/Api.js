import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://api-transito.test/',
});

class Api {
  constructor(apiurl) {
    this.apiurl = apiurl;
  }

  get(url) {
    const finalUrl = `${this.apiurl}${url}`;
    return httpClient.get(finalUrl);
  }
}

export default Api;

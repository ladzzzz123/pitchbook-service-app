import axios from 'axios';
import config from '../config';

export default {
  getAllOffices() {
    return new Promise((resolve, reject) => {
      axios.get(`${config.host}${config.api.offices.getAll}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
    });
  }
};

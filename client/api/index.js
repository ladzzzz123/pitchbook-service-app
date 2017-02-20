import axios from 'axios';
import config from '../config';

export default {
  getAllOffices() {
    return new Promise((resolve, reject) => {
      axios.get(`${config.host}${config.api.offices.getAll}`)
      .then((response) => {
        if (response.data.status) {
          resolve(response.data.offices);
        } else {
          reject(response.description);
        }
      })
      .catch(error => reject(error));
    });
  }
};

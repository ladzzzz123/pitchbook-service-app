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
          reject(response.data.description);
        }
      })
      .catch(error => reject(error));
    });
  },

  officeCreate(officeData) {
    return new Promise((resolve, reject) => {
      axios.post(`${config.host}${config.api.office.create}`, officeData)
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          resolve(response.data.office);
        } else {
          reject(response.data.description);
        }
      })
      .catch(error => reject(error));
    });
  }
};

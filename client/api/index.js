import axios from 'axios';
import config from '../config';

export default {
  getAllOffices() {
    return new Promise((resolve, reject) => {
      axios.get(config.api.offices.getAll)
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

  createOffice(officeData) {
    return new Promise((resolve, reject) => {
      axios.post(config.api.office.create, officeData)
      .then((response) => {
        if (response.data.status) {
          resolve(response.data.office);
        } else {
          reject(response.data.description);
        }
      })
      .catch(error => reject(error));
    });
  },

  updateOffice(officeData) {
    return new Promise((resolve, reject) => {
      axios.post(config.api.office.update, officeData)
      .then((response) => {
        if (response.data.status) {
          resolve(response.data.office);
        } else {
          reject(response.data.description);
        }
      })
      .catch(error => reject(error));
    });
  },

  deleteOffice(officeID, reasonOfDelete) {
    return new Promise((resolve, reject) => {
      axios.post(config.api.office.delete, {
        id: officeID,
        reasonOfDelete
      })
      .then((response) => {
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

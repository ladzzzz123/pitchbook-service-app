import AppConstants from '../constants/AppConstants';
import api from '../api';

export default {
  showNewOfficeForm() {
    return (dispatch) => {
      dispatch({
        type: AppConstants.SHOW_NEW_OFFICE_FORM,
        payload: {
          isShowNewOfficeForm: true
        }
      });
    };
  }
};

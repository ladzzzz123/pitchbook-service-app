import AppConstants from '../constants/AppConstants';
import api from '../api';

export default {
  officeEditStart(officeID) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.OFFICE_EDIT_START,
        payload: {
          editItemID: officeID
        }
      });
    };
  },
  officeEditFinish(officeID) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.OFFICE_EDIT_FINISH
      });
    };
  }
};

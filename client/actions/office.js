import AppConstants from '../constants/AppConstants';
import api from '../api';

export default {
  createOffice(officeData) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.CREATE_OFFICE_REQUEST
      });

      api.officeCreate(officeData)
      .then((office) => {
        dispatch({
          type: AppConstants.CREATE_OFFICE_SUCCESS,
          payload: {
            item: office
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: AppConstants.CREATE_OFFICE_FAIL
        });

        dispatch({ type: AppConstants.ADD_ERROR, error: err });
      });
    };
  },
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

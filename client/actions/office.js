import AppConstants from '../constants/AppConstants';
import api from '../api';

export default {
  createOffice(officeData) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.CREATE_OFFICE_REQUEST
      });

      api.createOffice(officeData)
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

  updateOffice(officeData) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.UPDATE_OFFICE_REQUEST
      });

      api.updateOffice(officeData)
      .then((office) => {
        dispatch({
          type: AppConstants.UPDATE_OFFICE_SUCCESS,
          payload: {
            item: office
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: AppConstants.UPDATE_OFFICE_FAIL
        });

        dispatch({ type: AppConstants.ADD_ERROR, error: err });
      });
    };
  },

  deleteOffice(officeID, reasonOfDelete) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.DELETE_OFFICE_REQUEST
      });

      api.deleteOffice(officeID, reasonOfDelete)
      .then((deletedOffice) => {
        dispatch({
          type: AppConstants.DELETE_OFFICE_SUCCESS,
          payload: {
            item: deletedOffice
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: AppConstants.DELETE_OFFICE_FAIL
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

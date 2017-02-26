import AppConstants from '../constants/AppConstants';
import api from '../api';

export default {
  getAllOffices() {
    return (dispatch) => {
      dispatch({
        type: AppConstants.GET_OFFICES_REQUEST
      });

      api.getAllOffices()
      .then((data) => {
        dispatch({
          type: AppConstants.GET_OFFICES_SUCCESS,
          payload: {
            items: data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: AppConstants.GET_OFFICES_FAIL
        });

        dispatch({ type: AppConstants.ADD_ERROR, error: err });
      });
    };
  },
};

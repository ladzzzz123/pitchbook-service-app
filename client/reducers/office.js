import AppConstants from '../constants/AppConstants';

const initialState = {
  item: {},
  editItemID: null
};

export default function projects(state = initialState, action) {
  switch (action.type) {

    case AppConstants.OFFICE_EDIT_START:
    case AppConstants.CREATE_OFFICE_SUCCESS:
    case AppConstants.UPDATE_OFFICE_SUCCESS:
    case AppConstants.DELETE_OFFICE_SUCCESS:
      return { ...state, ...action.payload };

    case AppConstants.CREATE_OFFICE_FAIL:
    case AppConstants.UPDATE_OFFICE_FAIL:
    case AppConstants.DELETE_OFFICE_FAIL:
      return { ...state, item: {} };

    case AppConstants.OFFICE_EDIT_FINISH:
      return { ...state, editItemID: null };

    default:
      return state;
  }
}

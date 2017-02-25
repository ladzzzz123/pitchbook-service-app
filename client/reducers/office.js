import AppConstants from '../constants/AppConstants';

const initialState = {
  editItemID: null
};

export default function projects(state = initialState, action) {
  switch (action.type) {

    case AppConstants.OFFICE_EDIT_START:
      return { ...state, ...action.payload };

    case AppConstants.OFFICE_EDIT_FINISH:
      return { ...state, editItemID: null };

    default:
      return state;
  }
}

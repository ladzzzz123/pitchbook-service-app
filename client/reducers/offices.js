import AppConstants from '../constants/AppConstants';

const initialState = {
  items: []
};

export default function projects(state = initialState, action) {
  switch (action.type) {

    case AppConstants.GET_OFFICES_SUCCESS:
      return { ...state, ...action.payload };

    case AppConstants.GET_OFFICES_FAIL:
      return { ...state, items: [] };

    default:
      return state;
  }
}

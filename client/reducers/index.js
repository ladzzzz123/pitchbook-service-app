import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import offices from './offices';
import office from './office';
import errors from './errors';

export default combineReducers({
  routing: routerReducer,
  offices,
  office,
  errors
});

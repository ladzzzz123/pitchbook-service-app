import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import offices from './offices';
import errors from './errors';

export default combineReducers({
  routing: routerReducer,
  offices,
  errors
});

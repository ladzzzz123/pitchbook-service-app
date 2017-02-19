import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import errors from './errors';

export default combineReducers({
  routing: routerReducer,
  errors
});

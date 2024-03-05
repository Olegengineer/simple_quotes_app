import { combineReducers } from 'redux'
import quotesReducer from './quotesReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  quotesReducer,
  modalReducer
})

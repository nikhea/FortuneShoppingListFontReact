import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import categorieReducer from './categorieReducer';
export default combineReducers({
	ItemReducer,
	categorieReducer
});

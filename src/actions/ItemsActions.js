import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, ITEMS_LOADING } from './Types';
import axios from 'axios';
const url = `http://localhost:3000/api/routes/categories`;
export const getItem = (_id) => async (dispatch) => {
	const res = await axios.get(`${url}/${_id}/Items`)
	// console.log(res)
	dispatch({
		type: GET_ITEMS,
		payload:res.data
	})
};

export const deleteItem = (_id) => async(dispatch) => {
	return {
		type: REMOVE_ITEM,
		payload: _id
	};
};

export const addItem = (item) => async(dispatch) => {
	return {
		type: ADD_ITEM,
		payload: item
	};
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};

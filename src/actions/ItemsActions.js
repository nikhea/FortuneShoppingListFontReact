import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, ITEMS_LOADING } from './Types';
import { url } from './Url';
import axios from 'axios';
// const url = `http://localhost:3000/api/routes/categories`;
export const getItem = (_id) => async (dispatch) => {
	const res = await axios.get(`${url}/${_id}/Items`);
	try {
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		});
	} catch (error) {}
};

export const removeItem = (cId, Iid) => async (dispatch) => {
	const res = await axios.delete(`${url}/${cId}/Items/${Iid}`);
	console.log(cId, Iid);
	try {
		dispatch({
			type: REMOVE_ITEM,
			payload: res.data
		});
	} catch (error) {}
};

export const addItem = (item) => async (dispatch) => {
	console.log(item);
	dispatch({
		type: ADD_ITEM,
		payload: item
	});
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};

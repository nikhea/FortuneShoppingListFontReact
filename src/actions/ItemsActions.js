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
	try {
		dispatch({
			type: REMOVE_ITEM,
			payload: res.data
		});
	} catch (error) {}
};

export const addItem = (item, _id) => async (dispatch) => {
	console.log(_id);
	let { name, price, itemImage } = item;
	let data = new FormData();
	data.append('name', name);
	data.append('price', price);
	data.append('itemImage', itemImage);
	// for (const iterator of data.entries()) {
	// 	console.log(iterator);
	// }

	const config = {
		headers: {
			'Content-type': 'multipart/form-data'
		}
	};
	const res = await axios.post(`${url}/${_id}/Items`, data, config);
	console.log(res.data);
	try {
		dispatch({
			type: ADD_ITEM,
			payload: res.data
		});
	} catch (error) {}
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};

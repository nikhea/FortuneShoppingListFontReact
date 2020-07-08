import { GET_CATEGORIES, ADD_CATEGORIE, REMOVE_CATEGORIE, CATEGORIES_LOADING } from './Types';
import axios from 'axios';
const url = `http://localhost:3000/api/routes/categories`;
export const getCATEGORIES = () => async (dispatch) => {
	const res = await axios.get(url);
	try {
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data
		});
	} catch (error) {}
};

export const removeCATEGORIE = (_id) => async (dispatch) => {
	const res = await axios.delete(`${url}/${_id}`);
	try {
		dispatch({
			type: REMOVE_CATEGORIE,
			payload: res.data
		});
	} catch (error) {}
};

export const addCATEGORIE = (categories) => async (dispatch) => {
	const res = await axios.post(url, categories);
	try {
		dispatch({
			type: ADD_CATEGORIE,
			payload: res.data
		});
	} catch (error) {}
};

export const setCategoriesLoading = () => {
	return {
		type: CATEGORIES_LOADING
	};
};

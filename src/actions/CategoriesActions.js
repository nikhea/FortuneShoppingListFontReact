
import axios from 'axios';
import {url} from './Url'
import { GET_CATEGORIES, GET_ONE_CATEGORIES, ADD_CATEGORIE, REMOVE_CATEGORIE, CATEGORIES_LOADING } from './Types';


// const url = `http://localhost:3000/api/routes/categories`;


export const getCATEGORIES = () => async (dispatch) => {
	const res = await axios.get(url);
	try {
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data
		});
	} catch (error) {}
};
export const getONECATEGORIES = (_id) => async (dispatch) => {
	const res = await axios.get(`${url}/${_id}`);
	try {
		dispatch({
			type: GET_ONE_CATEGORIES,
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
	console.log(categories);
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

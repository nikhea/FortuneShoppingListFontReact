import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, ITEMS_LOADING } from './Types';
import axios from 'axios';
export const getItem = () => (dispatch) => {
	return {
		type: GET_ITEMS
	};
};

export const deleteItem = (_id) => (dispatch) => {
	return {
		type: REMOVE_ITEM,
		payload: _id
	};
};

export const addItem = (item) => (dispatch) => {
	return {
		type: ADD_ITEM,
		payload: item
	};
};

export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
    }
}
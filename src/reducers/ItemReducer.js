// import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, ITEMS_LOADING } from '../actions/Types';

export const initialState = {
	items: [],
	item: {},
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state,
				items: action.payload,
				isLoading: true
			};
		case ADD_ITEM:
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};
		// case REMOVE_ITEM:
		// 	return {
		// 		...state,
		// 		items: state.items.filter((item) => item._id !== action.payload)
		// 	};
		default:
			return {
				...state
			};

		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			};
	}
}

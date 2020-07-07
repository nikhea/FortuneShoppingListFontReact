import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM } from '../actions/Types';

export const initialState = {
	items: [
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Steak' },
		{ id: uuid(), name: 'Water' }
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
			break;
		case ADD_ITEM:
			return {
				...state,
				articles: [ action.payload, ...state.items ]
			};
			break;
		case REMOVE_ITEM:
			return {
				...state,
				articles: state.items.filter((item) => item._id !== action.payload)
			};
		default:
			return state;
	}
}

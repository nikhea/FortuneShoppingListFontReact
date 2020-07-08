import { GET_CATEGORIES, ADD_CATEGORIE, REMOVE_CATEGORIE, CATEGORIES_LOADING } from '../actions/Types';

const initailState = {
	categories: [],
	isLoading: false
};

export default (state = initailState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
				// isLoading: false
				isLoading: true
			};
		case CATEGORIES_LOADING:
			return {
				...state,
				isLoading: true
			}
		case ADD_CATEGORIE:
			return {
				...state,
				articles: [ action.payload, ...state.items ]
			};
		case REMOVE_CATEGORIE:
			return {
				...state,
				articles: state.items.filter((item) => item._id !== action.payload)
			};
		default:
			return { ...state };
	}
};

import {
	GET_PRODUCTS_REQUEST_SUCCESS,
	REMOVE_PRODUCT_FROM_LOCAL
} from "../actions/product";

const INITIAL_STATE = [];

export default function productsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST_SUCCESS: {
			return action.payload;
		}
		case REMOVE_PRODUCT_FROM_LOCAL: {
			return action.payload;
		}
		default:
			return state;
	}
}

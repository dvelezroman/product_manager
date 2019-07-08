import { remove } from "lodash";

import {
	GET_PRODUCTS_REQUEST_SUCCESS,
	REMOVE_PRODUCT_FROM_LOCAL,
	INSERT_PRODUCT_TO_LOCAL
} from "../actions/product";

const INITIAL_STATE = [];

export default function productsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST_SUCCESS: {
			return action.payload;
		}
		case INSERT_PRODUCT_TO_LOCAL: {
			return [...state, action.payload];
		}
		case REMOVE_PRODUCT_FROM_LOCAL: {
			let products = [...state];
			remove(products, product => product.lotId === action.payload);
			return [...products];
		}
		default:
			return state;
	}
}

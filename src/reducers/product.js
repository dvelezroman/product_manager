import { remove } from "lodash";

import {
	GET_PRODUCTS_REQUEST_SUCCESS,
	REMOVE_PRODUCT_FROM_LOCAL,
	INSERT_PRODUCT_TO_LOCAL,
	SORT_PRODUCTS_LIST,
	FILTER_PRODUCTS_LIST
} from "../actions/product";

const INITIAL_STATE = {
	products: [],
	filtered: []
};

export default function productsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST_SUCCESS: {
			return { products: [...action.payload], filtered: [...action.payload] };
		}
		case INSERT_PRODUCT_TO_LOCAL: {
			return {
				products: [...state.products, action.payload],
				filtered: [...state.products, action.payload]
			};
		}
		case REMOVE_PRODUCT_FROM_LOCAL: {
			let products = [...state.products];
			remove(products, product => product.lotId === action.payload);
			return { products: [...products], filtered: [...products] };
		}
		case SORT_PRODUCTS_LIST: {
			return { products: [...action.payload], filtered: [...action.payload] };
		}
		case FILTER_PRODUCTS_LIST: {
			return { filtered: [...action.payload], products: [...state.products] };
		}
		default:
			return state;
	}
}

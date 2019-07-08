import {
	GET_PRODUCTS_REQUEST,
	// GET_PRODUCTS_REQUEST_FAILURE,
	GET_PRODUCTS_REQUEST_SUCCESS,
	REMOVE_PRODUCT_FROM_LOCAL,
	INSERT_PRODUCT_TO_LOCAL,
	SORT_PRODUCTS_LIST
} from "../actions/product";

// this action, gets the products from the API, using the ProductDAO in the saga
export const getProductsRequest = () => ({
	type: GET_PRODUCTS_REQUEST
});
// once I get the products, this action load the data in the Product Reducer
export const getProductsRequestSuccess = data => ({
	type: GET_PRODUCTS_REQUEST_SUCCESS,
	payload: data
});

export const removeProductFromLocal = lotId => ({
	type: REMOVE_PRODUCT_FROM_LOCAL,
	payload: lotId
});

export const insertProductToLocal = product => ({
	type: INSERT_PRODUCT_TO_LOCAL,
	payload: product
});

export const sortProductsList = list => ({
	type: SORT_PRODUCTS_LIST,
	payload: list
});

// export const getProductsRequestFailure = data => ({
// 	type: GET_PRODUCTS_REQUEST_FAILURE,
// 	payload: data
// });

import {
	GET_PRODUCTS_REQUEST,
	// GET_PRODUCTS_REQUEST_FAILURE,
	GET_PRODUCTS_REQUEST_SUCCESS,
	REMOVE_PRODUCT_FROM_LOCAL
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

export const removeProductFromLocal = productId => ({
	type: REMOVE_PRODUCT_FROM_LOCAL,
	payload: productId
});

// export const getProductsRequestFailure = data => ({
// 	type: GET_PRODUCTS_REQUEST_FAILURE,
// 	payload: data
// });

import { call, put } from "redux-saga/effects";
import { ProductDAO } from "../dao/ProductDAO";
// import uuid from "uuid-js";

import { getProductsRequestSuccess } from "../action-creators/product";

const getAll = async () => {
	try {
		const response = await ProductDAO.get();
		return response.data; // return the array of products
	} catch (error) {
		console.log(error);
		throw new Error("Error in retrieving products");
	}
};

export function* workerProduct(values) {
	try {
		const products = yield call(getAll);
		yield put(getProductsRequestSuccess(products));
	} catch (error) {
		console.log(error);
	}
}

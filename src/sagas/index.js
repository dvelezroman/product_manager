import { takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS_REQUEST } from "../actions/product";
import { workerProduct } from "./product";

export default function* watcher() {
	// listen and catch the events
	yield takeEvery(GET_PRODUCTS_REQUEST, workerProduct);
}

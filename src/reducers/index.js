import { combineReducers } from "redux";
import productsReducer from "./product";

export const appReducer = combineReducers({
	product: productsReducer
});

export default (state, action) => {
	return appReducer(state, action);
};

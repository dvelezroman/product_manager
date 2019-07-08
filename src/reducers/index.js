import { combineReducers } from "redux";
import productsReducer from "./product";
import workingReducer from "./working";

export const appReducer = combineReducers({
	productsReducer,
	workingReducer
});

export default (state, action) => {
	return appReducer(state, action);
};

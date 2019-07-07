import { WORKING } from "../actions/working";

const INITIAL_STATE = false;

export default function workingReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case WORKING: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}

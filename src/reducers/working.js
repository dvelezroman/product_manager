import { WORKING } from "../actions/working";

const INITIAL_STATE = {
	status: false,
	progress: 0
};

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

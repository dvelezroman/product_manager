import { WORKING } from "../actions/working";

export const setWorking = value => ({
	type: WORKING,
	payload: value
});

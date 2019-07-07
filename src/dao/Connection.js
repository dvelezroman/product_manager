import axios from "axios";
import { API_URL } from "../config/default";

export class Connection {
	static get(endpoint) {
		console.log(API_URL + endpoint);
		return axios.get(API_URL + endpoint);
	}

	static post(endpoint, body) {
		return axios.post(this.getUrl(endpoint), body);
	}
}

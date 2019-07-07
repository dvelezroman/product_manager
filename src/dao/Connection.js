import axios from "axios";

export class Connection {
	constructor(urlBase) {
		this.urlBase = urlBase;
	}

	getUrl(endpoint) {
		return this.urlBase + endpoint;
	}

	get(endpoint, body) {
		return axios.get(getUrl(endpoint));
	}

	post(endpoint, body) {
		return axios.post(getUrl(endpoint), body);
	}
}

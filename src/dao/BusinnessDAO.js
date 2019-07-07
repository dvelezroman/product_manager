import { filter } from "lodash";

import { Connection } from "Connection";

export class Businness {
	constructor(endpoints, pk, name) {
		this.pk = pk;
		this.name = name;
		this.endpoints = endpoints;
	}

	/* 
       @description Returns the parsed response from API
       @response {object} data returned by the API
       @returns {object} a parsed object
    */

	parseResponse(response) {
		return {
			status: true,
			[this.name]: response
		};
	}

	getAll(endpoint, body = {}) {
		try {
			const response = Connection.get(endpoint);
			return this.parseResponse(response.data);
		} catch (error) {
			return {
				status: error.response.status,
				data: error.response.data,
				msg: "Error"
			};
		}
	}

	/* 
       @description Returns a filtered array from the original data collection
       @param  {collection} data
       @param {string} field
       @param {any} value, depends of typedef
       @returns {collection} Returns a filtered array
    */

	static filterBy(data, field, value) {
		return filter(data, item => {
			return item[field] === value;
		});
	}

	/* 
       @description Returns an array sorted by one or many fields
       @param  {collection} data
       @param {collection} orderBy
       @param {collection} order
       @returns {collection} Returns a sorted array by fields in "orderBy"
       @summary This functions receives three arguments, the data to sorted, the fields to sort by, and the order array, that tell the function the direction of sorting 'asc' or 'desc'

    */

	static orderBy(data, orderBy, order = ["asc"]) {
		orderBy(data, [...orderBy], [...order]);
	}
}

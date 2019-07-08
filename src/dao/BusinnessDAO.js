import { filter } from "lodash";

import { Connection } from "./Connection";

export class BusinnessDAO {
	constructor(id, name, endpoints) {
		this.pk = id;
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

	async getAll() {
		try {
			const response = await Connection.get(this.endpoints.getAll);
			return this.parseResponse(response.data);
		} catch (error) {
			return {
				status: error.status,
				data: error.response,
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
		return orderBy(data, [...orderBy], [...order]);
	}
}

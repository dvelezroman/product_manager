import { BusinnessDAO } from "./BusinnessDAO";

const endpoints = {
	getAll: "",
	insert: "",
	update: "",
	delete: ""
};

class ProductDAORaw extends BusinnessDAO {
	constructor() {
		super("id", "product", endpoints);
	}
}

export const ProductDAO = new ProductDAORaw();

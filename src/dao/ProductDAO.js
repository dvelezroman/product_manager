import { BusinnessDAO } from "./BusinnessDAO";

const endpoints = {
	getAll: "/products",
	insert: "",
	update: "",
	delete: ""
};

class ProductDAORaw extends BusinnessDAO {
	constructor() {
		super("lotId", "products", endpoints);
	}
}

export const ProductDAO = new ProductDAORaw();

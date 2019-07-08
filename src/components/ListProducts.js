import React from "react";
import TableComponent from "./commons/TableComponent";

const headers = [
	"Batch Number",
	"Description",
	"Has Bulk",
	"Lot ID",
	"Name",
	"Type",
	"Has Retail",
	"Action"
];

const ListProducts = ({ products, deleteProduct }) => {
	return (
		<TableComponent
			headers={headers}
			data={products}
			deleteProduct={deleteProduct}
		/>
	);
};

export default ListProducts;

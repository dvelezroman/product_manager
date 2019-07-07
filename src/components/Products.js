import React from "react";

const Products = ({ products, working }) => (
	<div>
		<h2>{working ? "Loading..." : products.length}</h2>
	</div>
);

export default Products;

import React from "react";
import { Button } from "reactstrap";

const Products = ({ products, working }) => (
	<div>
		{working ? <h2>Loading...</h2> : <Button color="danger">Danger!</Button>}
	</div>
);

export default Products;

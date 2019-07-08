import React from "react";
import { Spinner } from "reactstrap";
import ListProducts from "./ListProducts";
import FormComponent from "./commons/FormComponent";

const Products = ({
	formData,
	data,
	working,
	onChange,
	onPress,
	deleteProduct
}) => (
	<div>
		<FormComponent onChange={onChange} onPress={onPress} formData={formData} />
		{working.status ? (
			<div className="container text-center">
				<Spinner />
			</div>
		) : (
			<div>
				<ListProducts products={data} deleteProduct={deleteProduct} />
			</div>
		)}
	</div>
);

export default Products;

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
	deleteProduct,
	sort,
	sortProducts
}) => (
	<div>
		<FormComponent onChange={onChange} onPress={onPress} formData={formData} />
		{working.status ? (
			<div className="container text-center">
				<Spinner />
			</div>
		) : (
			<div>
				<ListProducts
					products={data}
					deleteProduct={deleteProduct}
					sort={sort}
					sortProducts={sortProducts}
				/>
			</div>
		)}
	</div>
);

export default Products;

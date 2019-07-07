import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductsLogic } from "./ProductsLogic";
import { setWorking } from "../action-creators/working";
import { getProductsRequest } from "../action-creators/product";

import Products from "../components/Products";

class ProductContainer extends React.Component {
	constructor(props) {
		super(props);
		this.logic = new ProductsLogic(this);
	}

	componentDidMount() {
		this.logic.fetchProducts();
		this.props.setWorking(false);
	}

	render() {
		const { products, working } = this.props;
		console.log({ products });
		console.log({ working });
		return <Products products={products} />;
	}
}

const mapStateToProps = state => ({
	working: state.workingReducer,
	products: state.productsReducer
});

export function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			setWorking,
			getProductsRequest
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductContainer);

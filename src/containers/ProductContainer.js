import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductsLogic } from "./ProductsLogic";
import { setWorking } from "../action-creators/working";
import {
	getProductsRequest,
	insertProductToLocal,
	removeProductFromLocal
} from "../action-creators/product";

import Products from "../components/Products";
import Header from "../components/commons/Header";

class ProductContainer extends React.Component {
	constructor(props) {
		super(props);
		this.logic = new ProductsLogic(this);
	}

	render() {
		const { products, working } = this.props;
		return (
			<div className="container-fluid">
				<Header fetchProducts={this.logic.fetchProducts} />
				<Products
					formData={this.logic.state.formData}
					data={products}
					working={working}
					onChange={this.logic.onChange}
					onPress={this.logic.onPress}
					deleteProduct={this.logic.deleteProduct}
				/>
			</div>
		);
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
			getProductsRequest,
			insertProductToLocal,
			removeProductFromLocal
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductContainer);

export class ProductsLogic {
	constructor(Container) {
		this.setState = Container.setState.bind(Container);
		Container.state = {
			products: []
		};
		this.state = Container.state;
		this.props = Container.props;
		this.props.setWorking(true);
	}

	fetchProducts = () => {
		this.props.getProductsRequest();
	};
}

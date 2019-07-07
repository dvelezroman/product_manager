export class ProductsLogic {
	constructor(Container) {
		this.setState = Container.setState.bind(Container);
		Container.state = {
			products: []
		};
		this.state = Container.state;
		this.props = Container.props;
	}

	fetchProducts = async () => {
		this.props.setWorking(true);
		await this.props.getProductsRequest();
		setTimeout(() => this.props.setWorking(false), 1000); // the request is fast, so I have to set a timeout to simulate the fetching
	};
}

import { BusinnessDAO } from "../dao/BusinnessDAO";

export class ProductsLogic {
	constructor(Container) {
		this.setState = Container.setState.bind(Container);
		Container.state = {
			products: [],
			sort: "asc",
			formData: {
				name: "",
				descripton: "",
				type: "Indica",
				hasBulk: true,
				hasRetail: true,
				batchNumber: 0,
				lotId: 0
			}
		};
		this.state = Container.state;
		this.props = Container.props;
	}

	fetchProducts = async () => {
		this.props.setWorking({ status: true, progress: 25 });
		await this.props.getProductsRequest();
		setTimeout(
			() => this.props.setWorking({ status: false, progress: 0 }),
			1000
		); // the request is fast, so I have to set a timeout to simulate the fetching
	};

	onChange = (name, value) => {
		const { formData } = this.state;
		switch (name) {
			case "batchNumber" || "lotId": {
				formData[name] = value < 0 ? 0 : parseInt(value, 10);
				break;
			}
			default:
				formData[name] = value;
		}
		this.setState({ formData });
	};

	onPress = () => {
		const { formData } = this.state;
		this.props.setWorking(true);
		if (this.isComplete(formData)) {
			this.props.insertProductToLocal(formData);
		}
		this.props.setWorking(false);
	};

	sortProducts = (order = "asc") => {
		return BusinnessDAO.orderBy(this.props.products, "name", order);
	};

	deleteProduct = lotId => {
		this.props.setWorking(true);
		this.props.removeProductFromLocal(lotId);
		this.props.setWorking(false);
	};

	isComplete = formData => {
		if (
			formData.name !== "" &&
			formData.descripton !== "" &&
			formData.type !== "" &&
			formData.batchNumber &&
			formData.lotId > 0
		)
			return true;
		return false;
	};
}

import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Header = ({ fetchProducts }) => {
	return (
		<div>
			<Jumbotron style={{ paddingTop: 30, paddingBottom: 30 }}>
				<h1 className="display-3">Yobi Products</h1>
				<p className="lead">
					Press the Request Button to fetch the products from the API.
				</p>
				<p className="lead">
					<Button onClick={() => fetchProducts()} color="primary">
						Fetch Products
					</Button>
				</p>
			</Jumbotron>
		</div>
	);
};

export default Header;

import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import rootSaga from "./sagas/index";
import configureStore from "./store";

import { HashRouter, Route } from "react-router-dom";
import ProductContainer from "./containers/ProductContainer";

const { store } = configureStore(window.__INITIAL_STATE__, rootSaga);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<div>
						<Route exact path="/" component={ProductContainer} />
					</div>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;

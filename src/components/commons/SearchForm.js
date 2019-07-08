import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const SearchForm = ({ filter, searchString }) => {
	return (
		<Form
			inline
			style={{
				justifyContent: "space-between",
				paddingBottom: 20,
				flexWrap: "wrap"
			}}
		>
			<FormGroup>
				<Input
					type="text"
					name="search"
					id="search"
					placeholder="Search Product By Name"
					value={searchString}
					onChange={event => filter(event.target.value)}
				/>
			</FormGroup>
		</Form>
	);
};

export default SearchForm;

import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const FormComponent = ({ formData, onChange, onPress }) => {
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
					style={{ width: 70 }}
					type="number"
					name="batchNumber"
					id="batchNumber"
					placeholder="BatchNumber"
					value={formData.batchNumber}
					onChange={event => onChange("batchNumber", event.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="description"
					name="description"
					id="description"
					placeholder="Description"
					value={formData.description}
					onChange={event => onChange("descripton", event.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="select"
					name="hasBulk"
					id="hasBulk"
					value={formData.hasBulk}
					onChange={event => onChange("hasBulk", event.target.value)}
				>
					<option>True</option>
					<option>False</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Input
					style={{ width: 70 }}
					type="number"
					name="lotId"
					id="lotid"
					placeholder="Lot ID"
					value={formData.lotId}
					onChange={event => onChange("lotId", event.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="name"
					name="name"
					id="name"
					placeholder="Name"
					value={formData.name}
					onChange={event => onChange("name", event.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="select"
					name="type"
					id="type"
					value={formData.type}
					onChange={event => onChange("type", event.target.value)}
				>
					<option>Indica</option>
					<option>Sativa</option>
					<option>Hybrid</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Input
					type="select"
					name="hasRetail"
					id="hasRetail"
					value={formData.hasBulk}
					onChange={event => onChange("hasRetail", event.target.value)}
				>
					<option>True</option>
					<option>False</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Button color="primary" size="md" onClick={() => onPress()}>
					Add
				</Button>
			</FormGroup>
		</Form>
	);
};

export default FormComponent;

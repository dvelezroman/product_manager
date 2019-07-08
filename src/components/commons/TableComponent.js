import React from "react";
import { Table, Button } from "reactstrap";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const TableComponent = ({
	headers,
	data,
	deleteProduct,
	sortProducts,
	sort
}) => {
	return (
		<Table responsive style={{ overflowY: "auto", maxHeight: "200" }}>
			<thead>
				<tr key={"headerRow"} style={{ backgroundColor: "#b9b0b0" }}>
					<th key={`header_#`}>#</th>
					{headers.map((header, index) => (
						<th className="text-center" key={`header_${index}`}>
							<div className="col-sm-10">{`${header}  `}</div>
							{header === "Name" && (
								<div className="col-sm-2">
									<div onClick={() => sortProducts(true)}>
										<FaSortUp size="1em" />
									</div>
									<div onClick={() => sortProducts(false)}>
										<FaSortDown size="1em" />
									</div>
								</div>
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr
						key={`row_${item.name}`}
						style={{ backgroundColor: index % 2 ? "#d9ecd0" : "#c2d4dd" }}
					>
						<th scope="row">{index}</th>
						<td className="text-center">{item.batchNumber}</td>
						<td className="text-center">{item.descripton}</td>
						<td className="text-center">{item.hasBulk ? "True" : "False"}</td>
						<td className="text-center">{item.lotId}</td>
						<td className="text-center">{item.name}</td>
						<td className="text-center">{item.type}</td>
						<td className="text-center">{item.hasRetail ? "True" : "False"}</td>
						<td className="text-center" style={{ color: "red" }}>
							<Button
								style={{ backgroundColor: "red" }}
								onClick={() => deleteProduct(item.lotId)}
							>{`Delete`}</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TableComponent;

import React, { Component } from "react";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S9AddAnother extends Component {
	state = {
		table: [],
		postData2: [],
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ table: newProps.table });
		this.setState({ postData2: newProps.postData2 });
	};

	updateTableData = (index) => {
		this.props.deleteTableItem([...this.state.table.slice(0, index), ...this.state.table.slice(index + 1)]);

		var tempArray = this.state.postData2;
		tempArray.vehicles = [...tempArray.vehicles.slice(0, index), ...tempArray.vehicles.slice(index + 1)];
		this.props.deleteVehicleForPostData2(tempArray);
	};

	render() {
		return (
			<div className="container p-0 main-content-container4 mb-5">
				{/* <ProgressBar animated now={56} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center">
						<h1 className="heading">Add Another Vehicle?</h1>
						<p style={{ fontSize: "20px" }}>(Save Additional 20%)</p>
						<br />
						<br />
						<div className="row">
							<div className="text-center  p-2 col-md-6">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={() => this.props.goToStep(2)}
								>
									Yes
								</button>
							</div>
							<div className="text-center  p-2 col-md-6">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.props.nextStep}
								>
									No
								</button>
							</div>
						</div>
						<br />
						{this.state.table.length !== 0 &&
							this.state.table.map((entry, index) => (
								<div
									key={index}
									className="m-2 pt-2 pl-3 pr-3"
									style={{ border: "1px solid #d1d1d1", backgroundColor: "#F5F5F5", width: "100%" }}
								>
									<p style={{ textAlign: "left" }}>
										<span className="text-muted">{index + 1}&nbsp;|&nbsp;</span>
										<span style={{ fontWeight: "bold" }}>
											{entry.year} {entry.name} {entry.model}
										</span>
										<span
											style={{ float: "right", cursor: "pointer", textDecoration: "underline" }}
											onClick={() => this.updateTableData(index)}
										>
											Delete
										</span>
									</p>
								</div>
							))}
					</div>
				</div>
			</div>
		);
	}
}

export default S9AddAnother;

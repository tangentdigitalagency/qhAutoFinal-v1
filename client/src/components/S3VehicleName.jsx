import React, { Component } from "react";
import carQuery from "../Assets/carQuery.json";
import { Select, Progress } from "antd";
import axios from 'axios'
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';

const { Option } = Select;


class S3VehicleName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ""
		};
	}

	UNSAFE_componentWillReceiveProps = (newProps) => {
		/*var namesArray = [];
		carQuery.map(
			(data) =>
				data.model_year === newProps.year &&
				!namesArray.includes(data.model_make_id) &&
				namesArray.push(data.model_make_id)
		);
		this.setState({ names: namesArray });*/
		if (newProps.year > 0) {
			axios.post('https://qhautoformreact.herokuapp.com/getmake', { year: newProps.year })
				.then(res => {
					this.setState({ names: res.data });
				})
				.catch(err => console.log(err))
		}
	};

	createVehicleNameBoxes = () => {
		const arr = [];
		for (var i = 0; i < 16; i++) {
			arr.push(
				<div key={i} className="col-4 p-2">
					<button
						value={this.state.names[i]}
						id="carname"
						vehicleYear
						className="btn btn-outline-primary btn-font"
						style={{ width: "100%", height: "80px", textTransform: "capitalize" }}
						onClick={(e) => this.moveNext(e)}
					>
						{this.state.names[i]}
					</button>
				</div>
			);
		}
		return arr;
	};

	createVehicleNameSelect = () => {
		const arr = [];

		for (var i = 16; i < this.state.names.length; i++) {
			arr.push(
				<Option className="p-0" key={i} value={i}>
					<input
						type="button"
						className="select-bg"
						style={{ border: "none", width: "100%", height: "100%" }}
						value={this.state.names[i]}
						onClick={this.moveNext}
					/>
				</Option>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.vehicle_make(e.target.value);
		this.props.nameForVehicalModel(e.target.value);
	};
	render() {
		return (
			<div className="container pt-0 content-container main-content-container3 mb-5">
				{/* <ProgressBar animated now={18} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>
				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center vehicle-model-padding">
					<Progress percent={18} status="active" />
						<h1 className="heading">Vehicle Make</h1>
						<div className="row">{this.state.names.length !== 0 && this.createVehicleNameBoxes()}</div>
						<br />
						{this.state.names.length !== 0 && (
							<Select
								// style={{ width: "400px" }}
								size="large"
								placeholder="Other Makes"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toUpperCase()) >= 0
								}
							>
								{this.createVehicleNameSelect()}
							</Select>
						)}
					</div>
				</div>
			</div >
		);
	}
}

export default S3VehicleName;

import React, { Component } from "react";
import carQuery from "../Assets/carQuery.json";
import { Select, Progress } from "antd";
import axios from 'axios'
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const { Option } = Select;


class S3VehicleName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ""
		};
	}

	componentDidMount = () => {
		/*var namesArray = [];
		carQuery.map(
			(data) =>
				data.model_year === newProps.year &&
				!namesArray.includes(data.model_make_id) &&
				namesArray.push(data.model_make_id)
		);
		this.setState({ names: namesArray });*/
		console.log(this.props.year)
		if (this.props.year > 0) {
			axios.post('https://qhautoformreact.herokuapp.com/getmake', { year: this.props.year })
				.then(res => {
					this.setState({ names: res.data });
					console.log(res.data)
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
						// @ts-ignore
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
		// this.props.nextStep();
		this.props.vehicle_make(e.target.value);
		this.props.nameForVehicalModel(e.target.value);
		this.props.history.push("/step4")
	};
	render() {
		return (
			<div className="container pt-0 content-container main-content-container3 mb-5">
				<Progress percent={18} status="active" showInfo={false} className="pbar" />
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

  <Link to="/step2">
                        <Button type="primary" shape="circle"    >
                            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
                        </Button>
                        </Link>
				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center vehicle-model-padding">
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

export default withRouter(S3VehicleName);

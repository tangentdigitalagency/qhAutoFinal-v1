import React, { Component } from "react";
import carQuery from "../Assets/carQuery.json";
import axios from 'axios'
import CommonComponents from './CommonComponents';
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button,  } from 'antd';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import {Progress } from 'antd';
class S4VehicleModel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			models: "",
		};
	}

	/*UNSAFE_componentWillReceiveProps = (newProps) => {
		var modelsArray = [];
		carQuery.map(
			(data) =>
				data.model_make_id === newProps.searchModel.make &&
				data.model_year === newProps.searchModel.year &&
				!modelsArray.includes(data.model_name) &&
				modelsArray.push(data.model_name)
		);
		this.setState({ models: modelsArray });
	};*/

	componentDidMount = () => {
		axios.post('https://qhautoformreact.herokuapp.com/getmodel', { year: this.props.searchModel.year, make: this.props.searchModel.make })
			.then(res => this.setState({ models: res.data }))
			.catch(err => console.log(err))
	};


	createVehicleNameBoxes = () => {
		const arr = [];
		var column = "";
		if (this.state.models.length >= 4) {
			column = "col-md-3 col-4";
		} else if (this.state.models.length === 3) {
			column = "col-4";
		} else if (this.state.models.length === 2) {
			column = "col-6";
		} else if (this.state.models.length === 1) {
			column = "col-12";
		}

		for (var i = 0; i < this.state.models.length; i++) {
			arr.push(
				<div key={i} className={"text-center " + column}>
					<button
						value={this.state.models[i]}
						id="carmodel"
						className="btn btn-outline-primary m-md-2 m-1 btn-font"
						style={{ width: "100%", height: "60px", overflow: "hidden", textTransform: "capitalize" }}
						onClick={(e) => this.moveNext(e)}
					>
						{this.state.models[i]}
					</button>
				</div>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		// this.props.nextStep();
		this.props.history.push("/step5")
		this.props.vehicle_model(e.target.value);
	};
	render() {
		return (
			<div className="container p-0 content-container main-content-container3 mb-5">
				<Progress percent={25} status="active" showInfo={false} className="pbar" />

				{/* <ProgressBar animated now={25} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>
					  <Link to="/step3">
                        <Button type="primary" shape="circle"    >
                            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
                        </Button>
						</Link>

				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>

					<div className="text-center vehicle-model-padding">
						<h1 className="heading">Vehicle Model</h1>
						<div className="row">{this.state.models.length !== 0 && this.createVehicleNameBoxes()}</div>
					</div>
				</div>
			</div >
		);
	}
}

export default withRouter(S4VehicleModel);

// class S4VehicleModel extends Component {
// 	state = {
// 		models: "",
// 	};

// 	componentWillReceiveProps = (newProps) => {
// 		console.log(newProps.searchModel);
// 		carQuery.getMakes(newProps.searchModel).then((models) => {
// 			this.setState({ models: models });
// 		});
// 	};

// 	createVehicleModelBoxes = () => {
// 		const arr = [];
// 		for (var i = 0; i < this.state.models.length; i++) {
// 			arr.push(
// 				<button
// 					key={i}
// 					value={this.state.models[i].name}
// 					className="btn btn-outline-primary"
// 					onClick={(e) => this.moveNext(e)}
// 				>
// 					{this.state.models[i].name}
// 				</button>
// 			);
// 		}
// 		return arr;
// 	};

// 	moveNext = (e) => {
// 		this.props.nextStep();
// 		// this.props.nameForVehicalModel(e.target.value);
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<div className="main-content-inner-container" style={{ height: "70vh" }}>
// 					<div className="text-center">
// 						<h1>Vehicle Model</h1>
// 						<br />
// 						<br />
// 						{/* {this.state.models.length !== 0 && this.createVehicleModelBoxes()} */}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default S4VehicleModel;

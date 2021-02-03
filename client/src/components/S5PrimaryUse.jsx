import React, { Component } from "react";
import "./S2VehicleYear.css";
import CommonComponents from './CommonComponents';
import {Progress } from 'antd';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S5PrimaryUse extends Component {
	state = {};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.vehicle_primary_use(e.target.lastChild.data);
	};
	render() {
		return (
			<div className="container pt-0 main-content-container2 mb-5">
				{/* <ProgressBar animated now={31} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

				<div className="text-center box-width ">
				<Progress percent={25} status="active" />

					<h1 className="heading">
						Primary Use of your <span style={{ textTransform: "capitalize" }}>{this.props.name}</span>
					</h1>
					<div className="row">
						<div className="text-center col-md-4 p-2">
							<button
								className="btn btn-outline-primary"
								style={{ width: "150px", height: "70px" }}
								id="commute"
								onClick={(e) => this.moveNext(e)}
							>
								Commute
							</button>
						</div>
						<div className="text-center col-md-4 p-2">
							<button
								className="btn btn-outline-primary"
								style={{ width: "150px", height: "70px" }}
								id="pleasure"
								onClick={(e) => this.moveNext(e)}
							>
								Pleasure
							</button>
						</div>
						<div className="text-center col-md-4 p-2">
							<button
								className="btn btn-outline-primary"
								style={{ width: "150px", height: "70px" }}
								id="business"
								onClick={(e) => this.moveNext(e)}
							>
								Business
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default S5PrimaryUse;

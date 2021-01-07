import React, { Component } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Form } from "antd";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S11DrivingHistory extends Component {
	state = {};

	onFinish = (values) => {
		// this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	render() {
		return (
			<div className="container p-0 main-content-container3 mb-5">
				{/* <ProgressBar animated now={68} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

				<br />
				<div
					className="container pt-0 main-content-container2"
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<Form
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
						<div className="text-center">
							<h1 className="heading">Driving History</h1>
							<br />
							<br />
							<div className="row">
								<div className="p-2 col-md-4">
									<h6>Do you have an active license?</h6>
									<BootstrapSwitchButton
										checked1={false}
										onlabel="Yes"
										onstyle="primary"
										offlabel="No"
										offstyle="secondary"
										width={230}
									/>
								</div>
								<div className="p-2 col-md-4">
									<h6> Any ticket/claims in the past 3 years?</h6>
									<BootstrapSwitchButton
										checked2={false}
										onlabel="Yes"
										onstyle="primary"
										offlabel="No"
										offstyle="secondary"
										width={230}
									/>
								</div>
								<div className="p-2 col-md-4">
									<h6>Have you ever filled a SR-22?</h6>
									<BootstrapSwitchButton
										checked3={false}
										onlabel="Yes"
										onstyle="primary"
										offlabel="No"
										offstyle="secondary"
										width={230}
										onChange={(checked3) => {
											this.props.sr22ForPostData2(checked3 ? "Yes" : "No");
											this.props.Driver_1_Filing_Required(checked3 ? "SR-22" : "None");
										}}
									/>
								</div>
							</div>

							<br />
							<br />
							<button
								className="btn btn-primary"
								style={{ width: "230px" }}
								onClick={this.props.nextStep}
							>
								<h4 style={{ display: "inline", color: "white" }}>Continue</h4> &nbsp;&nbsp;&nbsp;{" "}
								<i className="fa fa-arrow-right" style={{ fontSize: "24px" }}></i>
							</button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default S11DrivingHistory;

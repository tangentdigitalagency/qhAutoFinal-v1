import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S15YourName extends Component {
	state = {};

	onFinish = (values) => {
		console.log("Success:", values);
		this.props.username(values.firstName);
		this.props.first_name(values.firstName);
		this.props.last_name(values.lastName);
		this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	render() {
		return (
			<div className="container pt-0 main-content-container mb-5">
				{/* <ProgressBar animated now={93} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>


				<div className="box-width">
					<h1 className="text-center heading">What Is Your Name?</h1>
					<br />
					<br />
					<Form
						name="nameForm"
						autoComplete="on"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
						<h5>First Name</h5>
						<Form.Item
							name="firstName"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please enter first name!",
								},
							]}
						>
							<Input size="large" type="text" placeholder="First Name" />
						</Form.Item>
						<h5>Last Name</h5>
						<Form.Item
							name="lastName"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please enter last name!",
								},
							]}
						>
							<Input size="large" type="text" placeholder="Last Name" />
						</Form.Item>

						<Form.Item style={{ width: "100%" }}>
							<Button type="primary" htmlType="submit" style={{ width: "100%" }} size={"large"}>
								<h4 style={{ display: "inline", color: "white", fontWeight: "400" }}>Continue</h4>
								&nbsp;&nbsp;&nbsp;
								<i className="fa fa-arrow-right" style={{ fontSize: "24px" }}></i>
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

export default S15YourName;

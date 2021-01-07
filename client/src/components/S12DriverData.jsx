import React, { Component } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Form, Select, Button, Checkbox } from "antd";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
const { Option } = Select;

class S12DriverData extends Component {
	state = {
		homeOverChecked: false,
	};

	onFinish = (values) => {
		this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	render() {
		return (
			<div className="container p-0 main-content-container3 mb-5">
				{/* <ProgressBar animated now={75} /> */}
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
							<h1 className="heading">Tell Us About The Driver</h1>
							<br />
							<br />
							<div className="row">
								<div className="p-2 col-md-4">
									<h6>Homeowner</h6>
									<BootstrapSwitchButton
										checked1={false}
										onlabel="Yes"
										onstyle="primary"
										offlabel="No"
										offstyle="secondary"
										width={230}
										onChange={(checked1) => {
											this.props.homeOwnershipForPostData2(checked1 ? 1 : 0);
											this.setState({ homeOverChecked: !this.state.homeOverChecked });
										}}
									/>
									{this.state.homeOverChecked && (
										<Form.Item name="home_quote" style={{ width: "230px", alignItems: "center" }}>
											<Checkbox>Interested in getting a Home Quote?</Checkbox>
										</Form.Item>
									)}
								</div>
								<div className="p-2 col-md-4">
									<h6>Married</h6>
									<BootstrapSwitchButton
										checked2={false}
										onlabel="Yes"
										onstyle="primary"
										offlabel="No"
										offstyle="secondary"
										width={230}
										onChange={(checked2) => {
											this.props.married(checked2 ? "Married" : "Single");
										}}
									/>
								</div>
								<div className="p-2 col-md-4">
									<h6>Gender</h6>

									<Form.Item
										name="gender"
										className="genderPadding"
										hasFeedback
										rules={[
											{
												required: true,
												message: "Please select an option!",
											},
										]}
										style={{ width: "230px" }}
									>
										<Select
											style={{ width: "100%" }}
											size="large"
											placeholder="Select an option"
											optionFilterProp="children"
											filterOption={(input, option) =>
												option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
											}
											onChange={(value) => {
												this.props.gender(value);
											}}
										>
											<Option value="Male">Male</Option>
											<Option value="Female">Female</Option>
											<Option value="Non Binary">Non-binary</Option>
										</Select>
									</Form.Item>
								</div>
							</div>

							<br />
							<br />
							<Form.Item>
								<Button type="primary" htmlType="submit" style={{ width: "230px" }} size={"large"}>
									<h4 style={{ display: "inline", color: "white", fontWeight: "400" }}>Continue</h4>
									&nbsp;&nbsp;&nbsp;
									<i className="fa fa-arrow-right" style={{ fontSize: "24px" }}></i>
								</Button>
							</Form.Item>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default S12DriverData;

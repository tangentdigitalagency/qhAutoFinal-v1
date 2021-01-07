import React, { Component } from "react";
import { Form, Button, DatePicker, Input } from "antd";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';

class S14DateOfBirth extends Component {
	state = {
		startDate: new Date(),
		dateValue: "",
	};

	onFinish = (values) => {
		console.log(this.state.dateValue);
		// console.log("Success:", String(values.datePicker._d).split(" "));
		// var date = String(values.datePicker._d).split(" ");
		// if (date[1] === "Jan") {
		// 	date[1] = "01";
		// } else if (date[1] === "Feb") {
		// 	date[1] = "02";
		// } else if (date[1] === "Mar") {
		// 	date[1] = "03";
		// } else if (date[1] === "Apr") {
		// 	date[1] = "04";
		// } else if (date[1] === "May") {
		// 	date[1] = "05";
		// } else if (date[1] === "Jun") {
		// 	date[1] = "06";
		// } else if (date[1] === "Jul") {
		// 	date[1] = "07";
		// } else if (date[1] === "Aug") {
		// 	date[1] = "08";
		// } else if (date[1] === "Sep") {
		// 	date[1] = "09";
		// } else if (date[1] === "Oct") {
		// 	date[1] = "10";
		// } else if (date[1] === "Nov") {
		// 	date[1] = "11";
		// } else if (date[1] === "Dec") {
		// 	date[1] = "12";
		// }
		// const requiredFormat = date[1] + "/" + date[2] + "/" + date[3];
		this.props.dob(this.state.dateValue);
		this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	onChangeHandler = (e) => {
		var value = e.target.value;
		value = value
			.replace(/^(\d\d)(\d)$/g, "$1/$2")
			.replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
			.replace(/[^\d\/]/g, "");
		this.setState({ dateValue: value });
	};

	render() {
		return (
			<div className="container pt-0 main-content-container mb-5">
				{/* <ProgressBar animated now={87} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>


				<div className="box-width">
					<h1 className="text-center heading">When Were You Born?</h1>
					<br />
					<br />
					<Form
						name="DOBForm"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
						autoComplete="on"

					>
						<Input
							placeholder="MM/DD/YYYY"
							size={"large"}
							maxLength={10}
							style={{ width: "100%" }}
							onChange={this.onChangeHandler}
							value={this.state.dateValue}

						/>
						<br />
						<br />
						{/* <DatePicker size={"large"} style={{ width: "100%" }} /> */}

						<Form.Item style={{ width: "100%" }}
						>
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

export default S14DateOfBirth;

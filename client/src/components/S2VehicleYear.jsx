import React, { Component, Fragment } from "react";
import CommonComponents from './CommonComponents';
import "./S2VehicleYear.css";
// @ts-ignore
import carQuery from "../Assets/carQuery.json";
import { Select, Progress } from "antd";
import carYears from '../Assets/carYears'
import axios from 'axios'
import { Link, withRouter } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// import ProgressBar from 'react-bootstrap/ProgressBar';

const { Option } = Select;

class S2VehicleYear extends Component {
	state = {
		years: "",
		stateName: "",
	};
	UNSAFE_componentWillMount = () => {
		axios.get('/getyears')
			.then(res => {
				this.setState({
					years: {
						minYear: Math.min.apply(null, res.data),
						maxYear: Math.max.apply(null, res.data),
					},
				});
			})
			.catch(err => console.log(err))
		this.setState({
			years: {
				minYear: Math.min.apply(null, carYears.list),
				maxYear: Math.max.apply(null, carYears.list),
			},
		});
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ stateName: newProps.zipCodeState });
	};

	createVehicleYearBoxes = () => {
		const arr = [];

		// @ts-ignore
		for (var i = this.state.years.maxYear; i > this.state.years.maxYear - 24; i--) {
			arr.push(
				<div className="col-3 p-2" key={i}>
					<button
						value={i}
						className="btn btn-outline-primary btn-font"
						style={{ width: "100%" }}
						onClick={(e) => this.moveNext(e)}
					>
						{i}
					</button>
				</div>
			);
		}
		return arr;

	};

	createVehicleYearSelect = () => {
		const arr = [];

		// @ts-ignore
		for (var i = this.state.years.maxYear - 24; i >= this.state.years.minYear; i--) {
			arr.push(
				<Option className="p-0" key={i} value={i}>
					<input
						type="button"
						id="caryear"
						className="select-bg"
						style={{ border: "none", width: "100%", height: "100%" }}
						value={i}
						onClick={this.moveNext}
					/>
				</Option>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		// this.props.nextStep();
		this.props.vehicle_year(Number(e.target.value));
		this.props.yearForVehicleName(Number(e.target.value));
		this.props.history.push("/step3")

	};
	render() {
		return (
			<Fragment>
				<h3 className="text-center mt-2 mb-2 main-heading">
					{this.props.zipCodeCity} <span style={{
						// @ts-ignore
						fontWeight: "200"
					}}> Drivers Can Save Up to </span>
					$500<span style={{
						// @ts-ignore
						fontWeight: "200"
					}}>/Year!</span>
				</h3>

				<div className="container pt-0 main-content-container mb-5">
					<Progress percent={12} status="active" showInfo={false} className="pbar" />

					{/* <ProgressBar animated now={12} /> */}
					<div>
						<CommonComponents
							//currentStep={this.props.currentStep}
							totalSteps={this.props.totalSteps}
							previousStep={this.props.previousStep}
						/>
						<Link to="/">
							<Button type="primary" shape="circle"    >
								<ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
							</Button>
						</Link>

						<br />
						<br />
						<div className="text-center box-width">
							<br></br>
							<h1 className="heading">Vehicle Year</h1>
							<div className="row">{this.state.years.length !== 0 && this.createVehicleYearBoxes()}</div>
							<br />
							{this.state.years.length !== 0 && (
								<Select
									style={{ width: "200px" }}
									size="large"
									placeholder="Prior Years"
									optionFilterProp="children"
									filterOption={(input, option) =>
										option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									{this.createVehicleYearSelect()}
								</Select>
							)}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(S2VehicleYear);

import React, { Component } from "react";
import "./S2VehicleYear.css";
import CommonComponents from './CommonComponents';
import {Progress } from 'antd';
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S5PrimaryUse extends Component {
	state = {};

	moveNext = (e) => {
		// this.props.nextStep();
		this.props.history.push("/step6")
		this.props.vehicle_primary_use(e.target.lastChild.data);
	};
	render() {
		return (
			<div className="container pt-0 main-content-container2 mb-5">
				<Progress percent={31} status="active" showInfo={true} className="pbar" />

				{/* <ProgressBar animated now={31} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>
				  <Link to="/step4">
                        <Button type="primary" shape="circle"    >
                            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
                        </Button>
						</Link>

				<div className="text-center box-width ">

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

export default withRouter(S5PrimaryUse);

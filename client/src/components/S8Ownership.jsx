import React, { Component } from "react";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';

import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
class S8Ownership extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	moveNext = (e) => {
		// this.props.nextStep();
	
		this.props.vehicle_ownership(e.target.lastChild.data);
		this.props.maintainTable();
		this.props.vehicleForPostData2(e.target.lastChild.data);
		this.props.history.push("/step9")

	};

	render() {
		return (
			<div className="container p-0 main-content-container4 mb-5">
				<Progress percent={50} status="active" showInfo={false} className="pbar" />

				{/* <ProgressBar animated now={50} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

  <Link to="/step7">
                        <Button type="primary" shape="circle"    >
                            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
                        </Button>
                        </Link>

				<br />
				<div
					className="container pt-0 main-content-container4"
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center">
						<h1 className="heading">
							Ownership Of Your <span style={{ textTransform: "capitalize" }}>{this.props.name}</span>?
						</h1>
						<div className="row">
							<div className="text-center  p-2 col-md-4">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Leased
								</button>
							</div>
							<div className="text-center  p-2 col-md-4">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Financed
								</button>
							</div>
							<div className="text-center  p-2 col-md-4">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Owned
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(S8Ownership);

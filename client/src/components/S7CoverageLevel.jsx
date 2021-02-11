import React, { Component } from "react";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class S7CoverageLevel extends Component {
	state = {};

	moveNext = (e) => {

		this.props.desired_coverage_level(e.target.lastChild.data);
		// this.props.nextStep();
		this.props.history.push("/step8")

	};

	render() {
		return (
			<div className="container p-0 main-content-container4 mb-5">
				{/* <ProgressBar animated now={43} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

  					<Link to="/step6">
                        <Button type="primary" shape="circle"    >
                            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
                        </Button>
                        </Link>


				<br />
				<div
					className="container pt-0 main-content-container4 pb-5"
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center">
						<h1 className="heading">Deisred Coverage Level</h1>
						<div className="row">
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									id="superior"
									onClick={this.moveNext}
								>
									Superior
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="standard"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Standard
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="basic"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Basic
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="stateMin"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									State minimum
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(S7CoverageLevel);

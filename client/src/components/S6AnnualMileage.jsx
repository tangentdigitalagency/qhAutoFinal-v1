import React, { Component } from "react";
import CommonComponents from './CommonComponents';
import { Progress } from 'antd';
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

// import ProgressBar from 'react-bootstrap/ProgressBar';
class S6AnnualMileage extends Component {
	state = {};

	moveNext = (e) => {
		// this.props.nextStep();

this.props.history.push("/step7")
		this.props.annual_mileage(e.target.lastChild.data);
	};

	render() {
		return (
			<div className="container p-0 main-content-container3 mb-5">
				<Progress percent={37} status="active" showInfo={true} className="pbar" />
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
					
				/>
				  <Link to="/step5">
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
						<h1 className="heading">Annual Mileage</h1>
						<div className="row">
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="under5"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									Under 5,000
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="under10"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									5,001 - 10,000
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="under15"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									10,001 - 15,000
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									id="over15"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									15,000+
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(S6AnnualMileage);

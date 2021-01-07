import React, { Component } from "react";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S6AnnualMileage extends Component {
	state = {};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.annual_mileage(e.target.lastChild.data);
	};

	render() {
		return (
			<div className="container p-0 main-content-container3 mb-5">
				{/* <ProgressBar animated now={37} /> */}
				<CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/>

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

export default S6AnnualMileage;

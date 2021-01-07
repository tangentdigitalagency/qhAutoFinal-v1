import React, { Component } from "react";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S7CoverageLevel extends Component {
	state = {};

	moveNext = (e) => {

		this.props.desired_coverage_level(e.target.lastChild.data);
		this.props.nextStep();
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

export default S7CoverageLevel;

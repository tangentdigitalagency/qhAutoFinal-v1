import React, { Component } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class CommonComponents extends Component {
    render() {
        return (
            <div className='row'>
                <div className="flex-row w-100 d-inline-flex justify-content-between">
                    {/* <div className="p-2">
                        <Button type="primary" shape="circle" onClick={this.props.previousStep}   >
                            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
                        </Button>
                    </div> */}
                    {/* <div className="p-2 number" >
                        {this.props.currentStep}/{this.props.totalSteps}
                    </div> */}
                </div>
            </div>
        );
    }
}

export default CommonComponents;

export class Heading extends Component {
    render() {
        return (
            <div className="flex-row d-inline-flex justify-content-center">
                <div className="p-2">
                    <h2>{this.props.heading}</h2>
                </div>
            </div>
        );
    }
}
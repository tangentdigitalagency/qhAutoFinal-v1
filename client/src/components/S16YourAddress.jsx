import React, { Component, Fragment } from "react";
import Axios from "axios";
import { Input, Form, Button, Progress } from "antd";
import XMLParser from "react-xml-parser";
import "./S2VehicleYear.css";
import ProgressLottie from "./ProgressLottie";
import CommonComponents from "./CommonComponents";
import { Link, withRouter } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';

// import ProgressBar from 'react-bootstrap/ProgressBar';
class S15YourName extends Component {
  formRef = React.createRef();
  state = {
    username: "",
    years: "",
    stateName: "",
    error: "",
    loading: false,
    response: "",
    Primary_Phone: "",
  };

  UNSAFE_componentWillReceiveProps = (newProps) => {
    this.setState({ username: newProps.username });
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.address(values.streetAddress);
    this.props.email_address(values.email);
    this.props.phone_home(this.state.Primary_Phone);
    console.log("Post Data 1 = ");
    console.log(this.props.postData);
    console.log("Post Data 2 = ");
    console.log(this.props.copyValuesToPostData2());
    // this.props.nextStep();
    this.props.history.push("/thank-you")
    this.setState(
      {
        ...this.state,
        loading: true,
      },
      this.PostDataOfBusinessInsurance(this.props.postData)
    );
    // axios
    // 	.post("https://leads.quotehound.com/genericPostlead.php", null, {
    // 		params: this.props.postData,
    // 	})
    // 	.then((response) => {
    // 		console.log(response.data);
    // 	})
    // 	.catch((err) => {
    // 		if (err) throw err;
    // 	});
    // this.props.nextStep();
  };

  PostDataOfBusinessInsurance = (postData) => {
    console.log(postData);
    Axios.post(
      'https://quotehound.leadspediatrack.com/post.do',
      null,
      {
        params: this.props.postData,
      }
    )
      .then((res) => {
        var xml = new XMLParser().parseFromString(res.data);
        if (xml.children[0].value === "Error") {
          this.setState({
            loading: false,
            response: xml.children[1].value,
          });
          console.log("Running the post call");
          console.log(xml.children[1].value);
        } else if (
          xml.children[0].value === "Matched" ||
          xml.children[0].value === "Unmatched"
        ) {
          this.props.nextStep();
          this.props.copyValuesToPostData2();
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  simplePhone = (value) => {
    const reg = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
    value = value.replace(reg, "$1$2$3");
    if (reg.test(value)) {
      this.setState({
        ...this.state,
        Primary_Phone: value,
      });
      console.log(value);
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  UNSAFE_componentWillReceiveProps = () => {
    if (!this.state.response == "") {
      this.setState({
        ...this.state,
        response: "",
      });
    }
  };

  render() {
    const { response, loading } = this.state;
    return (
      <div className="container pt-0 content-container main-content-container3 mb-5">
        <Progress percent={100} status="active" showInfo={true} className="pbar" />
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />

        <Link to="/step15">
          <Button type="primary" shape="circle"    >
            <ArrowLeftOutlined className="anticon" style={{ verticalAlign: "0px", "WebkitBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "MozBoxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)", "boxShadow": "-2px 7px 62px -30px rgba(125,200,250,0.72)" }} />
          </Button>
        </Link>

        <br />
        <div
          className="container pt-0 main-content-container4 pb-5 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className="text-center heading">
              <span style={{ textTransform: "capitalize" }}>
                {this.state.username}
              </span>
            You Qualify for Major Discounts!
            </h1>
            <br />

            {loading ? (
              <ProgressLottie />
            ) : (
                <Fragment>
                  {response !== "" ? (
                    <h5>{response}</h5>
                  ) : (
                      <Form
                        ref={this.formRef}
                        name="addressForm"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                      >
                        <h5>Street Address</h5>
                        <Form.Item
                          name="streetAddress"
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Please enter street address!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            type="text"
                            placeholder="Street Address"
                          />
                        </Form.Item>
                        <h5>Email</h5>
                        <Form.Item
                          name="email"
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Please enter email!",
                            },
                            {
                              type: "email",
                            },
                          ]}
                        >
                          <Input size="large" placeholder="Email" />
                        </Form.Item>
                        <h5>Phone Number</h5>
                        <Form.Item
                          name="phoneNumber"
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Please Enter Phone Number ",
                            },
                            {
                              max: 14,
                              message: "Please Enter Valid Phone Number ",
                            },
                            {
                              pattern: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/,
                              message: "Please Enter Valid Phone Number ",
                            },
                          ]}
                        >
                          <Input
                            onChange={(e) => {
                              let value = e.target.value;
                              const reg = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
                              value = value.replace(reg, "($1) $2-$3");
                              if (reg.test(value)) {
                                this.formRef.current.setFieldsValue({
                                  phoneNumber: value,
                                });
                                console.log(value);
                              }
                              this.simplePhone(value);
                            }}
                            maxLength="14"
                            size="large"
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Form.Item>
                        <p className="tcpa">
                          By hitting submit below, I provide my express written
                          consent to the following. Telemarketing calls, text
                          messages, emails, and postal mail from this Web site, our
                          <a href="https://www.quotehound.com/partners">marketing and re-marketing </a> network, and up to eight
                          insurance companies or their affiliates  or
                          representatives at the phone number (including wireless
                          number), email address, and postal address provided by me.
                          Telemarketing calls, text messages, emails, and postal
                          mail (including wireless number), email address, and
                          postal address provided by me. Calls and text messages
                          transmitting insurance quotes, or seeking related
                          additional information from me, using an Automated
                          Telephone Dialing System or prerecorded or artificial
                          voices. Electronic video monitoring and recordation of my
                          activities on this Site; and I acknowledge that I may
                          revoke my consent at any time by Calling
                      <a href="tel:1883161350">1 888-316-1350 </a> or emailing
                      “STOP” to
                      <a href="mailto:optout@quotehound.com">
                            {" "}
                        optout@quotehound.com
                      </a>
                      .<b>I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE</b>
                        </p>
                        <Form.Item style={{ width: "100%" }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: "100%" }}
                            size={"large"}
                          >
                            <h4
                              style={{
                                display: "inline",
                                color: "white",
                                fontWeight: "400",
                              }}
                            >
                              Complete
                        </h4>
                        &nbsp;&nbsp;&nbsp;
                        <i
                              className="fa fa-arrow-right"
                              style={{ fontSize: "24px" }}
                            ></i>
                          </Button>
                        </Form.Item>
                      </Form>
                    )}
                </Fragment>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(S15YourName);

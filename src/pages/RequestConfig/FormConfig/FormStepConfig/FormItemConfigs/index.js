import React, {Component} from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Collapse,
    UncontrolledCollapse,
    Label,
    Input,
    Button,
    CardTitle,
    Container,
    Table,
    UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, CardHeader, Badge
} from "reactstrap";
import Select from "react-select";
import classnames from 'classnames';
import {Link} from "react-router-dom";

import FormItemGeneralConfig from "./FormItemGeneralConfig";


class FormItemConfig extends Component {
    constructor(props) {
        super(props);
    }

    selectTxt = (event) => event.target.select();

    render() {
        return (
            <React.Fragment>

                        <Card className={ 'mb-2 border-' + this.props.formItem.alert } >
                            <CardHeader className={ classnames({ 'border-bottom bg-white' : (this.props.formItem.type === 'heading' || this.props.formItem.type === 'items') }, 'bg-soft-' + this.props.formItem.alert) } >
                                <div className="d-flex align-items-center justify-content-between">
                                    <div style={{ cursor: "pointer" }} id={"toggler" + this.props.formItem.id} Toggle onClick={this.collapse} className="d-flex align-items-center">
                                        <h5 className="font-size-14 mb-0">
                                            { this.props.formItem.type == "user" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-user-circle "></i>
                                            }
                                            { this.props.formItem.type == "company" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-store" ></i>
                                            }
                                            { this.props.formItem.type == "organization" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-building" ></i>
                                            }
                                            { this.props.formItem.type == "items" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-star" ></i>
                                            }
                                            { this.props.formItem.type == "heading" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-heading" ></i>
                                            }
                                            { this.props.formItem.type == "html" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-code-alt" ></i>
                                            }
                                            { this.props.formItem.type == "text" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-font" ></i>
                                            }
                                            { this.props.formItem.type == "paragraph" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-paragraph" ></i>
                                            }
                                            { this.props.formItem.type == "radio" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-radio-circle-marked" ></i>
                                            }
                                            { this.props.formItem.type == "checklist" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-checkbox-checked" ></i>
                                            }
                                            { this.props.formItem.type == "dropdown" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-chevron-down-square" ></i>
                                            }
                                            { this.props.formItem.type == "email" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-envelope" ></i>
                                            }
                                            { this.props.formItem.type == "number" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-hash" ></i>
                                            }
                                            { this.props.formItem.type == "date" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-calendar" ></i>
                                            }
                                            { this.props.formItem.type == "time" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-time" ></i>
                                            }
                                            { this.props.formItem.type == "phone" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-phone" ></i>
                                            }
                                            { this.props.formItem.type == "url" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-link" ></i>
                                            }
                                            { this.props.formItem.type == "upload" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-file" ></i>
                                            }
                                            { this.props.formItem.type == "password" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-lock" ></i>
                                            }
                                            { this.props.formItem.type == "address" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-map" ></i>
                                            }
                                            {this.props.formItem.name.ar}</h5>
                                    </div>

                                    <div className="float-right">
                                        {
                                            this.props.formItem.config.required &&
                                            <span className="ml-2"><i className="bx bx-star text-secondary"></i></span>
                                        }
                                        {
                                            !(this.props.formItem.config.value === "") &&
                                            <span className="ml-2"><i className="bx bx-calculator text-secondary"></i></span>
                                        }
                                        {
                                            !(this.props.formItem.alert === "") &&
                                            <span className="ml-2"><i className={"bx bx-burst bx-error text-" + this.props.formItem.alert}></i></span>
                                        }

                                        <input className="ml-4 text-muted bg-transparent border-0" onClick={this.selectTxt} style={{ cursor:"pointer", maxWidth:"30px" }}   readOnly value={"["+ this.props.formItem.id +"]"} />

                                        <span className="ml-2 ">
                                            <Link to="#">
                                                <i className="bx bx-copy"></i>
                                            </Link>
                                        </span>
                                        <span className="ml-2 ">
                                            <Link to="#">
                                                <i className="bx bx-trash"></i>
                                            </Link>
                                        </span>
                                        <span className="ml-2 float-right">
                                            <Link to="#" style={{ cursor: "move" }}>
                                              <i className="bx bx-move"></i>
                                            </Link>
                                          </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <UncontrolledCollapse className="" toggler={"toggler" + this.props.formItem.id}>
                                <CardBody>
                                    <FormItemGeneralConfig formItemConfig={this.props.formItem}/>

                                    <Row className="border-top mt-3 pt-3">

                                    </Row>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>


            </React.Fragment>
        );
    }
}

export default FormItemConfig;

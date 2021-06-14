import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    InputGroup,
    Label,
    Input,
    Collapse,
    Media,
    UncontrolledTooltip, CardTitle
} from "reactstrap";
import Timeline from "./statuses";

//Slider
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class LineSteps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            request:{
                status:{
                    name:"فحص الوثائق",
                    style:{
                        color:"#20add1"
                    }
                },
                statuses: [
                    { id: 1, name: "إيداع", date:"01.02.2020", iconClass: "file", description: "" , active: true },
                    { id: 2, name: "فحص الوثائق", date:"01.02.2020", iconClass: "copy-alt", description: ""  , active: false },
                    { id: 3, name: "فحص المعطيات", date:"01.02.2020", iconClass: "show", description: "" , active: false  },
                    { id: 4, name: "قرار اللجنة", date:"01.02.2020", iconClass: "badge-check", description: ""  , active: false },
                    { id: 5, name: "إمضاء الرخصة", date:"01.02.2020", iconClass: "pen", description: "" , active: false  },
                ],

            },

            col5: false,
            responsive: {
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
            },
        };
        this.t_col5 = this.t_col5.bind(this);
    }

    t_col5() {
        this.setState({ col5: !this.state.col5 });
    }

    render() {
        return (
            <React.Fragment>

                <p>
                    <div className="align-items-baseline">
                        <p className=" mb-0 font-weight-bold">الحالة:
                            <i className="mdi mdi-circle align-middle mr-1" style={this.state.request.status.style}></i>{this.state.request.status.name}

                            <button
                                onClick={this.t_col5}
                                className="btn btn-outline-secondary btn-sm ml-2 mo-mb-2"
                                type="button"
                                style={{ cursor: "pointer" }}
                            >
                                تفاصيل
                            </button>
                        </p>
                    </div>

                </p>
                <Collapse isOpen={this.state.col5}>
                    <Row>
                        <Col lg="12">
                            <div className="">
                                <ul className="verti-timeline list-unstyled">
                                    {
                                        this.state.request.statuses.map((status, key) =>
                                            <Timeline status={status} key={"_statusx_" + key} />
                                        )
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Collapse>

            </React.Fragment>
        );
    }
}

export default LineSteps;

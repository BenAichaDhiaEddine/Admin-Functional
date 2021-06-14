import React, { Component } from "react";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import ApexRadial from "./ApexRadial";

class MonthlyEarning extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle className="mb-4">
                                مردودية - المصلحة الإقتصادية
                            </CardTitle>
                            <Row>
                                <Col sm="6">
                                    <p className="text-muted">هذا الشهر</p>
                                    <h3>34,252</h3>
                                    <p className="text-muted"><span className="text-success mr-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> مقارنة بالفترة السابقة</p>
                                </Col>
                                <Col sm="6">
                                    <div className="mt-4 mt-sm-0">
                                        <ApexRadial />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default MonthlyEarning;

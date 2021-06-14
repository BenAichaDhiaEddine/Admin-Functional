import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";

class MiniWidget extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>


                {
                    this.props.reports.map((report, key) =>
                                    <Col md={4}  key={key}>
                                        <Card>
                                            <CardBody style={{minHeight:"150px"}}>
                                                <div className="mb-3 d-flex align-items-center">
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-soft-primary d-flex align-items-center text-primary font-size-20">
                                                            <i className={report.icon}></i>
                                                        </span>
                                                    </div>
                                                    <h4 className="font-size-15 mb-0">{report.value}</h4>
                                                </div>
                                                <div className="mt-3">
                                                    <p>{report.title}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                    )
                }
                </Row>
            </React.Fragment>
        );
    }
}

export default MiniWidget;

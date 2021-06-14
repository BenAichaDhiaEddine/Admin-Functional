import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from 'react-apexcharts';

class SalesAnalytics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [56,38,26],
            options:{
                labels:["Series A","Series B","Series C"],
                colors:["#556ee6","#34c38f","#f46a6a"],
                legend:{show:!1},
                plotOptions:{
                    pie: {
                        donut: {
                            size:"70%"
                        }
                    },
                }
            }
        };
    }
    render() {
        return (
            <React.Fragment>
                            <div >
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">المداخيل حسب نوع المطلب</h4>

                                        <div>
                                            <div id="donut-chart" className="apex-charts">
                                                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={240} />
                                            </div>
                                        </div>

                                        <div className="text-center text-muted">
                                            <Row>
                                                <Col xs="4">
                                                    <div className="mt-4">
                                                        <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary mr-1"></i> إشهار</p>
                                                        <h5>DT 2,132</h5>
                                                    </div>
                                                </Col>
                                                <Col xs="4">
                                                    <div className="mt-4">
                                                        <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-success mr-1"></i> بناء</p>
                                                        <h5>DT 1,763</h5>
                                                    </div>
                                                </Col>
                                                <Col xs="4">
                                                    <div className="mt-4">
                                                        <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-danger mr-1"></i> ملك عمومي</p>
                                                        <h5>DT 973</h5>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
            </React.Fragment>
        );
    }
}

export default SalesAnalytics;

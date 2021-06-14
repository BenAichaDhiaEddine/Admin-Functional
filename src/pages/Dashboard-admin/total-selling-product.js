import React, { Component } from 'react';
import { Col, Card, CardBody, Table } from "reactstrap";
import ReactApexChart from 'react-apexcharts';

class TotalSellingProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series1:[37],
            series2:[72],
            series3:[54],
            radialoptions1:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#556ee6"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
            radialoptions2:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#34c38f"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
            radialoptions3:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#f46a6a"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
        }
    }

    render() {
        return (
            <React.Fragment>
                            <div >
                                <Card>
                                    <CardBody>
                                        <div className="clearfix">
                                            <div className="float-right">
                                                <div className="input-group input-group-sm">
                                                    <select className="custom-select custom-select-sm">
                                                        <option defaultValue>جانفي</option>
                                                        <option value="1">ديسمبر</option>
                                                        <option value="2">نوفمبر</option>
                                                        <option value="3">اكتوبر</option>
                                                    </select>
                                                    <div className="input-group-append">
                                                        <label className="input-group-text">شهر</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="card-title mb-4">مردودية مصالح البنك</h4>
                                        </div>

                                        <div className="text-muted text-center">
                                            <p className="mb-2">المصلحة الإقتصادية</p>
                                            <h4>6385</h4>
                                            <p className="mt-4 mb-0"><span className="badge badge-soft-success font-size-11 mr-2"> 0.6% <i className="mdi mdi-arrow-up"></i> </span> مقارنة بالفترة السابقة</p>
                                        </div>

                                        <div className="table-responsive mt-4">
                                            <Table className="table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h5 className="font-size-14 mb-1">المصلحة الإقتصادية</h5>
                                                            <p className="text-muted mb-0">23 عضو</p>
                                                        </td>

                                                        <td>
                                                            <div id="radialchart-1" className="apex-charts">
                                                                <ReactApexChart options={this.state.radialoptions1} series={this.state.series1} type="radialBar" height={60} width={60} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-muted mb-1">معالجة</p>
                                                            <h5 className="mb-0">37 %</h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h5 className="font-size-14 mb-1">المصلحة المالية</h5>
                                                            <p className="text-muted mb-0">4 أعضاء</p>
                                                        </td>

                                                        <td>
                                                            <div id="radialchart-2" className="apex-charts">
                                                            <ReactApexChart options={this.state.radialoptions2} series={this.state.series2} type="radialBar" height={60} width={60} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-muted mb-1">معالجة</p>
                                                            <h5 className="mb-0">72 %</h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h5 className="font-size-14 mb-1">مصلحة الشكايات</h5>
                                                            <p className="text-muted mb-0">12 عضو</p>
                                                        </td>

                                                        <td>
                                                            <div id="radialchart-3" className="apex-charts">
                                                            <ReactApexChart options={this.state.radialoptions3} series={this.state.series3} type="radialBar" height={60} width={60} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-muted mb-1">معالجة</p>
                                                            <h5 className="mb-0">54 %</h5>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
            </React.Fragment>
        );
    }
}

export default TotalSellingProduct;

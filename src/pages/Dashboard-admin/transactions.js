import React, { Component } from 'react';
import { Col, Card, Nav, CardBody, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap";
import classnames from 'classnames';

//Simple bar
import SimpleBar from "simplebar-react";

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                            <Col xl="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">متابعة عملية الخلاص</h4>

                                        <Nav pills className="bg-light rounded" role="tablist">
                                            <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }} >
                                                الكل
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }} >
                                                نجحت
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggleTab('3'); }} >
                                                معلّقة
                                            </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab} className="mt-4">
                                            <TabPane tabId="1">
                                                <SimpleBar style={{ maxHeight: "330px" }}>
                                                <div className="table-responsive">
                                                    <Table className="table-centered table-nowrap">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{width: "50px"}}>
                                                                    <div className="font-size-22 text-success">
                                                                        <i className="bx bx-check-circle"></i>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <h5 className="font-size-14 mb-1">إشهار</h5>
                                                                        <p className="text-muted mb-0">14 مارس, 2020</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 mb-0">أحمد بن زينب</h5>
                                                                        <p className="text-muted mb-0">أرسلا</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 text-muted mb-0">125.20 DT</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="font-size-22 text-danger">
                                                                        <i className="bx bx-x-circle"></i>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <h5 className="font-size-14 mb-1">إشغال ملك عمومي</h5>
                                                                        <p className="text-muted mb-0">15 مارس, 2020</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 mb-0">مراد مهنّي</h5>
                                                                        <p className="text-muted mb-0">مقاولات سمير</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 text-muted mb-0">112.34 DT</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="font-size-22 text-success">
                                                                        <i className="bx bx-check-circle"></i>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <h5 className="font-size-14 mb-1">بناء</h5>
                                                                        <p className="text-muted mb-0">16 مارس, 2020</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 mb-0">فتحي الشابي</h5>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 text-muted mb-0">94.22 DT</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="font-size-22 text-success">
                                                                        <i className="bx bx-check-circle"></i>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <h5 className="font-size-14 mb-1">رفع فضلات</h5>
                                                                        <p className="text-muted mb-0">17 مارس, 2020</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 mb-0">أنس الماجري</h5>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 text-muted mb-0">84.32 DT</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="font-size-22 text-danger">
                                                                        <i className="bx bx-x-circle"></i>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <h5 className="font-size-14 mb-1">إشهار</h5>
                                                                        <p className="text-muted mb-0">18 ماي, 2020</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 mb-0">فريد شوقي</h5>
                                                                        <p className="text-muted mb-0">Electro Samir</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="text-right">
                                                                        <h5 className="font-size-14 text-muted mb-0">145.80 DT</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>
                                                </div>
                                                </SimpleBar>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <SimpleBar style={{ maxHeight: "330px" }}>
                                                    <p>المعاملات المالية التي تمت بنجاح</p>
                                                <div className="table-responsive">
                                                    <Table className="table-centered table-nowrap">
                                                        <tbody>
                                                        <tr>
                                                            <td style={{width: "50px"}}>
                                                                <div className="font-size-22 text-success">
                                                                    <i className="bx bx-check-circle"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">إشهار</h5>
                                                                    <p className="text-muted mb-0">14 مارس, 2020</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 mb-0">أحمد بن زينب</h5>
                                                                    <p className="text-muted mb-0">أرسلا</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 text-muted mb-0">125.20 DT</h5>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-success">
                                                                    <i className="bx bx-check-circle"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">إشغال ملك عمومي</h5>
                                                                    <p className="text-muted mb-0">15 مارس, 2020</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 mb-0">مراد مهنّي</h5>
                                                                    <p className="text-muted mb-0">مقاولات سمير</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 text-muted mb-0">112.34 DT</h5>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-success">
                                                                    <i className="bx bx-check-circle"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">بناء</h5>
                                                                    <p className="text-muted mb-0">16 مارس, 2020</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 mb-0">فتحي الشابي</h5>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 text-muted mb-0">94.22 DT</h5>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-success">
                                                                    <i className="bx bx-check-circle"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">رفع فضلات</h5>
                                                                    <p className="text-muted mb-0">17 مارس, 2020</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 mb-0">أنس الماجري</h5>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 text-muted mb-0">84.32 DT</h5>
                                                                </div>
                                                            </td>
                                                        </tr>



                                                        </tbody>
                                                    </Table>
                                                </div>
                                                </SimpleBar>
                                            </TabPane>

                                            <TabPane tabId="3">
                                                <SimpleBar style={{ maxHeight: "330px" }}>
                                                    <p>المعاملات المالية التي تجاوزت الآجال</p>
                                                <div className="table-responsive">
                                                    <Table className="table-centered table-nowrap">
                                                        <tbody>



                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-danger">
                                                                    <i className="bx bx-x-circle"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">إشهار</h5>
                                                                    <p className="text-muted mb-0">18 ماي, 2020</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 mb-0">فريد شوقي</h5>
                                                                    <p className="text-muted mb-0">Electro Samir</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-right">
                                                                    <h5 className="font-size-14 text-muted mb-0">145.80 DT</h5>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        </tbody>
                                                    </Table>
                                                </div>
                                                </SimpleBar>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
            </React.Fragment>
        );
    }
}

export default Transactions;

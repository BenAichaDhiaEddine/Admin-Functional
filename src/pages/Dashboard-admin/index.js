import React, { Component } from "react";
import {CardDeck, Container, Row, Col, Card, CardBody} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import CardUser from "./card-user";
import CardWelcome from "./card-welcome";
import MiniWidget from "./mini-widget";
import Earning from "./earning";
import SalesAnalytics from "./sales-analytics";
import TotalSellingProduct from "./total-selling-product";
import Tasks from "./tasks";
import ChatBox from "./chat-box";
import MonthlyEarning from "./MonthlyEarning";
import Transactions from "./transactions";
import Notifications from "./notifications";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports : [
                { icon : "bx bx-list-check", title : "مطالب تم معالجتها", value : "1,452" },
                { icon : "bx bx-time", title : "متوسط مدة الإنجاز", value : "2دق"},
                { icon : "bx bx-pie-chart", title : "نسبة الإنجاز", value : "%16.2"},
            ]
        };
    }


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                 <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="لوحة التّحكم" breadcrumbItem="الرئيسية" />

                        {/* Card User */}

                        <Row>
                            <Col md={4}>
                                <CardUser/>
                                <Card className="">
                                    <CardBody>
                                        <div className="align-self-center">
                                            <div className="text-lg-center mt-4 mt-lg-0">
                                                <p className="text-muted text-truncate mb-2">المطالب المخصصة لك</p>
                                                <Row>
                                                    <Col xs="4">
                                                        <div>

                                                            <h5 className="mb-2">40</h5>
                                                            <button  className="btn  btn-success">
                                                                معالجة</button>
                                                        </div>
                                                    </Col>
                                                    <Col xs="4">
                                                        <div>
                                                            <h5 className="mb-2">18</h5>
                                                            <button  className="btn  btn-primary">
                                                                متابعة</button>
                                                        </div>
                                                    </Col>
                                                    <Col xs="4">
                                                        <div>
                                                            <h5 className="mb-2">1</h5>
                                                            <button  className="btn  btn-secondary">
                                                                معلّقة</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Notifications/>

                            </Col>

                            <Col md={8}>
                                <Earning/>
                                <Row>
                                    <Col md={6}>
                                        <MonthlyEarning />
                                        <TotalSellingProduct />

                                    </Col>
                                    <Col md={6}>
                                        <MiniWidget reports={this.state.reports}/>
                                        <SalesAnalytics/>

                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                     </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;

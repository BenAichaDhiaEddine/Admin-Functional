import React, { Component } from "react";
import {
    Card,
    CardBody,
    Col,
    Row,
    CardGroup,
    CardDeck,
    CardTitle,
    CardSubtitle,
    Container,
    DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Badge, NavItem, NavLink, Nav, TabPane, TabContent
} from "reactstrap";
import classnames from 'classnames';

// Import Components
import Requests from "./requests";
import Permits from "./permits";
import Invoices from "./invoices";
import Addresses from "./Addresses";
import Representatives from "./Representatives";
import Replace from "./replace-representative"
//Import Images
import logo2 from "../../assets/images/logos/logo2.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import Select from "react-select";


class Organization extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectedMulti: null,
            activeTab: "1",
            selectedGroup: null,};
        this.toggle = this.toggle.bind(this);

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="مؤسسات" breadcrumbItem="ملف المؤسسة" />

                        <CardDeck >

                                <Card className="col-md-3">
                                    <CardBody  >
                                        <div className="text-center">
                                            <img src={logo2} alt="" className="mb-4 avatar-lg rounded-circle img-thumbnail" />
                                            <h4>Arsela</h4>
                                            <Badge color="danger" dir="ltr" className=" font-size-14" pill>-323 dt</Badge>
                                            <hr></hr>
                                            <h6>الممثل القانوني</h6>
                                            <div className="mb-3">
                                                <p className="text-muted">أحمد بن زينب</p>
                                                <img className="rounded-circle avatar-xs" src={avatar2} alt="" />
                                            </div>
                                            <Replace/>
                                            <hr></hr>
                                            <div className="text-lg-center mt-4 mt-lg-0">
                                                <p className="text-muted text-truncate mb-2">أرقام</p>
                                                <Row>
                                                    <Col xs="3">
                                                        <div>

                                                            <h5 className="mb-2">40</h5>
                                                            <p>مطالب</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs="3">
                                                        <div>
                                                            <h5 className="mb-2">10</h5>
                                                            <p>رخص</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs="3">
                                                        <div>
                                                            <h5 className="mb-2">10</h5>
                                                            <p>فواتير</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs="3">
                                                        <div>
                                                            <h5 className="mb-2">1</h5>
                                                            <p>عناوين</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>


                                <Card className="col-md-9">
                                    <Nav tabs className="nav-tabs-custom nav-justified">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: this.state.activeTab === "1"
                                                })}
                                                onClick={() => {
                                                    this.toggle("1");
                                                }}
                                            >
                                                معلومات
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: this.state.activeTab === "2"
                                                })}
                                                onClick={() => {
                                                    this.toggle("2");
                                                }}
                                            >
                                                العناوين
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: this.state.activeTab === "3"
                                                })}
                                                onClick={() => {
                                                    this.toggle("3");
                                                }}
                                            >
                                                الممثلين
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: this.state.activeTab === "4"
                                                })}
                                                onClick={() => {
                                                    this.toggle("4");
                                                }}
                                            >
                                                المطالب
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: this.state.activeTab === "5"
                                                })}
                                                onClick={() => {
                                                    this.toggle("5");
                                                }}
                                            >
                                                الرخص
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: this.state.activeTab === "6"
                                                })}
                                                onClick={() => {
                                                    this.toggle("6");
                                                }}
                                            >
                                                الفواتير
                                            </NavLink>
                                        </NavItem>



                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1" className="p-3">
                                                <Row>
                                                    <Col md="6">
                                                        <h4>معلومات</h4>
                                                        <div className="mb-2">
                                                            <label  className="">الإسم</label>
                                                            <input className="form-control" type="text" defaultValue="Arsela" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label  className="">رقم السجل التجاري</label>
                                                            <input className="form-control" type="text" defaultValue="RC289719" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label  className="">الوضع القانوني</label>
                                                            <input className="form-control"  type="text" defaultValue="S.A.R.L" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label  className="">نوع</label>
                                                            <input className="form-control"  type="text" defaultValue="شركة" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label  className="">طبيعة المؤسسة</label>
                                                            <input className="form-control" type="text" defaultValue="خدمات إعلامية" />
                                                        </div>



                                                    </Col>
                                                    <Col md="6 ">
                                                        <h4 >الممثل القانوني</h4>
                                                        <div className="mb-2">
                                                            <label  className="">الاسم</label>
                                                            <input className="form-control" type="text" disabled={true} defaultValue="أحمد بن زينب" />

                                                        </div>
                                                        <div className="mb-2">
                                                            <label  className="">البريد الإلكتروني</label>
                                                            <input className="form-control" type="email" disabled={true} defaultValue="contact@bizerte.tn" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label  className="">رقم الهاتف</label>
                                                            <input className="form-control" type="tel" disabled={true} defaultValue="70123457" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label className="">المقرّ الإجتماعي</label>
                                                            <input className="form-control" type="text" defaultValue="شارع الجمهورية 2000 حمام الأنف" />
                                                        </div>
                                                    </Col>

                                                </Row>


                                                <hr></hr>
                                            <button className="btn btn-success"><i className="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>حفظ</button>


                                        </TabPane>

                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="2" className="p-3">
                                            <Addresses/>
                                        </TabPane>
                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="3" className="p-3">
                                            <Representatives/>
                                        </TabPane>
                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="4" className="p-3">
                                            <Requests/>


                                        </TabPane>
                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="5" className="p-3">
                                            <Permits/>


                                        </TabPane>
                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="6" className="p-3">
                                            <Invoices/>


                                        </TabPane>
                                    </TabContent>


                                </Card>

                        </CardDeck>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Organization;

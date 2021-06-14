import React, { Component } from "react";
import {
    Card,
    CardBody,
    Col,
    Row,
    CardDeck,
    CardTitle,
    CardSubtitle,
    Container,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Badge,
    NavItem,
    NavLink,
    Nav,
    TabPane,
    TabContent,
    UncontrolledTooltip, ModalBody
} from "reactstrap";
import classnames from 'classnames';

// Import Components
import Requests from "./requests";
import Permits from "./permits";
import Invoices from "./invoices";
import Addresses from "./Addresses";
import Representatives from "./Representatives";
import NewOrganization from "./new-organization"
//Import Images
import logo1 from "../../assets/images/logos/logo.png";
import logo2 from "../../assets/images/logos/logo2.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import Select from "react-select";
import {Link} from "react-router-dom";


class Citizen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organizations:[
                {id:1, name:"Arsela", logo:logo2, url:"organization"},
                {id:2, name:"Benzavision", logo:logo1, url:"organization"},
            ],
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
                                            <img src={avatar2} alt="" className="mb-4 avatar-lg rounded-circle img-thumbnail" />
                                            <h4>أحمد بن زينب</h4>
                                            <p className="text-muted">Ahmed Ben Zineb</p>
                                            <Badge color="danger" dir="ltr" className=" font-size-14" pill>-323 dt</Badge>
                                            <hr></hr>
                                            <h6>مؤسسات</h6>
                                            <div className="d-inline-flex align-items-center mb-3">
                                                {
                                                    this.state.organizations.map((org, i) =>

                                                        <Link key={"_org_" + i} to="#" id={"org" + org.id} ><img className="rounded-circle avatar-xs mr-2" src={org.logo} alt="" />
                                                        <UncontrolledTooltip placement="top" target={"org" + org.id}>{org.name}</UncontrolledTooltip>
                                                        </Link>

                                                    )
                                                }
                                                <NewOrganization/>

                                            </div>

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
                                                            <p>مؤسسات</p>
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
                                                الفواتير
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
                                                المطالب
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
                                                الرخص
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
                                                معلومات
                                            </NavLink>
                                        </NavItem>




                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1" className="p-3">
                                            <Invoices/>
                                        </TabPane>
                                    </TabContent>

                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="2" className="p-3">
                                            <Requests/>


                                        </TabPane>
                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="3" className="p-3">
                                            <Permits/>


                                        </TabPane>
                                    </TabContent>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="4" className="p-3">
                                            <h4>معلومات شخصيّة</h4>
                                            <Row>
                                                <Col md="6">
                                                    <div className="mb-2">
                                                        <label  className="">الإسم</label>
                                                        <input className="form-control" type="text"  defaultValue="أحمد"/>
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">اللقب</label>
                                                        <input className="form-control" type="text" defaultValue="بن زينب"/>
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">Prénom</label>
                                                        <input className="form-control" type="text" defaultValue="Ahmed" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">Nom</label>
                                                        <input className="form-control" type="text"  defaultValue="Ben Zineb"/>
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">جنس</label>
                                                        <input className="form-control" type="text" defaultValue="ذكر" />
                                                    </div>

                                                </Col>
                                                <Col md="6">
                                                    <div className="mb-2">
                                                        <label  className="">E-mail</label>
                                                        <input className="form-control" type="email" defaultValue="a.@arsela.co" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">Téléphone</label>
                                                        <input className="form-control" type="tel" defaultValue="22123456" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">CIN</label>
                                                        <input className="form-control" type="number" defaultValue="09923450" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label  className="">Date de naissance </label>
                                                        <input className="form-control" type="date" defaultValue="01/01/1990" />
                                                    </div>
                                                </Col>


                                            </Row>
                                            <h4>Adresse</h4>
                                            <Row>
                                                <Col md="4">
                                                    <div className="mb-2">
                                                        <label  className="">Numéro</label>
                                                        <input className="form-control" type="number"  />
                                                    </div>
                                                </Col>
                                                <Col md="8">
                                                    <div className="mb-2">
                                                        <label  className="">Rue</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="mb-2">
                                                        <label  className="">Code Postal </label>
                                                        <input className="form-control" type="number" />
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="mb-2">
                                                        <label  className="">الولاية</label>
                                                        <input className="form-control" type="text" defaultValue="حمام الأنف" disabled={true} />
                                                    </div>
                                                </Col>
                                            </Row>


                                            <hr></hr>
                                            <button className="btn btn-success"><i className="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>حفظ</button>


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

export default Citizen;

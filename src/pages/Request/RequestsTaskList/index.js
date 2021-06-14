import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Button,
    Media,
    Input,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    CardTitle,

    CardText, Label, CardBody
} from "reactstrap";
import classnames from 'classnames';

//Import Components
import Chat from "../Components/chat";
import Data from "../Components/data";
import Files from "../Components/files";
import Notes from "../Components/notes";
import Task from "../Components/card-task";
import Map from "../Components/Map";
import Logs from "../Components/Logs";


//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar/lib/index';
import 'react-perfect-scrollbar/dist/css/styles.css';

//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import Select from "react-select";
import ProfilePic from "../../Profile/profilePic";
import Request from "./Request";


const optionGroup = [
    {
        label: "التاريخ",
        options: [
            { label: "الجديد", value: "recent" },
            { label: "القديم", value: "old" },
            { label: "تحديث", value: "updated" },
        ]
    },
    {
        label: "الاجال",
        options: [
            { label: "الأقرب", value: "recentDeadline" },
            { label: "الأقصى", value: "lastDeadline" },
        ],

    },

];

class RequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [
                { id: 1, status: "offline", image: avatar2, name: "أحمد بن زينب", description: "رخصة إشهار", time: "05 دق", isActive: true },
                { id: 2, status: "online", image: avatar3, name: "محمد أمين باني", description: "رخصة بناء", time: "12 دق", isActive: false },
                { id: 3, status: "online", image: "Null", name: "مهدي زغواني", description: "إشغال ملك عمومي", time: "24 دق", isActive: false },
                { id: 4, status: "intermediate", image: "Null", name: "أشرف بن ونّاس", description: "رخصة بناء", time: "1 س", isActive: false },
                { id: 5, status: "offline", image: avatar4, name: "أيناس حافي", description: "رخصة إشهار", time: "3 س", isActive: false },
                { id: 6, status: "online", image: avatar1, name: "محمد سلمان", description: "رخصة إشهار", time: "5 س", isActive: false },
                { id: 7, status: "online", image: avatar6, name: "أيمن بن سليمان", description: "رخصة إشهار", time: "24 دق", isActive: false },
            ],
            types: [
                { id: 1, checked: true, name: "إشهار" },
                { id: 2, checked: true, name: "بناء" },
                { id: 3, checked: false, name: "إشغال ملك عمومي" }
            ],
            activeTab: "1",
            activeTabSide: "1",
            selectedGroup: null,

        };
        this.toggle = this.toggle.bind(this);
        this.toggleTab = this.toggleTab.bind(this);

    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleTab(tab) {
        if (this.state.activeTabSide !== tab) {
            this.setState({
                activeTabSide: tab
            });
        }
    }



    //Select
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };


    render() {
        const { selectedGroup } = this.state;
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="مطالب" breadcrumbItem="معالجة" />

                        <Row>
                            <Col lg="9">
                                <div className="d-lg-flex">
                                    <div className="chat-leftsidebar mr-lg-4">
                                        <div className="">
                                            <div className="chat-leftsidebar-nav">
                                                <Nav pills justified>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTabSide === '1' })}
                                                            onClick={() => { this.toggleTab('1'); }}
                                                        >
                                                            <i className="bx bx-folder font-size-20 d-sm-none"></i>
                                                            <span className="d-none font-weight-bold d-sm-block">المطالب</span>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTabSide === '2' })}
                                                            onClick={() => { this.toggleTab('2'); }}
                                                        >
                                                            <i className="bx bx-show font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block"><i className="bx bx-slider font-size-22 align-middle"></i></span>
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent activeTab={this.state.activeTabSide} className="py-3">
                                                    <TabPane tabId="1">
                                                        <div className="search-box chat-search-box pb-3">
                                                            <div className="position-relative">
                                                                <Input type="text" className="form-control" placeholder="بحث..." />
                                                                <i className="bx bx-search search-icon"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <ul className="list-unstyled chat-list">
                                                                <PerfectScrollbar style={{ height: "700px" }}>
                                                                    {
                                                                        this.state.requests.map((request) =>
                                                                            <li key={request.id + request.status} className={request.isActive ? "active" : ""}>

                                                                                <Link to="#">
                                                                                    <Media>
                                                                                        <div className="align-self-center mr-3">
                                                                                            <ProfilePic id={request.id} img={request.image} name={request.name} />

                                                                                        </div>

                                                                                        <Media className="overflow-hidden" body>
                                                                                            <h5 className="text-truncate font-size-14 mb-1">{request.name}</h5>
                                                                                            <p className="text-truncate mb-0">{request.description}</p>
                                                                                        </Media>
                                                                                        <div className="font-size-11">{request.time}</div>
                                                                                    </Media>
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    }
                                                                </PerfectScrollbar>
                                                            </ul>
                                                        </div>
                                                    </TabPane>

                                                    <TabPane tabId="2">
                                                        <FormGroup className="select2-container">
                                                            <Select
                                                                placeholder={"ترتيب المطالب حسب:"}
                                                                value={selectedGroup}
                                                                onChange={this.handleSelectGroup}
                                                                options={optionGroup}
                                                                classNamePrefix="select2-selection"
                                                            />

                                                        </FormGroup>

                                                        <label className="font-size-14 font-weight-bold mb-3">أنواع المطالب:</label>
                                                        <ul className="list-unstyled">
                                                            <PerfectScrollbar style={{ height: "410px" }}>
                                                                {this.state.types.map((group) =>
                                                                        <li key={"test" + group.image}>
                                                                            <div className="form-check mb-3">
                                                                                <input className="form-check-input" type="checkbox"  defaultChecked={group.checked} id={group.id} />
                                                                                <label  className="form-check-label" htmlFor={group.id}>
                                                                                    {group.name}
                                                                                </label>
                                                                            </div>

                                                                        </li>
                                                                    )
                                                                }
                                                                <button className="btn btn-block btn-success mt-3"><i className="bx bx-save mr-2"></i>حفظ</button>
                                                            </PerfectScrollbar>
                                                        </ul>
                                                    </TabPane>

                                                </TabContent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 user-chat">
                                        <Request/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <Task/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default RequestList;

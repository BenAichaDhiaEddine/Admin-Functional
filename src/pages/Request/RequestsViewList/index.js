import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Button,
    Media,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    CardTitle,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    CardText, Label, CardBody
} from "reactstrap";
import classnames from 'classnames';

//Import Components
import Chat from "../Components/chat";
import Data from "../Components/data";
import Files from "../Components/files";
import Map from "../Components/Map";
import Notes from "../Components/notes";
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
        ]
    }
];
const assigeesOptions = [
    {
        label: "المصلحة الإقتصادية",
        options: [
            { label: "سامية بن صالح", value: "mounira" },
            { label: "أمير العكروت", value: "amir" },
            { label: "شوقي الحمام الأنفي", value: "chawki" },
        ]
    },
    {
        label: "المصلحة الإدارية",
        options: [
            { label: "مراد المنسي", value: "mourad" },
            { label: "سمير شوشان", value: "samir" },
        ]
    }
];

class RequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [
                { id: 1, status: "offline", image: avatar6, name: "أحمد بن زينب", assignee:"اسم المسؤول", description: "رخصة إشهار", time: "05 دق", isActive: true },
                { id: 2, status: "online", image: avatar3, name: "محمد أمين باني", assignee:"اسم المسؤول", description: "رخصة بناء", time: "12 دق", isActive: false },
                { id: 3, status: "online", image: avatar3, name: "مهدي زغواني", assignee:"اسم المسؤول", description: "إشغال ملك عمومي", time: "24 دق", isActive: false },
                { id: 4, status: "intermediate", image: avatar4, name: "أشرف بن ونّاس", assignee:"اسم المسؤول", description: "رخصة بناء", time: "1 س", isActive: false },
                { id: 5, status: "offline", image: avatar4, name: "أيناس حافي", assignee:"اسم المسؤول", description: "رخصة إشهار", time: "3 س", isActive: false },
                { id: 6, status: "online", image: avatar6, name: "محمد سلمان", assignee:"اسم المسؤول", description: "رخصة إشهار", time: "5 س", isActive: false },
                { id: 7, status: "online", image: avatar4, name: "أيمن بن سليمان", assignee:"اسم المسؤول", description: "رخصة إشهار", time: "24 دق", isActive: false },
            ],
            types: [
                { id: 1, checked: true, name: "إشهار" },
                { id: 2, checked: true, name: "بناء" },
                { id: 3, checked: false, name: "إشغال ملك عمومي" }
            ],
            activeTab: "1",
            activeTabSide: "1",
            selectedGroup: null,
            selectedGroup2: null,
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

    handleSelectGroup2 = selectedGroup2 => {
        this.setState({ selectedGroup2 });
    };


    render() {
        const { selectedGroup } = this.state;
        const { selectedGroup2 } = this.state;
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="مطالب" breadcrumbItem="معالجة" />

                        <Row>
                            <Col lg="12">
                                <div className="d-lg-flex">
                                    <div className="chat-leftsidebar mr-lg-4">
                                        <div className="">
                                            <div className="search-box chat-search-box pb-3">
                                                <div className="position-relative">
                                                    <Input type="text" className="form-control" placeholder="بحث..." />
                                                    <i className="bx bx-search-alt search-icon"></i>
                                                </div>
                                            </div>

                                            <div className="chat-leftsidebar-nav">
                                                <Nav pills justified>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTabSide === '1' })}
                                                            onClick={() => { this.toggleTab('1'); }}
                                                        >
                                                            <i className="bx bx-chat font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">المطالب</span>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTabSide === '2' })}
                                                            onClick={() => { this.toggleTab('2'); }}
                                                        >
                                                            <i className="bx bx-group font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block"><i className="bx bx-list-ol font-size-16 align-middle"></i></span>
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent activeTab={this.state.activeTabSide} className="py-4">
                                                    <TabPane tabId="1">
                                                        <div>
                                                            <ul className="list-unstyled chat-list">
                                                                <PerfectScrollbar style={{ height: "510px" }}>
                                                                    {
                                                                        this.state.requests.map((request) =>
                                                                            <li key={request.id + request.status} className={request.isActive ? "active" : ""}>

                                                                                <Link to="#">
                                                                                    <Media>
                                                                                        <div className="align-self-center mr-3">
                                                                                            <i className={request.status === "online"
                                                                                                ? "mdi mdi-circle text-success font-size-10"
                                                                                                : request.status === "intermediate" ? "mdi mdi-circle text-warning font-size-10" : "mdi mdi-circle font-size-10"
                                                                                            }></i>
                                                                                        </div>
                                                                                        <div className="align-self-center pr-3 mr-3 border-left">
                                                                                            <ProfilePic id={request.id} color="primary" tooltip img={request.image} name={request.assignee} />
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
                                                        <h5 className="font-size-14 mb-3">عرض أنواع المطالب:</h5>
                                                        <ul className="list-unstyled">
                                                                {this.state.types.map((group) =>
                                                                        <li key={"test" + group.image}>
                                                                            <div className="form-check mb-3">
                                                                                <input className="form-check-input" type="checkbox" value="" checked={group.checked} id={group.id} />
                                                                                <label  className="form-check-label" htmlFor={group.id}>
                                                                                    {group.name}
                                                                                </label>
                                                                            </div>

                                                                        </li>
                                                                    )
                                                                }
                                                                <hr/>
                                                                <FormGroup className="select2-container">
                                                                    <Label>ترتيب المطالب حسب:</Label>
                                                                    <Select
                                                                        placeholder="اختر"
                                                                        value={selectedGroup}
                                                                        onChange={this.handleSelectGroup}
                                                                        options={optionGroup}
                                                                        classNamePrefix="select2-selection"
                                                                    />

                                                                </FormGroup>
                                                                <hr/>
                                                                <FormGroup className="select2-container">
                                                                    <Label>المسؤول:</Label>
                                                                    <Select
                                                                        placeholder="اختر"
                                                                        value={selectedGroup2}
                                                                        onChange={this.handleSelectGroup2}
                                                                        options={assigeesOptions}
                                                                        classNamePrefix="select2-selection"
                                                                    />

                                                                </FormGroup>
                                                            <hr/>
                                                                <FormGroup className="select2-container">
                                                                    <Label>المصلحة:</Label>
                                                                    <Select
                                                                        placeholder="اختر"
                                                                        value={selectedGroup2}
                                                                        onChange={this.handleSelectGroup2}
                                                                        options={assigeesOptions}
                                                                        classNamePrefix="select2-selection"
                                                                    />

                                                                </FormGroup>
                                                                <hr></hr>
                                                                <button className="btn btn-success">حفظ</button>
                                                        </ul>
                                                    </TabPane>

                                                </TabContent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 user-chat">
                                        <Card>
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
                                                        الطلب
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
                                                        الوثائق <span className="badge badge-light ml-1">4</span>
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
                                                        رسائل<span className="badge badge-light ml-1">3</span>
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
                                                        الملاحظات<span className="badge badge-light ml-1">3</span>
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
                                                        الموقع
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
                                                        السجل
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>

                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="1" className="p-3">
                                                    <Data/>
                                                </TabPane>
                                            </TabContent>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="2" className="p-3">
                                                    <Files/>
                                                </TabPane>
                                            </TabContent>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="3" className="">
                                                    <Chat/>
                                                </TabPane>
                                            </TabContent>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="4" className="p-3">
                                                    <Notes/>
                                                </TabPane>
                                            </TabContent>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="5" className="p-3">
                                                    <Map/>
                                                </TabPane>
                                            </TabContent>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="6" className="p-3">
                                                    <Logs/>
                                                </TabPane>
                                            </TabContent>

                                        </Card>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default RequestList;

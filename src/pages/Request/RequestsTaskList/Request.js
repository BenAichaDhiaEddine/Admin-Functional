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

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
            activeTabSide: "1",
            selectedGroup: null,
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
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
                <Card>
                    <Nav tabs className="nav-tabs-custom ">
                        <NavItem className="mx-3">
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                    active: this.state.activeTab === "1"
                                })}
                                onClick={() => {
                                    this.toggle("1");
                                }}
                            >
                                المطلب
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-3">
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                    active: this.state.activeTab === "2"
                                })}
                                onClick={() => {
                                    this.toggle("2");
                                }}
                            >
                                وثائق
                                <span className="badge badge-light">4</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-3">
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
                                    active: this.state.activeTab === "3"
                                })}
                                onClick={() => {
                                    this.toggle("3");
                                }}>
                                <i className="bx bx-chat font-size-20"></i><span className="badge badge-light">3</span>
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
                                <i className="bx bx-map font-size-20"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                    active: this.state.activeTab === "6"
                                })}
                                onClick={() => {
                                    this.toggle("6");
                                }}
                            >
                                <i className="bx bx-history font-size-20"></i>
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
            </React.Fragment>
        );
    }
}

export default Request;

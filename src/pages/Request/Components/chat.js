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
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    CardText
} from "reactstrap";

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar/lib/index';
import 'react-perfect-scrollbar/dist/css/styles.css';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { id: "34", isRight: true, name: "سامية بن صالح", message: "السلام!", time: "10:00" },
                { id: "35", isRight: true, name: "سامية بن صالح", message: "الرجاء إرسال شهادة الملكية ?", time: "10:07" },
                { id: "36", isRight: false, name: "أحمد بن زينب", message: "حسنا", time: "10:09" },
            ],
            notification_Menu: false,
            search_Menu: false,
            settings_Menu: false,
            other_Menu: false,
            Chat_Box_Username: "أحمد بن زينب",
            Chat_Box_Username2: "سامية بن صالح",
            Chat_Box_User_Status: "متواجد",
            Chat_Box_User_isActive: true,
            curMessage: ""
        };
        this.toggleNotification = this.toggleNotification.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleOther = this.toggleOther.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.UserChatOpen = this.UserChatOpen.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    toggleNotification() {
        this.setState(prevState => ({
            notification_Menu: !prevState.notification_Menu
        }));
    }

    //Toggle Chat Box Menus
    toggleSearch() {
        this.setState(prevState => ({
            search_Menu: !prevState.search_Menu
        }));
    }

    toggleSettings() {
        this.setState(prevState => ({
            settings_Menu: !prevState.settings_Menu
        }));
    }

    toggleOther() {
        this.setState(prevState => ({
            other_Menu: !prevState.other_Menu
        }));
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    //Use For Chat Box
    UserChatOpen = (id, name, status) => {

        let chatModule = [...this.state.requests];

        for (let k = 0; k < 6; k++) { chatModule[k].isActive = false; } // Enable All Option First
        chatModule[id - 1].isActive = true;

        let msg = [{ id: "39", isRight: true, name: "Henry Wells", message: "How are you ?", time: "10:07" },
        { id: "40", isRight: false, name: name, message: "I am fine, What about you ?", time: "10:09" },
        ];
        this.setState({ Chat_Box_Username: name, Chat_Box_User_Status: status, messages: msg, requests: chatModule })
    }

    addMessage() {
        let d = new Date();
        var n = d.getSeconds();
        let demoMsg = this.state.messages;
        demoMsg.push({ isRight: true, name: this.state.Chat_Box_Username2, message: this.state.curMessage, time: "00:" + n });
        this.setState({ messages: demoMsg, curMessage: "" });
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                            <div className="p-4 border-bottom ">
                                <Row>
                                    <Col md="4" xs="9">
                                        <h5 className="font-size-15 mb-1">{this.state.Chat_Box_Username}</h5>

                                        <p className="text-muted mb-0">
                                            <i className={this.state.Chat_Box_User_Status === "online"
                                                ? "mdi mdi-circle text-success align-middle mr-1"
                                                : this.state.Chat_Box_User_Status === "intermediate" ? "mdi mdi-circle text-warning align-middle mr-1" : "mdi mdi-circle align-middle mr-1"
                                            }></i>
                                            {this.state.Chat_Box_User_Status}</p>
                                    </Col>
                                    <Col md="8" xs="3">
                                        <ul className="list-inline user-chat-nav text-right mb-0">
                                            <li className="list-inline-item d-none d-sm-inline-block">
                                                <Dropdown isOpen={this.state.search_Menu} toggle={this.toggleSearch}>
                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                        <i className="bx bx-search-alt-2"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-md" right>
                                                        <Form className="p-3">
                                                            <FormGroup className="m-0">
                                                                <InputGroup>
                                                                    <Input type="text" className="form-control" placeholder="بحث ..." aria-label="Recipient's username" />
                                                                    <InputGroupAddon addonType="append">
                                                                        <Button color="primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                                                                    </InputGroupAddon>
                                                                </InputGroup>
                                                            </FormGroup>
                                                        </Form>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </li>
                                            <li className="list-inline-item  d-none d-sm-inline-block">
                                                <Dropdown isOpen={this.state.settings_Menu} toggle={this.toggleSettings}>
                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                        <i className="bx bx-cog"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem href="#">منع قبول الرسائل</DropdownItem>
                                                        <DropdownItem href="#">صامت</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </li>

                                        </ul>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <div className="chat-conversation p-3">
                                    <ul className="list-unstyled">
                                        <PerfectScrollbar style={{ height: "470px" }}>
                                            <li>
                                                <div className="chat-day-title">
                                                    <span className="title">Today</span>
                                                </div>
                                            </li>
                                            {
                                                this.state.messages.map((message) =>
                                                    <li key={"test_k" + message.id} className={message.isRight ? "right" : ""}>
                                                        <div className="conversation-list">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="btn nav-btn" tag="i">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu direction="right">
                                                                    <DropdownItem href="#"><i className="bx bx-xs bxs-copy-alt mr-2"></i>نسخ</DropdownItem>
                                                                    <DropdownItem href="#"><i className="bx bx-xs bxs-message-square-edit mr-2"></i>تعديل</DropdownItem>
                                                                    <DropdownItem href="#" className="text-success"><i className="bx bx-xs bxs-save mr-2"></i>حفظ</DropdownItem>
                                                                    <div className="dropdown-divider"></div>
                                                                    <DropdownItem href="#" className="text-danger"><i className="bx bx-xs bxs-trash mr-2"></i>حذف</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                            <div className="ctext-wrap">
                                                                <div className="conversation-name">{message.name}</div>
                                                                <p>
                                                                    {message.message}
                                                                </p>
                                                                <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> {message.time}</p>
                                                            </div>

                                                        </div>
                                                    </li>
                                                )
                                            }
                                        </PerfectScrollbar>
                                    </ul>
                                </div>
                                <div className="p-3 chat-input-section">
                                    <Row>
                                        <Col>
                                            <div className="position-relative">
                                                <input type="textarea" value={this.state.curMessage} onChange={(e) => { this.setState({ curMessage: e.target.value }) }} className="form-control chat-input pl-3" placeholder="اكتب هنا..." />
                                                <div className="chat-input-links">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#">
                                                                <i className="bx bx-xs bx-message-square-detail" id="Emojitooltip"></i>
                                                                <UncontrolledTooltip placement="top" target="Emojitooltip">
                                                                    رسائل جاهزة
                                                                </UncontrolledTooltip >
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#">
                                                                <i className="bx bx-xs bx-file" id="Filetooltip"></i>
                                                                <UncontrolledTooltip placement="top" target="Filetooltip">
                                                                    وثائق
                                                                </UncontrolledTooltip >
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="col-auto">
                                            <Button type="button" color="primary" onClick={this.addMessage} className="btn-rounded chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">ارسل</span> <i className="bx bx-xs bx-mail-send"></i></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Chat;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card,UncontrolledTooltip,  CardBody, Badge, DropdownToggle, DropdownMenu, DropdownItem, Dropdown} from "reactstrap";

//Import Images
import ProfilePic from "../Profile/profilePic";

class CardTaskBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState(prevState => ({
            isMenu: !prevState.isMenu
        }));
    }
    render() {
        return (
            <React.Fragment>
                <Card className="task-box">
                    <CardBody className="borad-width-sm p-3">
                        <Dropdown isOpen={this.state.isMenu} toggle={this.toggleMenu} className="float-right ml-2">
                            <DropdownToggle style={{ cursor: "pointer" }} tag="i" id={"tooltip_" + this.props.data['id']} className="text-muted">
                                <i  className="mdi mdi-dots-horizontal-circle-outline font-size-24"></i>
                            </DropdownToggle>
                            <UncontrolledTooltip placement="top" target={"tooltip_" + this.props.data['id']}>
                                رأي اللجنة
                            </UncontrolledTooltip>
                            <DropdownMenu >
                                <DropdownItem href="#"><i className="bx bxs-x-circle font-size-16 mr-2"></i>الموافقة بشروط</DropdownItem>
                                <DropdownItem href="#"><i className="bx bxs-x-circle font-size-16 mr-2"></i>عدم الموافقة</DropdownItem>
                                <DropdownItem href="#"><i className="bx bxs-check-circle font-size-16 mr-2"></i>الموافقة</DropdownItem>
                                <DropdownItem href="#"><i className="bx bxs-calendar-plus font-size-16 mr-2"></i>تأجيل</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Link to="#" className="text-dark d-flex align-items-center"><h5 className="font-size-15 font-weight-bold">{this.props.data['citizen']} </h5></Link>
                        <h5 className="font-size-15"><Link to="#" className="text-muted">{this.props.data['category']}</Link></h5>
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="font-size-15 text-muted"><i className="bx bx-map"></i> {this.props.data['address']}</h5>
                            <Badge color="secondary" className="badge-soft-secondary font-size-12" pill>{this.props.data['id']}</Badge>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default CardTaskBox;

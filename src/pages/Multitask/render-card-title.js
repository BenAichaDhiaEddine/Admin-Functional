import React, { Component } from 'react';
import { CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

class RenderCardTitle extends Component {

    render() {
        return (
            <React.Fragment>
                <h5 className="mb-3 font-weight-normal"><i className={"bx bx-" + this.props.icon}></i> {this.props.title}</h5>
            </React.Fragment>
        );
    }
}

export default RenderCardTitle;

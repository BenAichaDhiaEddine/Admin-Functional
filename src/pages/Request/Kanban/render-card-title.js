import React, { Component } from 'react';
import { CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

class RenderCardTitle extends Component {

    render() {
        return (
            <React.Fragment>
                <CardTitle className="mb-4">{this.props.title}</CardTitle>
            </React.Fragment>
        );
    }
}

export default RenderCardTitle;

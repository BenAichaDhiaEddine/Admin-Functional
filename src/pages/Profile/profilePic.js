import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    UncontrolledTooltip
} from "reactstrap";
import CardDeck from "reactstrap/lib/CardDeck";

const defaultProps = {
    img: "Null",
    color: "secondary",
    name: "",
    size: "xs",
    tooltip: false,
};

class ProfilePic extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <React.Fragment>
                <div id={"profile_pic_" + this.props.id}>
                    {
                        this.props.img === "Null"
                            ?
                            <div className="avatar-xs">
                            <span className={"avatar-title rounded-circle bg-" + this.props.color}>
                                {this.props.name.charAt(0)}
                            </span>
                            </div>
                            :
                            <div>
                                <img className={"rounded-circle avatar-" + this.props.size} src={this.props.img} alt="" />
                            </div>
                    }
                </div>
                {
                    this.props.tooltip &&
                    <UncontrolledTooltip placement="top" target={"profile_pic_" + this.props.id}>
                        {this.props.name}
                    </UncontrolledTooltip>
                }


            </React.Fragment>
        );
    }
}
ProfilePic.defaultProps = defaultProps;
export default ProfilePic;

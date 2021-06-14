import React, {Component} from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Collapse,
    FormGroup,
    Label,
    Input,
    Button,
    CardTitle,
    Container,
    Table,
    UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, CardHeader, Badge
} from "reactstrap";
import Select from "react-select";
import {Link} from "react-router-dom";

const optionGroup = [
    {
        label: "أنواع المهمّات",
        options: [
            { label: "إختار مكلّف بالمهمة التّالية", value: "1" },
        ]
    }
];

class CommitteeItemConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            col2: false,
            selectedGroup: null,

        };

        this.t_col2 = this.t_col2.bind(this);

    }

    t_col2() {
        this.setState({col2: !this.state.col2});
    };
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };


    render() {
        const { selectedGroup } = this.state;
        return (
            <React.Fragment>


            </React.Fragment>
        );
    }
}

export default CommitteeItemConfig;

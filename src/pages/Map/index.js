import React, { Component } from 'react';
import  {
    Container,
    Row,Fade,
    Col,
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Label,
    Button,
    Input,
    Form,
    FormGroup,
    Progress, InputGroup, UncontrolledCollapse
} from "reactstrap";
import classnames from 'classnames';
import { Link } from "react-router-dom";
import Select from "react-select";
import FormItemGeneralConfig from "../RequestConfig/FormConfig/FormStepConfig/FormItemConfigs/FormItemGeneralConfig";

const optionGroup = [
    {
        label: "البنك",
        options: [
            { label: "أحمد بن زينب", value: "Mustard" },
            { label: "أشرف بن وناس", value: "Ketchup" },
            { label: "إيناس الحافي", value: "Relish" },
            { label: "محمد صالح", value: "Re2lish" },
        ]
    },
];


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: null,
            selectedCategory: null,
            selectedSubCategory: null,

        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    //Select
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };


    render() {
        const { selectedGroup } = this.state;
        const { selectedCategory } = this.state;

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Map;

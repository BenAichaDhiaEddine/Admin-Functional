import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Label,
  CardHeader,
  Media, Input, FormText,
  Button,
  CardTitle,
  Container,
  Table,
  UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, ButtonGroup, UncontrolledCollapse
} from "reactstrap";


class RequestFormStandardStep extends Component {
  constructor(props) {
    super(props);
    this.state = {

      col1: false,
      col2: false,
      col3: false,
      col5: false,

      selectedMulti: null,
      selectedGroup: null,
      selectedGroup1: null,
      popovertop: false,
    };

    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col5 = this.t_col5.bind(this);


    this.toggletop = this.toggletop.bind(this);

  }
  t_col1() {
    this.setState({ col1: !this.state.col1 });
  }
  t_col2() {
    this.setState({ col2: !this.state.col2 });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3 });
  }
  t_col5() {
    this.setState({ col5: !this.state.col5 });
  }

  handleSelectGroup = selectedGroup => {
    this.setState({ selectedGroup });
  };

  toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
  render() {
    const { optionList } = this.state;

    return (
      <React.Fragment>
        <Card className="mini-stats-wid mb-2">
          <CardBody className="">
            <Media>
              <Media body>
                <h5 className="mb-2">إعدادات عامّة</h5>
                <Row>
                  <Col md={6}>
                    <FormGroup className="ajax-select select2-container">
                      <p className="text-muted mb-1">المكلّف :</p>

                    </FormGroup>
                  </Col>
                </Row>


              </Media>
              <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                    <span className="avatar-title">
                        <i className="bx bx-cog font-size-24"></i>
                    </span>
              </div>
            </Media>

          </CardBody>
        </Card>






      </React.Fragment>
    );
  }
}

export default RequestFormStandardStep;

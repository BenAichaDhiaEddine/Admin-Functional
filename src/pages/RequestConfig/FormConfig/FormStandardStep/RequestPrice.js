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
import PropTypes from 'prop-types';
import {mapToCssModules} from "reactstrap/lib/utils";
import Select from "react-select";

const pricingList = [
  {
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "7" }
    ]
  },
];

const propTypes = {
  alert: PropTypes.bool,
}
const defaultProps = {
  alert: false,

};

class RequestPriceFormConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPricing: null,
    }

  }
  handleSelectedPricing = selectedPricing => {
    this.setState({ selectedPricing });
  };
  render() {
    let {
      alert,
    } = this.props;

    const { selectedPricing } = this.state;

    return (

      <React.Fragment>

        <Card className="mb-2" >
          <CardHeader className="bg-white border-bottom" >
            <div className="d-flex align-items-center justify-content-between">
              <div style={{ cursor: "pointer" }} id={"togglePrice" } Toggle onClick={this.collapse} className="d-flex align-items-center">
                <h5 className="font-size-14 mb-0">
                  <i className="font-size-16 align-middle mr-2 bx bx-coin-stack" ></i>
                  المبلغ</h5>
              </div>

              <div className="float-right">
                {
                  alert &&
                  <span className="ml-2"><i className="bx bx-error bx-burst-hover text-danger"></i></span>
                }

              </div>
            </div>
          </CardHeader>
          <UncontrolledCollapse className="" toggler={"togglePrice"}>
            <Row className=" p-3">
              <Col lg={6}  className="form-group">
                <Label htmlFor="subject">الإسم</Label>
                <input className="form-control" type="text" placeholder="اكتب" defaultValue="المبلغ" />
              </Col>
              <Col lg={6}  className="form-group">
                <Label htmlFor="subject">Nom</Label>
                <input className="form-control" type="text" placeholder="Nom" defaultValue="Prix" />
              </Col>
              <Col lg={12}  className="form-group">
                <Label htmlFor="subject">Value</Label>
                <input className="form-control" type="text" placeholder="Value"  />
              </Col>
              <Col md={12}>
                <FormGroup className="ajax-select mt-3 mt-lg-0 select2-container">
                  <p className="text-muted mb-1">Pricing :</p>
                  <Select
                      value={selectedPricing}
                      isMulti={false}
                      onChange={this.selectedAssignee}
                      options={pricingList}
                      placeholder="إختيار "
                      classNamePrefix="select2-selection"
                      isLoading={true}
                  />
                </FormGroup>
              </Col>

            </Row>
          </UncontrolledCollapse>
        </Card>

      </React.Fragment>
    );
  }
}
RequestPriceFormConfig.propTypes = propTypes;
RequestPriceFormConfig.defaultProps = defaultProps;

export default RequestPriceFormConfig;

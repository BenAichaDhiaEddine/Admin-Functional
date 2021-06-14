import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Collapse,
  FormGroup,
  Label,
  CardHeader,
  Media,
  Input,
  FormText,
  Button,
  CardTitle,
  Container,
  Table,
  UncontrolledTooltip,
  PopoverHeader,
  PopoverBody,
  Popover,
  ButtonGroup,
  UncontrolledCollapse,
  CardBody,
  NavItem,
  NavLink, Nav, TabPane, CardText, TabContent
} from "reactstrap";
import classnames from "classnames";
import FormItemConfig from "./FormItemConfigs";
import {Link} from "react-router-dom";
import RequestPriceFormConfig from "../FormStandardStep/RequestPrice";
import FormItemGeneralConfig from "./FormItemConfigs/FormItemGeneralConfig";
import RequestFormUser from "../FormStandardStep/RequestFormUser";
import RequestFormCompany from "../FormStandardStep/RequestFormCompany";
import MapItemConfig from "../FormStandardStep/MapItemConfig";
import RequestFormConfirmation from "../FormStandardStep/RequestFormConfirmation";


class RequestFormStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formItemConfigs:
          [
            {
              id:2,
              alert:"",
              type:"dropdown",
              name: {
                fr:"titre",
                ar:"عنوان",
              },
              description:{
                fr:"help text",
                ar:"تفسير",
              },
              placeholder:{
                fr:"Text",
                ar:"اكتب...",
              },
              config:{
                columns:12,
                maxChar:20,
                hidden:false,
                readOnly:false,
                required:true,
                value:"",
              },
              conditionalRules:[
                  {

                  },
              ],
            },
            {
              id:4,
              alert:"",
              type:"number",
              name: {
                fr:"titre",
                ar:"طول",
              },
              description:{
                fr:"help text",
                ar:"تفسير",
              },
              placeholder:{
                fr:"Text",
                ar:"اكتب...",
              },
              config:{
                columns:12,
                maxChar:20,
                hidden:false,
                readOnly:false,
                required:true,
                value:"",
              },
              conditionalRules:[
                  {

                  },
              ],
            },
            {
              id:5,
              alert:"",
              type:"number",
              name: {
                fr:"titre",
                ar:"عرض",
              },
              description:{
                fr:"help text",
                ar:"تفسير",
              },
              placeholder:{
                fr:"Text",
                ar:"اكتب...",
              },
              config:{
                columns:12,
                maxChar:20,
                hidden:false,
                readOnly:false,
                required:true,
                value:"",
              },
              conditionalRules:[
                  {

                  },
              ],
            },
            {
              id:6,
              alert:"",
              type:"number",
              name: {
                fr:"titre",
                ar:"مساحة",
              },
              description:{
                fr:"help text",
                ar:"تفسير",
              },
              placeholder:{
                fr:"Text",
                ar:"اكتب...",
              },
              config:{
                columns:12,
                maxChar:20,
                hidden:false,
                readOnly:false,
                required:true,
                value:"",
              },
              conditionalRules:[
                  {

                  },
              ],
            },
              ],
      customActiveTab: "1",
    };

    this.toggleCustom = this.toggleCustom.bind(this);

  }

  toggleCustom(tab) {
    if (this.state.customActiveTab !== tab) {
      this.setState({
        customActiveTab: tab
      });
    }
  }

  render() {

    this.toggleCustom = this.toggleCustom.bind(this);
    return (
      <React.Fragment>
        <p className="mb-3 font-weight-bold">Standard Steps</p>
        <RequestFormUser/>
        <RequestFormCompany/>
        <MapItemConfig/>
        <hr/>
        <p className="mb-3 font-weight-bold">Form Steps</p>

        <Nav tabs className="nav-tabs-custom">
          <NavItem>
            <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: this.state.customActiveTab === "1"
                })}
                onClick={() => {
                  this.toggleCustom("1");
                }}
            >
              <span className="d-none d-sm-block">أداءات</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: this.state.customActiveTab === "2"
                })}
                onClick={() => {
                  this.toggleCustom("2");
                }}
            >
              <span className="d-none d-sm-block">تفاصيل</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: this.state.customActiveTab === "3"
                })}
                onClick={() => {
                  this.toggleCustom("3");
                }}
            >
              <span className="d-none d-sm-block">وثائق</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: this.state.customActiveTab === "4"
                })}
                onClick={() => {
                  this.toggleCustom("4");
                }}
            >
              <span className="d-none d-sm-block"><i className="bx bx-plus-circle mr-2"></i>إضافة</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.customActiveTab}>
          <TabPane tabId="1" className="p-3">
            <Row>
              <Col sm="12">
                {
                  this.state.formItemConfigs.map((item, key) =>
                      <FormItemConfig formItem={item} key={key}/>
                  )
                }
                <Card className="mb-2 bg-transparent shadow-none border-0">
                  <CardHeader className=" dropzone-form" >
                    <h5 className="font-size-14 text-muted mb-0 float-right">
                      <i className="font-size-16 text-white align-middle bx bx-plus" ></i>
                    </h5>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <Row>
              <Col sm="12">
                {
                  this.state.formItemConfigs.map((item, key) =>
                      <FormItemConfig formItem={item} key={key}/>
                  )
                }
                <Card className="mb-2 bg-transparent shadow-none border-0">
                  <CardHeader className=" dropzone-form" >
                    <h5 className="font-size-14 text-muted mb-0 float-right">
                      <i className="font-size-16 text-white align-middle bx bx-plus" ></i>
                    </h5>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <Row>
              <Col sm="12">
                <Card className="mb-2 bg-transparent shadow-none border-0">
                  <CardHeader className=" dropzone-form" >
                    <h5 className="font-size-14 text-muted mb-0 float-right">
                      <i className="font-size-16 text-white align-middle bx bx-plus" ></i>
                    </h5>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <hr/>
        <Row>
          <Col>
            <p className="mb-3 font-weight-bold">Items Step</p>
          </Col>
          <Col>
            <div className="custom-control custom-switch mb-2 float-right" dir="ltr">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
              <label className="custom-control-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}></label>
            </div>
          </Col>
        </Row>


        <Card className="mb-2">
          <CardHeader className="bg-white mb-3 border-bottom">
            <div className="d-flex align-items-center justify-content-between">
              <div style={{ cursor: "pointer" }} id={"togglerA"} Toggle onClick={this.collapse} >
                <h6 >
                  <i className="bx bxs-star font-size-17 align-middle mr-2"></i>لافتات
                </h6>
              </div>

              <div className="float-right">
                <small className="ml-2 text-muted">[16]</small>
                <span className="ml-2 ">
                    <Link to="#">
                      <i className="bx bx-copy"></i>
                    </Link>
                  </span>
                <span className="ml-2 ">
                    <Link to="#">
                      <i className="bx bx-trash"></i>
                    </Link>
                  </span>
                <span className="ml-2 float-right">
                    <Link to="#"  style={{ cursor: "move" }} >
                      <i className="bx bx-move"></i>
                    </Link>
                  </span>
              </div>
            </div>

          </CardHeader>
          <UncontrolledCollapse className="" toggler={"togglerA"}>
            <CardBody>
              <p className="">
                Settings here
              </p>
            </CardBody>
          </UncontrolledCollapse>

          <Card className="mb-2 bg-transparent shadow-none border-0">
            <CardHeader className=" dropzone-form" >
              <h5 className="font-size-14 text-muted mb-0 float-right">
                <i className="font-size-16 text-white align-middle bx bx-plus" ></i>
              </h5>
            </CardHeader>
          </Card>
          <hr/>
          <Card className="mb-3">
            <CardHeader className="bg-white" id="headingOne">
              <h6 className="m-0 font-14">
                <span
                    style={{ cursor: "pointer" }} className="text-dark">
                   <i className="bx bx-coin font-size-17 align-middle mr-2"></i>Article price
                  <div className="float-right">
                    <small className="ml-2 text-muted">[17]</small>
                    <span className="ml-2 ">
                    <Link to="#">
                      <i className="bx bx-copy"></i>
                    </Link>
                  </span>
                    <span className="ml-2 ">
                    <Link to="#">
                      <i className="bx bx-trash"></i>
                    </Link>
                  </span>
                  <span className="ml-2 float-right">
                    <Link to="#"  style={{ cursor: "move" }} >
                      <i className="bx bx-move"></i>
                    </Link>
                  </span>
                  </div>
                </span>
              </h6>
            </CardHeader>
          </Card>


        </Card>


        <Card className="mb-2 bg-transparent shadow-none border-0">
          <CardHeader className=" dropzone-form" >
            <h5 className="font-size-14 text-muted mb-0 float-right">
              <i className="font-size-16 text-white align-middle bx bx-plus" ></i>
            </h5>
          </CardHeader>
        </Card>

        <hr/>
        <p className="mb-3 font-weight-bold">Request Price</p>
        <RequestPriceFormConfig alert />
        <hr/>
        <p className="mb-3 font-weight-bold">Confirmation Step</p>
        <RequestFormConfirmation/>

      </React.Fragment>
    );
  }
}

export default RequestFormStep;

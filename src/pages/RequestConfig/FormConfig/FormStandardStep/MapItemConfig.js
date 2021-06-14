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
  UncontrolledCollapse
} from "reactstrap";


class MapItemConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {



    return (

      <React.Fragment>

        <Card className="mb-2" >
          <CardHeader className="bg-white border-bottom" >
            <div className="d-flex align-items-center justify-content-between">
              <div style={{ cursor: "pointer" }} id={"toggleMap" } Toggle onClick={this.collapse} className="d-flex align-items-center">
                <h5 className="font-size-14 mb-0">
                  <i className="font-size-16 align-middle mr-2 bx bx-map" ></i>
                  خريطة</h5>
              </div>

              <div className="float-right">

              </div>
            </div>
          </CardHeader>
          <UncontrolledCollapse className="" toggler={"toggleMap"}>

            <p>Settings here</p>
          </UncontrolledCollapse>
        </Card>

      </React.Fragment>
    );
  }
}

export default MapItemConfig;

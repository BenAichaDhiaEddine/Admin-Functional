import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardTitle,
  Container,
  Table,
  UncontrolledTooltip, PopoverHeader, PopoverBody, Popover
} from "reactstrap";
import Select from "react-select";
import {Link} from "react-router-dom";




class Addresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [
        {
          id:"1",
          number:"23",
          street:"شارع التوفيق",
          zip: "2001",
          city: "حمام الأنف",
          state: "حمام الأنف",
        }
      ],
      popovertop: false,
    };
    this.toggletop = this.toggletop.bind(this);

  }


  toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
  render() {
    return (
      <React.Fragment>

                      <Row data-repeater-item>
                        <Col lg="1" className="form-group">
                          <Label htmlFor="name">رقم</Label>
                          <input className="form-control" type="number" defaultValue="" />
                        </Col>

                        <Col lg="3" className="form-group">
                          <Label htmlFor="name">شارع</Label>
                          <input className="form-control" type="text" defaultValue="" />
                        </Col>
                        <Col lg="2" className="form-group">
                          <Label htmlFor="name">ترقيم بريدي</Label>
                          <input className="form-control" type="number" defaultValue="" />
                        </Col>
                        <Col lg="3" className="form-group">
                          <Label htmlFor="subject">مدينة</Label>
                          <input className="form-control" type="text" defaultValue="" />
                        </Col>

                        <Col lg="3" className="form-group align-self-center">
                          <Button  className="mt-3" color="success">
                            إضافة
                          </Button>
                        </Col>
                      </Row>

                      <div className="table-responsive">
                        <Table className="table-centered table-nowrap table-hover">
                          <thead className="thead-light">
                          <tr>
                            <th scope="col" style={{ width: "70px" }}>#</th>
                            <th scope="col">رقم</th>
                            <th scope="col">شارع</th>
                            <th scope="col">zip</th>
                            <th scope="col">ولاية</th>
                            <th scope="col"></th>
                          </tr>
                          </thead>
                          <tbody>
                          {
                            this.state.addresses.map((address, key) =>
                                <tr key={"_address_" + key} >
                                  <td>{address.id}</td>
                                  <td>
                                    {address.number}
                                  </td>
                                  <td>
                                    {address.street}
                                  </td>
                                  <td>
                                    {address.zip}
                                  </td>
                                  <td>
                                    {address.city}
                                  </td>

                                  <td>
                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                      <li className="list-inline-item px-2">
                                        <Link to="#">
                                          <i className="bx bx-map"></i>
                                        </Link>
                                      </li>
                                      <li className="list-inline-item px-2">
                                        <Link to="#">
                                          <i className="bx bx-trash"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                            )
                          }

                          </tbody>
                        </Table>
                      </div>

      </React.Fragment>
    );
  }
}

export default Addresses;

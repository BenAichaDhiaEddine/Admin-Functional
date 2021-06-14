import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  DropdownMenu,
  DropdownToggle,
  Form,
  Row,
  UncontrolledDropdown,
} from "reactstrap"

export default class FileList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myfiles: [
        {
          id: 1,
          name: "ملفاتي",
          file: "12",
          Gb: 6,
        },
        {
          id: 2,
          name: "رخص",
          file: "20",
          Gb: 8,
        },
        {
          id: 3,
          name: "صور",
          file: "06 ",
          Gb: 2,
        },
        {
          id: 4,
          name: "مواطنين",
          file: "08",
          Gb: 4,
        },
        {
          id: 5,
          name: "جمعيات",
          file: "12",
          Gb: 6,
        },
        {
          id: 6,
          name: "شركات",
          file: "20",
          Gb: 8,
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Row className="mb-3">
            <Col xl={3} sm={6}>
              <div className="mt-2">
                <h5>ملفّات البنك</h5>
              </div>
            </Col>
            <Col xl={9} sm={6}>
              <Form className="mt-4 mt-sm-0 float-sm-right form-inline">
                <div className="search-box mb-2 mr-2">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control bg-light border-light rounded"
                      placeholder="بحث..."
                    />
                    <i className="bx bx-search-alt search-icon"></i>
                  </div>
                </div>

              </Form>
            </Col>
          </Row>
        </div>
        <hr className="mb-4" />
        <div>
          <Row>
            {this.state.myfiles.map((myfiles, key) => (
              <Col xl={4} sm={6} key={key}>
                <Card className="shadow-none border">
                  <CardBody className="p-3">
                    <div className="">
                      <div className="float-right ml-2">
                        <UncontrolledDropdown className="mb-2">
                          <DropdownToggle
                            color="white"
                            className="btn btn-link text-muted mt-n2"
                          >
                            <i className="mdi mdi-dots-horizontal"></i>
                          </DropdownToggle>

                          <DropdownMenu>
                            <Link className="dropdown-item" to="#">
                              فتح
                            </Link>
                            <Link className="dropdown-item" to="#">
                              إعادة تسمية
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">
                              فسخ
                            </Link>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="avatar-xs mr-3 mb-3">
                        <div className="avatar-title bg-transparent rounded">
                          <i className="bx bxs-folder font-size-24 text-warning"></i>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="overflow-hidden mr-auto">
                          <h5 className="font-size-14 text-truncate mb-1">
                            <Link to="#" className="text-body">
                              {myfiles.name}
                            </Link>
                          </h5>
                          <p className="text-muted bx text-truncate mb-0">
                            {myfiles.file} ملف
                          </p>
                        </div>
                        <div className="align-self-end ml-2">
                          <p className="text-muted bx mb-0">{myfiles.Gb}GB</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

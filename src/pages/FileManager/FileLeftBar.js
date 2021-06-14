import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Collapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledAlert,
  UncontrolledDropdown,
} from "reactstrap"

export default class FileRightBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file_collapse: true,
    }
    this.file = this.file.bind(this)
  }
  file() {
    this.setState({
      file_collapse: !this.state.file_collapse,
    })
  }
  render() {
    return (
      <React.Fragment>
        <Card className="filemanager-sidebar bg-transparent shadow-none border-0 mr-md-2">
          <CardBody>
            <div className="d-flex flex-column h-100">
              <div className="mb-3">
                <div className="mb-3">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-primary btn-rounded btn-block"
                      color="#eff2f7"
                    >
                      <i className="mdi mdi-plus mr-1"></i>إضافة ملف
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link className="dropdown-item" to="#">
                        <i className="bx bx-folder mr-1"></i> ملف
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="bx bx-file mr-1"></i> وثيقة
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <ul className="list-unstyled categories-list">
                  <li>
                    <div className="custom-accordion">
                      <Link
                        className="text-body py-1 d-flex align-items-center"
                        onClick={this.file}
                        to="#"
                      >
                        <i className="mdi mdi-folder font-size-16 text-warning mr-2"></i>{" "}
                        ملفاتي{" "}
                        {/* <i className="mdi mdi-chevron-up accor-down-icon ml-auto"></i> */}
                        <i
                          className={
                            this.state.file_collapse
                              ? "mdi mdi-chevron-up accor-down-icon ml-auto"
                              : "mdi mdi-chevron-down accor-down-icon ml-auto"
                          }
                        />
                      </Link>
                      <Collapse isOpen={this.state.file_collapse}>
                        <div className="card bg-transparent border-0 shadow-none pl-2 mb-0">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <span className="mr-auto">Folder 1</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <span className="mr-auto">Folder 2</span>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <span className="mr-auto">Folder 3</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <span className="mr-auto">Folder 4</span>{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-body d-flex align-items-center"
                    >
                      <i className="mdi mdi-account text-primary font-size-16 mr-2"></i>{" "}
                      <span className="mr-auto">مفات المواطنين</span>{" "}

                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-body d-flex align-items-center"
                    >
                      <i className="bx bxs-store text-muted font-size-16 mr-2"></i>{" "}
                      <span className="mr-auto">مفات الشركات</span>{" "}

                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-body d-flex align-items-center"
                    >
                      <i className="bx bxs-building text-warning font-size-16 mr-2"></i>{" "}
                      <span className="mr-auto">مفات الجمعيات</span>{" "}

                    </Link>
                  </li>
                  <hr/>
                  <li>
                    <Link
                      to="#"
                      className="text-body d-flex align-items-center"
                    >
                      <i className="mdi mdi-trash-can text-danger font-size-16 mr-2"></i>{" "}
                      <span className="mr-auto">ملفات محذوفة</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-body d-flex align-items-center"
                    >
                      <i className="mdi mdi-cog text-muted font-size-16 mr-2"></i>{" "}
                      <span className="mr-auto">إعدادات</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <UncontrolledAlert color="warning" className="px-3 mb-0">
                  <h3 className="mb-3 align-middle">
                    <i className="bx bx-error-circle bx-align-middle h3 mr-2"></i>تنبيه
                  </h3>

                  <div>
                    <p className="">مساحة الذاكرة محدودة</p>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        طلب تحديث <i className="mdi mdi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </UncontrolledAlert>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

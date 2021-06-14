import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

export default class Storage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <Card className="filemanager-sidebar ml-lg-2">
          <CardBody>
            <div className="text-center">
              <h5 className="font-size-15 mb-4">تخزين</h5>
              <div className="apex-charts">
                <ReactApexChart
                  options={this.props.filemanager.options}
                  series={this.props.filemanager.series}
                  type="radialBar"
                  height={150}
                />
              </div>

              <p className="text-muted mt-4">تم إستخدام (76%) من المساحة الجملية</p>
            </div>

            <div className="mt-4">
              <Card className="border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-xs align-self-center mr-2">
                        <div className="avatar-title rounded bg-transparent text-success font-size-24">
                          <i className="mdi mdi-file-certificate"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden mr-auto">
                        <h5 className="font-size-13 text-truncate mb-1">
                          رخص
                        </h5>
                        <p className="text-muted text-truncate mb-0">
                          176 ملف
                        </p>
                      </div>

                      <div className="ml-2">
                        <p className="text-muted">6 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>


              <div className="card border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-xs align-self-center mr-2">
                        <div className="avatar-title rounded bg-transparent text-info font-size-20">
                          <i className="mdi mdi-file-account"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden mr-auto">
                        <h5 className="font-size-13 text-truncate mb-1">
                          مطالب
                        </h5>
                        <p className="text-muted text-truncate mb-0">
                          21 ملف
                        </p>
                      </div>

                      <div className="ml-2">
                        <p className="text-muted">3.2 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="card border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-xs align-self-center mr-2">
                        <div className="avatar-title rounded bg-transparent text-primary font-size-16">
                          <i className="mdi mdi-file-multiple"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden mr-auto">
                        <h5 className="font-size-13 text-truncate mb-1">
                          مراسلات
                        </h5>
                        <p className="text-muted text-truncate mb-0">
                          21 ملف
                        </p>
                      </div>

                      <div className="ml-2">
                        <p className="text-muted">2 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="card border shadow-none">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-xs align-self-center mr-2">
                        <div className="avatar-title rounded bg-transparent text-warning font-size-20">
                          <i className="mdi mdi-folder"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden mr-auto">
                        <h5 className="font-size-13 text-truncate mb-1">
                          اخرى
                        </h5>
                        <p className="text-muted text-truncate mb-0">
                          20 ملف
                        </p>
                      </div>

                      <div className="ml-2">
                        <p className="text-muted">1.4 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

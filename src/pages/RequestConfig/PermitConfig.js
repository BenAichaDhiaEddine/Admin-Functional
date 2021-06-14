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
  Media,
  Button,
  CardTitle,
  Container,
  Table,
  UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, CardHeader
} from "reactstrap";
import Select from "react-select";
import {Link} from "react-router-dom";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import Dropzone from "react-dropzone";


class PermitConfig extends Component {
  constructor(props) {
    super(props);
    this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    this.state = { selectedFiles: [] };
  }

  handleAcceptedFiles = files => {
    files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          formattedSize: this.formatBytes(file.size)
        })
    );

    this.setState({ selectedFiles: files });
  };

  /**
   * Formats the size
   */
  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };


  render() {
    const { selectedGroup } = this.state;
    const { selectedGroup1 } = this.state;
    const { selectedMulti } = this.state;
    return (
      <React.Fragment>

        <Card className="email-leftbar mb-4 p-0 mr-0">
          <CardHeader>
            <h5 className="">نماذج رخص</h5>
          </CardHeader>

          <div className="mail-list">
            <input className="form-control border-0 " type="text" placeholder="إبحث..." />
            <Link className="border-top" to="#" >رخصة إشهار 1<i className="bx bx-download float-right text-primary font-size-16 align-middle mr-2"></i></Link>
            <Link className="border-top" to="#" >رخصة إشهار 2<i className="bx bx-download float-right text-primary font-size-16 align-middle mr-2"></i></Link>
            <Link className="border-top" to="#" >رخصة إشهار 3<i className="bx bx-download float-right text-primary font-size-16 align-middle mr-2"></i></Link>
          </div>

        </Card>

        <div className="email-rightbar mb-3">
          <Row>
            <Col>
              <div className="float-right mr-2 mb-3">
                <Button  className="mr-2" color="secondary">
                  <i className="bx bx-cloud-download font-size-16 align-middle mr-2"></i>تحميل نموذج
                </Button>
                <Button  className="mr-2" color="primary">
                  <i className="bx bx-printer font-size-16 align-middle mr-2"></i>طباعة نموذج
                </Button>
                <Button  className="mr-2" color="success">
                  <i className="bx bx-save font-size-16 align-middle mr-2"></i>حفظ
                </Button>

              </div>
            </Col>
          </Row>

          <Form>
            <Dropzone
                onDrop={acceptedFiles =>
                    this.handleAcceptedFiles(acceptedFiles)
                }
            >
              {({ getRootProps, getInputProps }) => (
                  <div className="dropzone">
                    <div
                        className="dz-message needsclick mt-2"
                        {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <div className="mb-3">
                        <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                      </div>
                      <h4>قم برفع نماذج الملفات أو اضغط هنا.</h4>
                    </div>
                  </div>
              )}
            </Dropzone>
            <div
                className="dropzone-previews mt-3"
                id="file-previews"
            >
              {this.state.selectedFiles.map((f, i) => {
                return (
                    <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        key={i + "-file"}
                    >
                      <div className="p-2">
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                                data-dz-thumbnail=""
                                height="80"
                                className="avatar-sm rounded bg-light"
                                alt={f.name}
                                src={f.preview}
                            />
                          </Col>
                          <Col>
                            <Link
                                to="#"
                                className="text-muted font-weight-bold"
                            >
                              {f.name}
                            </Link>
                            <p className="mb-0">
                              <strong>{f.formattedSize}</strong>
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                );
              })}
            </div>
          </Form>

        </div>





      </React.Fragment>
    );
  }
}

export default PermitConfig;

import React, {Component} from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Collapse,
    FormGroup,
    Label,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Button,
    CardTitle,
    Container,
    Table,
    UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, CardHeader, Badge
} from "reactstrap";



class FormItemGeneralConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col lg={6}  className="form-group">
                        <Label htmlFor="subject">الإسم</Label>
                        <input className="form-control" type="text" placeholder="اكتب" defaultValue={ this.props.formItemConfig.name.ar} />
                    </Col>
                    <Col lg={6}  className="form-group">
                        <Label htmlFor="subject">Nom</Label>
                        <input className="form-control" type="text" placeholder="" defaultValue={ this.props.formItemConfig.name.fr} />
                    </Col>
                    <Col className="">
                        <Row className=" mb-3 ml-0">
                            <Col lg={3} className="form-check">
                                <input  defaultChecked={this.props.formItemConfig.config.required} className="form-check-input" type="checkbox" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Required
                                </label>
                            </Col>
                            <Col lg={3} className="form-check">
                                <input defaultChecked={this.props.formItemConfig.config.hidden} className="form-check-input" type="checkbox" id="defaultCheck3" />
                                <label className="form-check-label" htmlFor="defaultCheck3">
                                    Hidden
                                </label>
                            </Col>
                            <Col lg={3} className="form-check">
                                <input defaultChecked={this.props.formItemConfig.config.readOnly} className="form-check-input" type="checkbox"  id="defaultCheck2" />
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Read Only
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}  className="form-group">
                                <Label htmlFor="subject"><i className="bx bx-columns font-size-17 align-middle mr-2"></i>Columns: 1-12</Label>
                                <input className="form-control" type="number" placeholder="" defaultValue={ this.props.formItemConfig.config.columns} />
                            </Col>
                            <Col lg={6}  className="form-group">
                                <Label htmlFor="subject"><i className="bx bx-hash font-size-17 align-middle mr-2"></i>Max number of characters</Label>
                                <input className="form-control" type="number" placeholder="" defaultValue={ this.props.formItemConfig.config.maxChar} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}  className="form-group">
                                <Label htmlFor="subject"><i className="bx bx-calculator font-size-17 align-middle mr-2"></i>Value</Label>
                                <input className="form-control" type="text" placeholder=""  />
                            </Col>
                            <div className="border-bottom"></div>
                            <Col lg={6}  className="form-group">
                                <Label htmlFor="subject">Placeholder عربي</Label>
                                <input className="form-control" type="text" placeholder="" defaultValue={ this.props.formItemConfig.placeholder.ar} />
                            </Col>
                            <Col lg={6}  className="form-group">
                                <Label htmlFor="subject">Placeholder - FR</Label>
                                <input className="form-control" type="text" placeholder="" defaultValue={ this.props.formItemConfig.placeholder.fr} />
                            </Col>
                            <div className="border-bottom"></div>
                            <Col lg={6}  className="form-group">
                                <Label htmlFor="subject">Description عربي</Label>
                                <textarea className="input-large form-control" id="message" rows="2" placeholder=""  value={ this.props.formItemConfig.description.ar}> </textarea>
                            </Col>
                            <Col lg={6}  className="form-group">
                                <Label htmlFor="subject">Description - FR</Label>
                                <textarea className="input-large form-control" id="message" rows="2" placeholder="" value={ this.props.formItemConfig.description.fr} ></textarea>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h4 className="">Conditional Logic</h4>
                            </Col>

                            <Col xs={12} className="mb-3">
                                <form className="form-inline ">
                                    <select className="form-control">
                                        <option>Show</option>
                                        <option>Hide</option>
                                    </select>
                                    <p className="mx-3 mt-2">
                                        if
                                    </p>
                                    <select className="form-control">
                                        <option>One</option>
                                        <option>All</option>
                                    </select>
                                    <p className="mx-3 mt-2">
                                        of the following match:
                                    </p>
                                </form>
                            </Col>

                            <Col xs={12} className="mb-3">
                                <form className="form-inline">
                                    <select className="form-control">
                                        <option>نوع اللافتات</option>
                                        <option>نوعية الإضاءة</option>
                                    </select>
                                    <select className="form-control mx-2">
                                        <option>Equals</option>
                                        <option>Not equal</option>
                                    </select>
                                    <select className="form-control">
                                        <option>مضيئة</option>
                                        <option>غير مضيئة</option>
                                    </select>
                                </form>
                            </Col>

                            <Col xs={12}>
                                <Button  className="mr-2" size="sm" outline color="primary">
                                    <i className="bx bx-plus-circle font-size-16 align-middle mr-2"></i>إضافة
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export default FormItemGeneralConfig;

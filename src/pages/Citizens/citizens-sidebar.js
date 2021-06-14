import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Card, Media, Col, Row} from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class CitizensSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Card className="col-md-3 border-0 bg-transparent shadow-none">
                    <Button type="button" color="primary"  className=" btn-rounded" onClick={this.togglemodal} block>
                        إضافة
                    </Button>
                    <hr></hr>
                    <div className="search-box chat-search-box pb-3">
                        <div className="position-relative">
                            <Input type="text" className="form-control" placeholder="بحث..." />
                            <i className="bx bx-search-alt search-icon"></i>
                        </div>
                    </div>

                    <h6 className="">رصيد</h6>
                    <div className="mail-list mt-1">
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>خالص</Link>
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>له ديون</Link>
                    </div>





                </Card>

                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={this.togglemodal}>

                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            مواطن جديد
                            </ModalHeader >
                        <ModalBody>
                            <h4>معلومات شخصيّة</h4>
                            <Row>
                                <Col md="6">
                                    <div className="mb-2">
                                        <label  className="">الإسم</label>
                                        <input className="form-control" type="text"  placeholder="عربي"/>
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">اللقب</label>
                                        <input className="form-control" type="text" placeholder="عربي"/>
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">Prénom</label>
                                        <input className="form-control" type="text" placeholder="Fr" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">Nom</label>
                                        <input className="form-control" type="text"  placeholder="Fr"/>
                                    </div>

                                </Col>
                                <Col md="6">
                                    <div className="mb-2">
                                        <label  className="">البريد الإلكتروني</label>
                                        <input className="form-control" type="email" placeholder="email@exemple.tn" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">رقم الهاتف</label>
                                        <input className="form-control" type="tel" placeholder="22123456" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">رقم بطاقة التعريف</label>
                                        <input className="form-control" type="number" placeholder="09923450" />
                                    </div>
                                </Col>


                            </Row>
                            <h4>العنوان</h4>
                            <Row>
                                <Col md="4">
                                    <div className="mb-2">
                                        <label  className="">رقم</label>
                                        <input className="form-control" type="number"  />
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="mb-2">
                                        <label  className="">شارع</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="mb-2">
                                        <label  className="">ترقيم بريدي</label>
                                        <input className="form-control" type="number" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="mb-2">
                                        <label  className="">الولاية</label>
                                        <input className="form-control" type="text" defaultValue="حمام الأنف" disabled={true} />
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={this.togglemodal}>إلغاء</Button>
                            <Button type="button" color="success">حفظ <i className="bx bx-check ml-1"></i></Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default CitizensSidebar;

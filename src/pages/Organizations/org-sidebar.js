import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Card, Media, Row, Col} from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class OrgSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types:[
                {
                    name: "جمعيّة",
                    number:12,
                    categories:[
                        {name:"ثقافية",number:12,},
                        {name:"رياضية",number:12,},
                        {name:"شبابية",number:12,},
                    ],
                },
            ],
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
                    <Button type="button" color="warning"  className=" btn-rounded" onClick={this.togglemodal} block>
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


                    <h6 className="mt-3">أنواع</h6>
                    <div>
                        {
                            this.state.types.map((type, i) =>
                                <div className="mt-3">
                                <Link key={"_type_" + i} to="#" > {type.name} <span className="">({type.number})</span></Link>
                                    <div className="mail-list">
                                        {
                                            type.categories.map((category, i) =>
                                                <Link key={"_category_" + i} to="#" className="ml-3" > {category.name} <span className="">({category.number})</span></Link>
                                            )
                                        }
                                    </div>

                                </div>


                            )
                        }
                    </div>





                </Card>

                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={this.togglemodal}>

                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            مؤسسة جديدة
                            </ModalHeader >
                        <ModalBody>
                            <h4>معلومات شخصيّة</h4>
                            <Row>
                                <Col md="6">
                                    <div className="mb-2">
                                        <label  className="">الإسم</label>
                                        <input className="form-control" type="text"  />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">الوضع القانوني</label>
                                        <input className="form-control" type="text"  />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">نوع</label>
                                        <input className="form-control" type="text"  />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">طبيعة المؤسسة</label>
                                        <input className="form-control" type="text"  />
                                    </div>

                                </Col>
                                <Col md="6">
                                    <div className="mb-2">
                                        <label  className="">الممثل القانوني</label>
                                        <input className="form-control" type="email" placeholder="أبحث عن ممثل" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">البريد الإلكتروني</label>
                                        <input className="form-control" type="email" defaultValue="email@web.tn" disabled={true} />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">رقم الهاتف</label>
                                        <input className="form-control" type="tel" defaultValue="22123457" disabled={true} />
                                    </div>
                                </Col>


                            </Row>
                            <h4>عنوان المكتب الرئيسي</h4>
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
                            <Button type="button" color="warning">حفظ <i className="bx bx-check ml-1"></i></Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default OrgSideBar;

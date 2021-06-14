import React, { Component } from 'react';
import {
    Row,
    Col,
    Modal,
    ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, UncontrolledTooltip, ModalFooter
} from "reactstrap";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import Select from "react-select";
import {Link} from "react-router-dom";



const optionGroup = [
    {
        label: "اختر المعوّض",
        options: [
            { label: "محمد القربي", value: "recent" },
            { label: "فريد لسمر", value: "old" },
            { label: "سمير فايق", value: "updated" },
        ]
    },
];

class Replace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeTab: 1,
            selectedFiles: [],
            selectedGroup: null,
        };
        this.togglemodal.bind(this);
    }
    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    //Select
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };

    render() {
        const { selectedGroup } = this.state;
        return (
            <React.Fragment>

                <Link  onClick={this.togglemodal} className="m-1" id="litecoin">
                    <div className="avatar-xs">
                                                <span className="avatar-title rounded-circle bg-soft-info text-info font-size-18">
                                                    <i className="bx bx-plus"></i>
                                                </span>
                    </div>
                    <UncontrolledTooltip placement="top" target="litecoin">
                        إضافة
                    </UncontrolledTooltip>
                </Link>

                <Modal isOpen={this.state.modal} role="dialog" size="lg" autoFocus={true} centered={true} id="verificationModal" tabIndex="-1" toggle={this.togglemodal}>
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
                                        <input className="form-control" type="text" defaultValue="أحمد بن زينب" disabled={true}/>
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
                            <Button type="button" color="danger">حفظ <i className="bx bx-check ml-1"></i></Button>
                        </ModalFooter>
                    </div>
                </Modal>


            </React.Fragment>
        );
    }
}

export default Replace;

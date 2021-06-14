import React, { Component } from 'react';
import {
    Row,
    Col,
    Modal,
    ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button
} from "reactstrap";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import Select from "react-select";

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

class NewEmployee extends Component {
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

                <button  onClick={this.togglemodal} className="btn btn-rounded btn-primary mb-2"><i className="bx  bx-plus mr-2"></i>إضافة عضو</button>

                <Modal isOpen={this.state.modal} role="dialog" size="lg" autoFocus={true} centered={true} id="verificationModal" tabIndex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            تعويض
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md="6">
                                    <h4>معلومات شخصيّة</h4>
                                    <div className="mb-2">
                                        <label  className="">الإسم - عربية</label>
                                        <input className="form-control" type="text" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">اللقب - عربية</label>
                                        <input className="form-control" type="text" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">Prénom - Fr</label>
                                        <input className="form-control" type="text" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">Nom - Fr</label>
                                        <input className="form-control" type="text" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label >جنس</label>

                                        <select className="form-control">
                                            <option>أختار</option>
                                            <option>ذكر</option>
                                            <option>أنثى</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">تاريخ الميلاد</label>
                                        <input className="form-control" type="date" defaultValue="" id="example-date-input" />
                                    </div>


                                </Col>
                                <Col md="6 ">
                                    <h4>معلومات الدخول</h4>
                                    <div className="mb-2">
                                        <label className="">كلمة السّر</label>
                                        <input className="form-control" type="password" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">تأكيد كلمة السّر</label>
                                        <input className="form-control" type="password" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">البريد الإلكتروني</label>
                                        <input className="form-control" type="email" defaultValue="" />
                                    </div>
                                    <div className="mb-2">
                                        <label  className="">رقم الهاتف</label>
                                        <input className="form-control" type="tel" defaultValue="" />
                                    </div>
                                </Col>

                            </Row>
                            <button className="btn btn-success">إضافة</button>
                        </ModalBody>
                    </div>
                </Modal>


            </React.Fragment>
        );
    }
}

export default NewEmployee;

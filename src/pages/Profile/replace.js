// import React, { Component } from 'react';
// import {
//     Row,
//     Col,
//     Modal,
//     ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button
// } from "reactstrap";

// import avatar1 from "../../assets/images/users/avatar-1.jpg";
// import avatar2 from "../../assets/images/users/avatar-2.jpg";
// import Select from "react-select";

// const optionGroup = [
//     {
//         label: "اختر المعوّض",
//         options: [
//             { label: "محمد القربي", value: "recent" },
//             { label: "فريد لسمر", value: "old" },
//             { label: "سمير فايق", value: "updated" },
//         ]
//     },
// ];

// class Replace extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: false,
//             activeTab: 1,
//             selectedFiles: [],
//             selectedGroup: null,
//         };
//         this.togglemodal.bind(this);
//     }
//     togglemodal = () => {
//         this.setState(prevState => ({
//             modal: !prevState.modal
//         }));
//     };

//     //Select
//     handleSelectGroup = selectedGroup => {
//         this.setState({ selectedGroup });
//     };

//     render() {
//         const { selectedGroup } = this.state;
//         return (
//             <React.Fragment>

//                 <button  onClick={this.togglemodal} className="btn btn-outline-secondary btn-block"><i className="bx bx-transfer"></i>تعويض</button>

//                 <Modal isOpen={this.state.modal} role="dialog" size="lg" autoFocus={true} centered={true} id="verificationModal" tabIndex="-1" toggle={this.togglemodal}>
//                     <div className="modal-content">
//                         <ModalHeader toggle={this.togglemodal}>
//                             تعويض
//                         </ModalHeader>
//                         <ModalBody>
//                             <div>
//                                         <Form>
//                                             <Row>
//                                                 <Col lg="6">
//                                                     <FormGroup>
//                                                         <Label>مدّة التعويض</Label>
//                                                         <select className="custom-select" >
//                                                             <option value="1" defaultValue>وقتي</option>
//                                                             <option value="2">نهائي</option>
//                                                         </select>
//                                                     </FormGroup>
//                                                 </Col>
//                                                 <Col lg="6">
//                                                     <FormGroup>
//                                                         <Label >تاريخ العودة</Label>
//                                                         <Input type="text" className="form-control" placeholder="إلى"/>
//                                                     </FormGroup>
//                                                 </Col>

//                                             </Row>


//                                         </Form>
//                                         <div >
//                                             <p>اختر المسؤزول المعوّض</p>
//                                             <Form>
//                                                 <Row className="align-items-center align-middle p-3">
//                                                     <Col lg="4">
//                                                         <div className="text-center">
//                                                             <img src={avatar1} alt="" className="mb-4 avatar-lg rounded-circle img-thumbnail" />
//                                                             <p>سامية بن صالح</p>
//                                                         </div>


//                                                     </Col>
//                                                     <Col lg="4">
//                                                         <div className="text-center">
//                                                             <div to="#" className=" d-inline-block">
//                                                                 <div className="avatar-md">
//                                                                 <span className="avatar-title rounded-circle bg-soft-secondary text-secondary">
//                                                                     <i className="bx bx-transfer"></i>
//                                                                 </span>
//                                                                 </div>
//                                                             </div>
//                                                         </div>


//                                                     </Col>
//                                                     <Col lg="4">
//                                                         <div className="text-center">
//                                                             <img src={avatar2} alt="" className="mb-4 avatar-lg rounded-circle img-thumbnail" />
//                                                             <FormGroup className="select2-container">
//                                                                 <Select
//                                                                     placeholder="المعوّض"
//                                                                     value={selectedGroup}
//                                                                     onChange={this.handleSelectGroup}
//                                                                     options={optionGroup}
//                                                                     classNamePrefix="select2-selection"
//                                                                 />

//                                                             </FormGroup>
//                                                         </div>

//                                                     </Col>
//                                                 </Row>
//                                             </Form>
//                                         </div>
//                                 <p>سيتم إدراج المهام الحالية للمسؤول حسب الفترة المختارة </p>


//                                 <button className="btn btn-success">تأكيد</button>

//                             </div>
//                         </ModalBody>
//                     </div>
//                 </Modal>


//             </React.Fragment>
//         );
//     }
// }

// export default Replace;

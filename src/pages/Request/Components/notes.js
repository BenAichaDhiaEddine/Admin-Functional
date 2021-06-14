import React, { Component } from 'react';
import {Col, Card, CardBody, Media, Row, UncontrolledTooltip, Button} from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react/dist/simplebar-react";

//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-6.jpg";
import {Link} from "react-router-dom";
import ProfilePic from "../../Profile/profilePic";


class Notes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes:[
                { id: 1, name: "سعاد العربي", date: "12.12.2019", image: "Null", msg:"الرجاء التثبت من الوثيقة 2", role:"رئيس - المصلحة الإقتصادية" },
                { id: 2, name: "فتحي مراد", date: "12.12.2019", image: "Null", msg:"الوثيقة مطابقة للقانون", role:"عضو - المصلحة الإقتصادية" },
                { id: 3, name: "منير بن عبد الله", date: "12.12.2019", image: avatar5, msg:"الرجاء إجابة المواطن ", role:"عضو - المصلحة الإقتصادية" },
            ],
        };
    }
    render() {
        return (
            <React.Fragment>
                <h4 className="card-title mb-4">القرار</h4>

                <h4 className="card-title mb-4">ملاحظات خاصّة بالإدارة</h4>
                <SimpleBar style={{ maxHeight: "390px" }}>
                    <ul className="list-group">
                        {
                            this.state.notes.map((note) =>
                                <li className="list-group-item">
                                    <Media>
                                        <div className=" mr-3">
                                            <ProfilePic id={note.id}  img={note.image} name={note.name} />
                                        </div>
                                        <Media body>
                                            <h5 className="font-size-14 text-muted">{note.name}</h5>
                                            <p className="">{note.msg}</p>

                                            <div className="float-right">
                                                <p className="text-muted mb-0"><i className="mdi mdi-account mr-1"></i>{note.role}</p>
                                            </div>
                                            <p className="text-muted mb-0">{note.date}</p>
                                        </Media>
                                    </Media>
                                </li>
                            )
                        }
                    </ul>
                </SimpleBar>
                <div className="py-3 chat-input-section">
                    <Row>
                        <Col>
                            <div className="position-relative">
                                <input type="text"  className="form-control chat-input" placeholder="اكتب هنا..." />
                                <div className="chat-input-links">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#">
                                                <i className="bx bx-message-square-detail" id="Emojitooltip"></i>
                                                <UncontrolledTooltip placement="top" target="Emojitooltip">
                                                    رسائل جاهزة
                                                </UncontrolledTooltip >
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-auto">
                            <Button type="button" color="primary" className="btn-rounded chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">ارسل</span> <i className="bx bx-mail-send"></i></Button>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default Notes;

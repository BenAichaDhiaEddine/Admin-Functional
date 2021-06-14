import React, { Component } from 'react';
import { Row, Col, Card } from "reactstrap";

//Import Images
import profileImg from "../../assets/images/profile-img.png";

class CardWelcome extends Component {
    render() {
        return (
            <React.Fragment>

                                <Card className=" near-moon-gradient col-lg-6" >
                                    <div>
                                        <Row>
                                            <Col xs="7">
                                                <div className=" p-3">
                                                    <h5 className="font-weight-bold mb-3">23 جانفي 2021</h5>
                                                    <ul className="pl-3 mb-0">
                                                        <li className="py-1"><span className="badge badge-light">7+</span> مطالب للمعالجة</li>
                                                        <li className="py-1"><span className="badge badge-light">3+</span> مطالب للمتابعة</li>
                                                        <li className="py-1"><span className="badge badge-light">1+</span> مطالب معلّقة</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xs="5" className="align-self-end">
                                                <img src={profileImg} alt="" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
            </React.Fragment>
        );
    }
}

export default CardWelcome;

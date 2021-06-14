import React, { Component } from 'react';
import {Row, Col, Card, CardBody, Form, FormGroup, InputGroup, Label, Input, Media} from "reactstrap";

import LineSteps from "./lineSteps";
//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import ProfilePic from "../../Profile/profilePic";

class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            request:{
                id: "2021/0332",
                date:"23/01/2020",
                update:"31/02/2020",
                type: "رخصة إشهار",
                category: "إشغال الملك العمومي",
                issuer:"مواطن",
                address:"20 نهج بن خلدون حمام الأنف",
                citizen:{
                    name:"أحمد بن زينب",
                    image: avatar2,
                },
                organization:{
                    name:"أرسلا",
                    image: avatar2,
                },
                decision:{
                    refused:false,
                    approved:false,
                },
                previousStatus:{
                    name:"فحص المعطيات",
                    style:{
                        color:"#31d141"
                    }

                },
                status:{
                    name:"فحص الوثائق",
                    style:{
                        color:"#20add1"
                    }

                },
                nextStatus:{
                    name:"قرار اللجنة",
                    style:{
                        color:"#d19d34"
                    }
                }

            },
            data:[
                { id: 1, col:6, type:"text", name: "خصائص اللوحة الإشهارية", value: "مضيئة" },
                { id: 2, col:6, type:"text", name: "نوع اللوحة", value: "حائط مبنى" },
                { id: 3, col:4, type:"text", name: "طول", value: "20" },
                { id: 4, col:4, type:"text", name: "عرض", value: "5" },
                { id: 5, col:4, type:"text", name: "سمك", value: "4" },
                { id: 6, col:12, type:"textarea", name: "مضمون اللوحة", value: "هنا يباع المشماش" }
            ],
            price:{ pricing: 1, value: 540, period:"سنة" },
        };

    }
    render() {
        return (
            <React.Fragment>
                { this.state.request.decision.refused &&
                <span className="stamp stamp-pulse is-nope">مرفوض</span>
                }
                { this.state.request.decision.approved &&
                <span className="stamp stamp-pulse is-approved">مقبول</span>                }


                <Card className="bg-light p-3 shadow-none">
                    <Row>
                        <Col md="4">
                            <Media>
                                <div className="align-self-center mr-3">

                                    <ProfilePic id={this.state.request.id} img={this.state.request.citizen.image} name={this.state.request.citizen.name} />

                                </div>

                                <Media className="overflow-hidden" body>
                                    <h5 className="text-truncate font-size-14 mb-1">{this.state.request.citizen.name}</h5>
                                    <p className="text-muted mb-0">{this.state.request.organization.name}</p>
                                </Media>
                            </Media>
                        </Col>
                        <Col md="4">
                            <h5 className=" font-size-14" >مطلب {this.state.request.type} عدد: {this.state.request.id} </h5>
                            <h5 className="text-muted font-size-14">{this.state.request.category}</h5>
                        </Col>
                        <Col md="4">
                            <h5 className=" font-size-14" >تاريخ الايداع: {this.state.request.date}</h5>
                            <h5 className="text-muted font-size-14">تاريخ التحديث: {this.state.request.update}</h5>
                        </Col>

                    </Row>



                </Card>

                <LineSteps/>


                <hr/>
                <Label htmlFor="requestAdress">العنوان</Label>
                <Row>
                    <Col md="9">
                        <FormGroup>
                            <input className="form-control" type="text" id="requestAdress" disabled={true} defaultValue={this.state.request.address} />
                        </FormGroup>
                    </Col>
                    <Col md="3">
                        <button className="btn btn-light btn-block">الموقع</button>
                    </Col>
                </Row>
                <Row>

                    {
                        this.state.data.map((item) =>

                    <Col md={item.col}>
                        <FormGroup>
                            <Label htmlFor={item.id}>{item.name}</Label>
                            <input className="form-control" type={item.type} id={item.id} disabled={true} defaultValue={item.value} />
                        </FormGroup>
                    </Col>
                        )
                    }
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <h4 className="font-size-16">المعلوم</h4>
                        <h4 className="font-weight-bold text-primary font-size-20">{this.state.price.value} د.ت. / {this.state.price.period} </h4>
                        <p className="text-muted">{this.state.price.pricing}</p>
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export default Data;

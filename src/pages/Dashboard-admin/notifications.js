import React, { Component } from 'react';
import { Col, Card, CardBody, Media } from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

//Import Images
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";


class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications:[
                { id:1, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:2, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:3, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:4, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:5, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:6, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:7, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:8, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:9, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
                { id:10, name: "أحمد بن زينب", date:"12.01.2021 16:20", heading:"رسالة جديدة",category:"",details:"",icon:"message-square-detail",alert:"",seen:true},
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                            <div >
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">إشعارات</h4>
                                        <SimpleBar style={{ maxHeight: "633px" }}>
                                        <ul className="list-group">

                                            {
                                                this.state.notifications.map((notification, key) =>

                                                    <li className="list-group-item" key={key}>
                                                        <Media>
                                                            <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-secondary">
                                                            <i className={"text-light bx bxs-"+ notification.icon}></i>
                                                        </span>
                                                            </div>
                                                            <Media body>
                                                                <h5 className="font-size-14">{notification.heading}</h5>
                                                                <p className="text-muted">{notification.details}</p>

                                                                <div className="float-right">
                                                                    <small className="text-muted mb-0">{notification.date}</small>
                                                                </div>
                                                                <p className="text-muted mb-0"><i className="mdi mdi-account mr-1"></i>{notification.name}</p>
                                                            </Media>
                                                        </Media>
                                                    </li>
                                                )
                                            }

                                        </ul>
                                        </SimpleBar>
                                    </CardBody>
                                </Card>
                            </div>
            </React.Fragment>
        );
    }
}

export default Notifications;

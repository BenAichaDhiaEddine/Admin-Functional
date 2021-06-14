import React, { Component } from 'react';
import {Col, Card, CardBody, Media, Row, UncontrolledTooltip, Button, Table} from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react/dist/simplebar-react";

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import {Link} from "react-router-dom";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";


class Logs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: 1, img: "Null", name: "محمد دراغلر", role: "مواطن", action: "تغفيير مكلّف", date: "10.01.2019 - 15:00",
                },
                {
                    id: 2, img: avatar2, name: "مصطفى النابلي", role: "عضو", action: "إضافة متابع", date: "12.02.2020 - 15:00",
                },
                {
                    id: 3, img: avatar3, name: "مراد فقيه", role: "رئيس مصلحة", action: "تغيير إعدادات", date: "30.03.2020 - 15:00",
                },
                {
                    id: 4, img: "Null", name: "سامية فتحاوي", role: "عضو", action: "إضافة معلوم", date: "28.05.2020 - 15:00",
                },
                {
                    id: 5, img: avatar5, name: "سامية فتحاوي", role: "عضو", action: "تعديل معلوم", date: "28.05.2020 - 15:00",
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="m-5 d-flex justify-content-center" style={{ paddingTop: "150px" , }}>
                <div className="table-responsive">
                    <Table className="  table-hover">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ width: "70px" }}>#</th>
                            <th scope="col">Nom client</th>
                            <th scope="col">Date du demande</th>
                            <th scope="col">Documents</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((user, i) =>
                                <tr key={"_user_" + i} >
                                    <td>
                                        {
                                            user.img === "Null"
                                                ? <div className="avatar-xs">
                                                                                <span className="avatar-title rounded-circle">
                                                                                    {user.name.charAt(0)}
                                                                                </span>
                                                </div>
                                                : <div>
                                                    <img className="rounded-circle avatar-xs" src={user.img} alt="" />
                                                </div>
                                        }

                                    </td>
                                    <td>
                                        <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{user.name}</Link></h5>
                                        {/* <p className="text-muted mb-0">{user.role}</p> */}
                                    </td>
                                    <td>  {user.date}   </td>
                                    <td>
                                        <ul
                                        className="list-inline font-size-20 contact-links mb-
                                        0"
                                        >
                                        <li className="list-inline-item px-2">
                                            <Link to="/" id={"user" + user._id}>
                                            <i className="bx bx-file"></i>
                                            <UncontrolledTooltip
                                                placement="top"
                                                target={"user" + user._id}
                                            >
                                                Fichiers
                                            </UncontrolledTooltip>
                                            </Link>
                                        </li>
                                        </ul>
                                        </td>
                                    <td>
                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                    <li className="list-inline-item px-2" >
                                        <Link to="#">
                                        <i className="bx bx-info-circle"></i>
                                     
                                        </Link>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <Link to="#">
                                        <i className="bx bx-download"></i>
                                        </Link>
                                    </li>
                                    </ul>
                                    </td>
                                </tr>
                            )
                        }

                        </tbody>
                    </Table>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Logs;

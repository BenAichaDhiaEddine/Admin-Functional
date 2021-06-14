import React, { Component } from 'react';
import {Col, Card, CardBody, Media, Row, UncontrolledTooltip, Button, Table} from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react/dist/simplebar-react";

//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";
import {Link} from "react-router-dom";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import ProfilePic from "../../Profile/profilePic";


class Logs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: 1, img: "Null", name: "محمد دراغلر", role: "مواطن", action: "رفع صورة", date: "10.01.2019 - 15:00",

                },
                {
                    id: 2, img: avatar2, name: "مصطفى النابلي", role: "عضو", action: "إضافة متابع", date: "12.02.2020 - 15:00",

                },
                {
                    id: 3, img: avatar3, name: "مراد فقيه", role: "رئيس مصلحة", action: "إنجاز مهمة", date: "30.03.2020 - 15:00",

                },
                {
                    id: 4, img: "Null", name: "سامية فتحاوي", role: "عضو", action: "تغيير الأجل الأقصى", date: "28.05.2020 - 15:00",

                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="table-responsive">
                    <Table className="  table-hover">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ width: "70px" }}>#</th>
                            <th scope="col">المستخدم</th>
                            <th scope="col">الفعل</th>
                            <th scope="col">التاريخ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((user, i) =>
                                <tr key={"_user_" + i} >
                                    <td>
                                        <ProfilePic id={user.id} img={user.img} name={user.name} />
                                    </td>
                                    <td>
                                        <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{user.name}</Link></h5>
                                        <p className="text-muted mb-0">{user.role}</p>
                                    </td>
                                    <td>
                                        {user.action}
                                    </td>
                                    <td>
                                        {user.date}
                                    </td>

                                </tr>
                            )
                        }

                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        );
    }
}

export default Logs;

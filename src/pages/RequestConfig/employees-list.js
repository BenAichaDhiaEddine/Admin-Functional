import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Components
import NewEmployee from "./new-employee";

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class ContactsList extends Component {
    state = {
        users: [
            {
                id: 1, img: "Null", name: "سامية بن صالح", nameFr: "Mounira Ben Slah", email: "mounira@bizerte.tn", projects: "125",
                groups: [
                    { name: "رئاسة البنك" },
                ]
            },
            {
                id: 2, img: avatar2, name: "أمير العكروت", nameFr: "Amir Akrout", email: "mounira@bizerte.tn", projects: "132",
                groups: [
                    { name: "المصلحة الاقتصادية" },
                ]
            },
            {
                id: 3, img: avatar3, name: "فوزي مراد", nameFr: "Faouzi Mrad", email: "mounira@bizerte.tn", projects: "1112",
                groups: [
                    { name: "المصلحة الادارية" }
                ]
            },
            {
                id: 4, img: "Null", name: "سمير الباروني", nameFr: "Samir Baroudi", email: "mounira@bizerte.tn", projects: "121",
                groups: [
                    { name: "المصلحة الاقتصادية" },
                    { name: "المصلحة الادارية" }
                ]
            },
            {
                id: 5, img: avatar4, name: "مراد بن غربية", nameFr: "Mourad Ben Gharbia", email: "mounira@bizerte.tn", projects: "145",
                groups: [
                    { name: "الشكايات" },
                ]
            },
            {
                id: 6, img: avatar5, name: "فادية صالح", nameFr: "Fedia Salah", email: "mounira@bizerte.tn", projects: "136",
                groups: [
                    { name: "الكتابة العامة" },
                ]
            },
            {
                id: 7, img: "Null", name: "كريم نوار", nameFr: "Karim Naouar", email: "mounira@bizerte.tn", projects: "125",
                groups: [
                    { name: "المصلحة الاقتصادية" },
                ]
            },
            {
                id: 8, img: avatar7, name: "سالم الأسود", nameFr: "Salem Lasoued", email: "mounira@bizerte.tn", projects: "136",
                groups: [
                    { name: "المصلحة الادارية" }
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <NewEmployee/>
                                        <div className="table-responsive">
                                            <Table className="table-centered table-nowrap table-hover">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "70px" }}>#</th>
                                                        <th scope="col">الاسم</th>
                                                        <th scope="col">البريد الالكتروني</th>
                                                        <th scope="col">ينتمي إلى</th>
                                                        <th scope="col">عدد المهام</th>
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
                                                                    <p className="text-muted mb-0">{user.nameFr}</p>
                                                                </td>
                                                                <td>{user.email}</td>
                                                                <td>
                                                                    <div>
                                                                        {
                                                                            user.groups.map((group, key) =>
                                                                                <Link to="#" className="badge badge-soft-primary font-size-11 m-1" key={"_group_" + key}>{group.name}</Link>
                                                                            )
                                                                        }

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {user.projects}
                                                                </td>
                                                                <td>
                                                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                                                        <li className="list-inline-item px-2">
                                                                            <Link to="#" id={"profile" + user.id}>
                                                                                <i className="bx bx-user-circle"></i>
                                                                                <UncontrolledTooltip placement="top" target={"profile" + user.id}>
                                                                                    الملف
                                                                                </UncontrolledTooltip>
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
                                        <Row>
                                            <Col lg="12">
                                                <Pagination className="pagination pagination-rounded justify-content-center mt-4">
                                                    <PaginationItem disabled>
                                                        <PaginationLink previous href="#" />
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            1
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem active>
                                                        <PaginationLink href="#">
                                                            2
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            3
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            4
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            5
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink next href="#" />
                                                    </PaginationItem>
                                                </Pagination>
                                            </Col>
                                        </Row>
            </React.Fragment>
        );
    }
}

export default ContactsList;

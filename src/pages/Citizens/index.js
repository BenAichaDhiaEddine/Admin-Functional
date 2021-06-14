import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table,CardDeck , UncontrolledTooltip, Pagination,Badge, PaginationItem, PaginationLink } from "reactstrap";

import CitizensSidebar from "./citizens-sidebar";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class Citizens extends Component {
    state = {
        citizens: [
            {id: 1, img: "Null", name: "أحمد بن زينب", address:"شارع ابن خلدون", phone: "21578987", organizations: "1",  requests: "125", permits: "45", invoices:"5", due:"-1534",},

        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="القائمة" breadcrumbItem="مواطنين" />

                        <Row>
                            <Col lg="12">

                                <CardDeck>
                                    <CitizensSidebar />
                                    <Card className="col-md-9">
                                        <CardBody>
                                            <div className="table-responsive">
                                                <Table className="table-centered table-nowrap table-hover">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th scope="col" style={{ width: "70px" }}>#</th>
                                                            <th scope="col">مواطن</th>
                                                            <th scope="col">رقم الهاتف</th>
                                                            <th scope="col">رصيد</th>
                                                            <th scope="col">أرقام</th>
                                                            <th scope="col">ملف</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.citizens.map((citizen, i) =>
                                                                <tr key={"_organization_" + i} >
                                                                    <td>
                                                                        {
                                                                            citizen.img === "Null"
                                                                                ? <div className="avatar-xs">
                                                                                    <span className="avatar-title rounded-circle">
                                                                                        {citizen.name.charAt(0)}
                                                                                    </span>
                                                                                </div>
                                                                                : <div>
                                                                                    <img className="rounded-circle avatar-xs" src={citizen.img} alt="" />
                                                                                </div>
                                                                        }

                                                                    </td>
                                                                    <td>
                                                                        <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{citizen.name}</Link></h5>
                                                                        <p className="text-muted mb-0">{citizen.address}</p>
                                                                    </td>
                                                                    <td>{citizen.phone}</td>

                                                                    <td>
                                                                        <Badge dir="ltr" color={ citizen.due < 0 ? "danger" : "success"} className="font-size-14" pill> {citizen.due}</Badge>

                                                                    </td>
                                                                    <td>
                                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"o" + citizen.id} >
                                                                                    <i className="bx bx-store mr-2"></i><span className="font-size-14" >{citizen.organizations}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"o" + citizen.id}>
                                                                                        مؤسسات
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"r" + citizen.id} >
                                                                                    <i className="bx bx-git-pull-request mr-2"></i><span className="font-size-14" >{citizen.requests}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"r" + citizen.id}>
                                                                                        مطالب
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"p" + citizen.id}>
                                                                                    <i className="bx bx-award mr-2"></i><span  className="font-size-14">{citizen.permits}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"p" + citizen.id}>
                                                                                        رخص
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"i" + citizen.id}>
                                                                                    <i className="bx bx-money mr-2"></i><span  className="font-size-14">{citizen.invoices}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"i" + citizen.id}>
                                                                                        فواتير
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <Link to="citizen" className="btn btn-primary btn-sm btn-rounded" >ملف</Link>
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
                                        </CardBody>
                                    </Card>
                                </CardDeck>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Citizens;

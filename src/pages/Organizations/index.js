import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table,CardDeck , UncontrolledTooltip, Pagination,Badge, PaginationItem, PaginationLink } from "reactstrap";

import OrgSidebar from "./org-sidebar";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class Organizations extends Component {
    state = {
        organizations: [
            {id: 1, img: "Null", name: "أرسلا", representative: "أحمد بن زينب", address:"شارع ابن خلدون", phone: "21578987", requests: "125", permits: "45", invoices:"5", due:"-354",},
            {id: 2, img: avatar3, name: "STEG", representative: "مراد حسني", address:"شارع ابن الجزار", phone: "73078902", requests: "2", permits: "1", invoices:"1", due:"0",},

        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="القائمة" breadcrumbItem="جمعيات" />

                        <Row>
                            <Col lg="12">

                                <CardDeck>
                                    <OrgSidebar />
                                    <Card className="col-md-9">
                                        <CardBody>
                                            <div className="table-responsive">
                                                <Table className="table-centered table-nowrap table-hover">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th scope="col" style={{ width: "70px" }}>#</th>
                                                            <th scope="col">مؤسسة</th>
                                                            <th scope="col">ممثل</th>
                                                            <th scope="col">رقم الهاتف</th>
                                                            <th scope="col">رصيد</th>
                                                            <th scope="col">أرقام</th>
                                                            <th scope="col">ملف</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.organizations.map((organization, i) =>
                                                                <tr key={"_organization_" + i} >
                                                                    <td>
                                                                        {
                                                                            organization.img === "Null"
                                                                                ? <div className="avatar-xs">
                                                                                    <span className="avatar-title bg-danger rounded-circle">
                                                                                        {organization.name.charAt(0)}
                                                                                    </span>
                                                                                </div>
                                                                                : <div>
                                                                                    <img className="rounded-circle avatar-xs" src={organization.img} alt="" />
                                                                                </div>
                                                                        }

                                                                    </td>
                                                                    <td>
                                                                        <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{organization.name}</Link></h5>
                                                                        <p className="text-muted mb-0">{organization.address}</p>
                                                                    </td>
                                                                    <td>{organization.representative}</td>
                                                                    <td>{organization.phone}</td>

                                                                    <td>
                                                                        <Badge dir="ltr" color={ organization.due < 0 ? "danger" : "success"} className="font-size-14" pill> {organization.due}</Badge>

                                                                    </td>
                                                                    <td>
                                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"r" + organization.id} >
                                                                                    <i className="bx bx-git-pull-request mr-2"></i><span className="font-size-14" >{organization.requests}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"r" + organization.id}>
                                                                                        مطالب
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"p" + organization.id}>
                                                                                    <i className="bx bx-award mr-2"></i><span  className="font-size-14">{organization.permits}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"p" + organization.id}>
                                                                                        رخص
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item px-2">
                                                                                <Link to="#" id={"i" + organization.id}>
                                                                                    <i className="bx bx-money mr-2"></i><span  className="font-size-14">{organization.invoices}</span>
                                                                                    <UncontrolledTooltip placement="top" target={"i" + organization.id}>
                                                                                        فواتير
                                                                                    </UncontrolledTooltip>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <Link to="organization" className="btn btn-secondary btn-sm btn-rounded" >ملف</Link>
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

export default Organizations;

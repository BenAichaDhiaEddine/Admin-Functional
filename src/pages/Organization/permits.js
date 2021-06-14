import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Badge, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Components


//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class PermitsList extends Component {
    state = {
        permits: [
            {
                id: 1, date: "02.02.2019 13:00", expiration: "02.02.2020 13:00",  corporate:"حمام الأنف",
                status: { name: "صالحة" , color:"success"},
                request: { id:2, issuer:"أحمد بن زينب", type: "إشهار", category: "ملك عمومي", date: "01.01.2019 12:00",}

            },
        ]
    };
    render() {
        return (
            <React.Fragment>

                                        <div className="table-responsive">
                                            <Table className="table-centered table-nowrap table-hover">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "70px" }}>#</th>
                                                        <th scope="col">نوع</th>
                                                        <th scope="col">الطلب</th>
                                                        <th scope="col">الايداع</th>
                                                        <th scope="col">الحالة</th>
                                                        <th scope="col">تاريخ</th>
                                                        <th scope="col">البنك</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.permits.map((permit, i) =>
                                                            <tr key={"_permit_" + i} >
                                                                <td>{permit.id}</td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{permit.request.type}</Link></h5>
                                                                    <p className="text-muted mb-0">{permit.request.category}</p>

                                                                </td>
                                                                <td>{permit.request.id}</td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{permit.request.issuer}</Link></h5>
                                                                    <p className="text-muted mb-0"> {permit.request.date}</p>
                                                                </td>
                                                                <td>
                                                                    <Badge color={permit.status.color} className=" font-size-14" pill>{permit.status.name}</Badge>

                                                                </td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"> {permit.date}</h5>
                                                                    <p className="text-muted mb-0">إلى: {permit.expiration}</p>
                                                                </td>
                                                                <td>{permit.corporate}</td>

                                                                <td>
                                                                    <Link to="permit" className="btn btn-secondary btn-sm btn-rounded " >فتح</Link>
                                                                    <Link to="permit" className="btn btn-success btn-sm btn-rounded mx-2" >تجديد</Link>
                                                                    <Link to="permit" className="btn btn-danger btn-sm btn-rounded " >سحب</Link>
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

export default PermitsList;

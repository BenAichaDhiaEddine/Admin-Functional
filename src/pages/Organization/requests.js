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

class RequestsList extends Component {
    state = {
        requests: [
            {
                id: 1, date: "01.01.2019 12:00", update: "02.02.2020 13:00", type: "إشهار", category: "ملك عمومي", corporate:"حمام الأنف", issuer:"أحمد بن زينب",
                status: { name: "فحص الوثائق" , color:"success"}, messages: 3, files:2

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
                                                        <th scope="col">نوع الطلب</th>
                                                        <th scope="col">الايداع</th>
                                                        <th scope="col">الحالة</th>
                                                        <th scope="col">تحديث</th>
                                                        <th scope="col">البنك</th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.requests.map((request, i) =>
                                                            <tr key={"_request_" + i} >
                                                                <td>{request.id}</td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{request.type}</Link></h5>
                                                                    <p className="text-muted mb-0">{request.category}</p>
                                                                </td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{request.issuer}</Link></h5>
                                                                    <p className="text-muted mb-0"> {request.date}</p>

                                                                  </td>
                                                                <td>
                                                                    <Badge color={request.status.color} className=" font-size-14" pill>{request.status.name}</Badge>
                                                                </td>
                                                                <td>{request.update}</td>
                                                                <td>{request.corporate}</td>
                                                                <td>
                                                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                                                        <li className="list-inline-item px-2">
                                                                            <Link to="#" id={"r" + request.id} >
                                                                                <i className="bx bx-file mr-2"></i><span className="font-size-14" >{request.files}</span>
                                                                                <UncontrolledTooltip placement="top" target={"r" + request.id}>
                                                                                    ملفات
                                                                                </UncontrolledTooltip>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item px-2">
                                                                            <Link to="#" id={"p" + request.id}>
                                                                                <i className="bx bx-message mr-2"></i><span  className="font-size-14">{request.messages}</span>
                                                                                <UncontrolledTooltip placement="top" target={"p" + request.id}>
                                                                                    رسائل
                                                                                </UncontrolledTooltip>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td>
                                                                    <Link to="request" className="btn btn-secondary btn-sm btn-rounded" >ملف المطلب</Link>
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

export default RequestsList;

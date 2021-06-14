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

class InvoicesList extends Component {
    state = {
        invoices: [
            {
                id: 1, creationDate: "02.02.2019 13:00", dueDate: "02.02.2020 13:00",  corporate:"حمام الأنف",
                status: { name: "غير خالصة" , color:"danger"}, value:"323",
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
                                                        <th scope="col">التاريخ</th>
                                                        <th scope="col">القيمة</th>
                                                        <th scope="col">الحالة</th>
                                                        <th scope="col">البنك</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.invoices.map((invoice, i) =>
                                                            <tr key={"_invoice_" + i} >
                                                                <td>{invoice.id}</td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{invoice.request.type}</Link></h5>
                                                                    <p className="text-muted mb-0">{invoice.request.category}</p>

                                                                </td>
                                                                <td>{invoice.request.id}</td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{invoice.request.issuer}</Link></h5>
                                                                    <p className="text-muted mb-0"> {invoice.request.date}</p>
                                                                </td>
                                                                <td>
                                                                    <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{invoice.creationDate}</Link></h5>
                                                                    <p className="text-muted mb-0">الأجل الأقصى: {invoice.dueDate}</p>
                                                                </td>
                                                                <td>{invoice.value}</td>
                                                                <td>
                                                                    <Badge color={invoice.status.color} className=" font-size-14" pill>{invoice.status.name}</Badge>

                                                                </td>

                                                                <td>{invoice.corporate}</td>

                                                                <td>
                                                                    <Link to="invoice" className="btn btn-secondary btn-sm btn-rounded " >فتح</Link>
                                                                    <Link to="invoice" className="btn btn-primary btn-sm btn-rounded mx-3" >تحميل</Link>
                                                                    <Link to="invoice" className="btn btn-success btn-sm btn-rounded" >خلاص</Link>
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

export default InvoicesList;

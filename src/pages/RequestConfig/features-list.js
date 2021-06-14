import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Components


class ContactsList extends Component {
    state = {
        features:[
            {id:"01",name:"الإشهار", requests:22, value: true},
            {id:"02",name:"رصيف", requests:812, value: false},
            {id:"03",name:"بناء", requests:302, value: true},

        ],
    }
    render() {
        return (
            <React.Fragment>
                <h4>نظام التصاريح</h4>
                                        <div className="table-responsive">
                                            <Table className="table-centered table-nowrap table-hover">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "70px" }}>#</th>
                                                        <th scope="col">إسم</th>
                                                        <th scope="col">عدد المطالب</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.features.map((feature, i) =>
                                                            <tr key={"_user_" + i} >
                                                                <td>
                                                                    {feature.id}
                                                                </td>
                                                                <td>
                                                                    <div className="custom-control custom-switch mb-2" dir="rtl">
                                                                        <input type="checkbox" className="custom-control-input" id={feature.id} defaultChecked={feature.value} />
                                                                        <label className="custom-control-label" htmlFor={feature.id} >{feature.name}</label>

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {feature.requests}
                                                                </td>

                                                                <td>
                                                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                                                        <li className="list-inline-item px-2">
                                                                            <Link to="#" id={"feature" + feature.id}>
                                                                                <i className="bx bx-cog"></i>
                                                                                <UncontrolledTooltip placement="top" target={"feature" + feature.id}>
                                                                                    إعدادات
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

            </React.Fragment>
        );
    }
}

export default ContactsList;

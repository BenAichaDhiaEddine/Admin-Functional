import React ,{ useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

import NewEmployee from "./new-employee";
import { useDispatch, useSelector } from "react-redux";
import { getCorporateAdmins } from "../../store/members/action";

function EmployeesList() {
    const { membersList } = useSelector(({ Members }) => Members);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCorporateAdmins());
    }, [])

    return (
        <React.Fragment>
            <NewEmployee />
            <div className="table-responsive">
                <Table className="table-centered table-nowrap table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ width: "70px" }}>#</th>
                            <th scope="col">الاسم</th>
                            <th scope="col">البريد الالكتروني</th>
                            <th scope="col">ينتمي إلى</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            membersList && membersList?.map((item , i) =>
                                <tr key={i}>
                                    <td>
                                        {
                                            item?.img === "Null"
                                                ?   <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle">
                                                            {item?.firstName?.ar.charAt(0)}
                                                        </span>
                                                    </div>
                                                :   <div>
                                                        <img className="rounded-circle avatar-xs" src={item?.img} alt="" />
                                                    </div>
                                        }

                                    </td>
                                    <td>
                                        <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">
                                            {
                                                item.disabled &&
                                                <del>{item?.firstName?.ar}</del>
                                            }
                                            {
                                                !(item.disabled) &&
                                                <p>
                                                    {item?.firstName?.ar + " " + item?.lastName?.ar}
                                                </p>
                                            }
                                        </Link></h5>
                                        <p className="text-muted mb-0">{item?.firstName?.fr}</p>
                                    </td>
                                    <td>{item?.email}</td>
                                    <td>
                                        {/*                                        <div>
                                            {
                                                item.groups.map((group, key) =>
                                                    <Link to="#" className="badge badge-soft-primary font-size-13 m-1" key={"_group_" + key}>{group.name}</Link>
                                                )
                                            }

                                        </div> */}
                                    </td>
                                    <td>
                                        le nom du l'equipe {/* {item.tel}  */}
                                    </td>
                                    <td>
                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                            <li className="list-inline-item px-2">
                                                <Link to="#" id={"profile" + item?.id}>
                                                    <i className="bx bx-user-circle"></i>
                                                    <UncontrolledTooltip placement="top" target={"profile" + item?.id}>
                                                        الملف
                                                    </UncontrolledTooltip>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item px-2">
                                                <Link to="#" id={"disable" + item?.id}>
                                                    <i color="danger" className="bx bx-x-circle "></i>
                                                    <UncontrolledTooltip placement="top" target={"disable" + item?.id}>
                                                        تجميد
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

export default EmployeesList

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Components


//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

class Representatives extends Component {
  state = {
    representatives: [
      {
        id: 1, img: "Null", name: "أحمد بن زينب", nameFr: "Ahmed Ben Zineb", email: "a.benzineb@arsela.co", phone: "27 807 558", from:"01.01.2020", to:"الأن"
      },
      {
        id: 2, img: avatar2, name: "أشرف بن وناس", nameFr: "Achraf Ben Ouannes", email: "a.benouannes@arsela.co", phone: "26 314 922", from:"01.01.2019", to:"31.12.2019"
      },
    ]
  }
  render() {
    return (
        <React.Fragment>

          <div className="table-responsive">
            <Table className="table-centered table-nowrap table-hover">
              <thead className="thead-light">
              <tr>
                <th scope="col" style={{ width: "70px" }}>#</th>
                <th scope="col">الاسم</th>
                <th scope="col">البريد الالكتروني</th>
                <th scope="col">هاتف</th>
                <th scope="col">المدة</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.representatives.map((user, i) =>
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
                      <td dir="ltr">{user.phone}</td>
                      <td>
                        <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">من: {user.from}</Link></h5>
                          <p className="text-muted mb-0">إلى: {user.to}</p>
                      </td>
                      <td>
                        <ul className="list-inline font-size-20 contact-links mb-0">
                          <li className="list-inline-item px-2">
                            <Link to="citizen" id={"profile" + user.id}>
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

export default Representatives;

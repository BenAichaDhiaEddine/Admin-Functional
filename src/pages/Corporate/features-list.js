import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Table,
  UncontrolledTooltip,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import NewCredit from "./new-credit";
import { useDispatch, useSelector } from "react-redux";
import { getCredit } from "../../store/credit/action";
import { useHistory } from "react-router-dom";

function CreditsList() {
  const { creditsList } = useSelector(({ Credit }) => Credit);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCredit());
  }, []);

  return (
    <React.Fragment>
      <NewCredit />
      <br></br>
      <div className="table-responsive">
        <Table className="table-centered table-nowrap table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" style={{ width: "70px" }}>
                #
              </th>
              <th scope="col">Nom crédit</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Nombre de demande</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {creditsList && creditsList?.map((item, i) => (
                <tr key={item._id}>
                  <td>{i}</td>
                  <td>
                  <input type="checkbox" className="custom-control-input" id={item._id} defaultChecked={item.enabled} />
                    <label className="custom-control-label" htmlFor={item._id}> {item.name} </label>
                    </td>
                  <td>{item?.creditType?.name?.ar}</td>
                  <td>
                    {/* {item?.requests} */}
                    </td>
                  <td>
                    <ul
                      className="list-inline font-size-20 contact-links mb-
                    0"
                    >
                      <li className="list-inline-item px-2">
                        <div id={"request-config" + item._id}
                        onClick={() => {
                          history.push(`/request-config/${item._id}/conditions`);
                        }}
                        
                        >
                          <i className="bx bx-cog"></i>
                          <UncontrolledTooltip
                            placement="top"
                            target={"request-config" + item._id}
                          >
                            Configuration
                          </UncontrolledTooltip>
                        </div>
                      </li>
                      <li className="list-inline-item px-2" id={"item" + item._id}>
                        <Link to="#">
                          <i className="bx bx-pencil"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item px-2">
                        <Link to="#">
                          <i className="bx bx-trash"></i>
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
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
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default CreditsList;

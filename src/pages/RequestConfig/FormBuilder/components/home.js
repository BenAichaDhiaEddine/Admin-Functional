
import React, { useEffect, Fragment } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, Container, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


//Import Breadcrumb
import Breadcrumbs from "../../../../components/Common/Breadcrumb";


//Actions
import {disableEdit,enableEdit,getList,retrieve} from "../../../../store/forms/actions";

const Forms = (props) => {
 
  // Hooks Declaration
  const dispatch = useDispatch();
  const history = useHistory();
  const { list,loading } = useSelector(
    ({ forms }) => forms
  );
  

  const mapDataToDisplay = (data) => {
    let columns = [
      {
        label: "Name ",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Credit",
        field: "credit",
        sort: "asc",
        width: 200,
      },
      {label: "description",
      field: "description",
      sort: "asc",
      width: 200,},
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ];
    
    let rows = data.map((elm) => {
      console.log(elm)
      return {
        name: elm.name,
        description: elm.description ,
        action: (
          <Fragment>
            <button
              className="btn btn-success waves-effect waves-light btn btn-success "
              onClick={() => {
                dispatch(enableEdit(elm.id));
                dispatch(retrieve(elm.id));
                history.push(`/formbuilder/${elm.id}`);
              }}
              value={elm.id}
              style={{
                minWidth: "100px",
              }}
            >
              Edit
            </button>

            <br />
            <button
              className="btn btn-secondary waves-effect waves-light btn btn-danger "
              value={elm.id}
              style={{
                minWidth: "100px",
                marginTop: "10px",
              }}
            >
              Delete
            </button>
            <br />
          </Fragment>
        ),
      };
    });
    const display = {
      columns: columns,
      rows: rows,
    };
   
    return display;
  };

  useEffect(() => {
    dispatch(getList());
    return () => {
    };
  }, []);
 
  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Form Builder" breadcrumbItem="" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row className="mb-2">
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <div className="text-sm-right">
                        <Button
                          onClick={() => {
                            history.push(`/formbuilder/create`);
                             dispatch(disableEdit());
                          }}
                          type="button"
                          color="primary"
                          className="btn-rounded waves-effect waves-light mb-2 mr-2"
                        >
                          <i className="mdi mdi-plus mr-1"></i> Add&nbsp;&nbsp;{" "}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  {loading ? (
                  <div>Loading...</div>
                  ) : (
                    <MDBDataTable
                      responsive
                      striped
                      bordered
                      data={mapDataToDisplay(list)}
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Forms;

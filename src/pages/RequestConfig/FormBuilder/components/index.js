import React, { useState, Fragment, useEffect } from "react";
import { reduxForm } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, CardBody, TabContent, TabPane, NavLink, NavItem } from "reactstrap";
import classnames from "classnames";

//Actions
import {
  retrieve,
  resetForms as reset,
  enableEdit,
} from "../../../../store/forms/actions";

// Component
import Information from "./formInformation";
import FormBuilder from "./AppComponent"

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
// import SpinnerPage from "../../components/loader";
// SCSS


const EditForm = (props) => {
  const params = useParams();
  let { id } = params;
  const { loading, editMode, stepNumber } = useSelector(
    ({ forms }) => forms
  );

  const dispatch = useDispatch();

  const initData = () => {
    if (id != "create" && !editMode) {
      dispatch(enableEdit(id));
      dispatch(retrieve(id));
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const StepsDisplay = (id) => {
    switch (id) {
      case 0:
        return <Information id={id} />;
      case 1:
        return <FormBuilder />;
      case 2:
        return null;
      default:
        return null;
    }
  };
  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          {loading ? (
            <div >Loading</div>
          ) : (
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <TabContent activeTab={0}>
                      <TabPane tabId={0} className="p-3">
                        {StepsDisplay(stepNumber)}
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </Fragment>
  );
};

export default reduxForm({
  form: "Forms",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(EditForm);
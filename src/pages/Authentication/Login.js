import React, { Component } from "react";

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link, useHistory } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import { loginUser, apiError } from "../../store/actions";

// import images
import profile from "../../assets/images/login-process.png";
import logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
const Login = (props) => {
  const { error } = useSelector(({ Login }) => Login);
  const history = useHistory();
  const dispatch = useDispatch();
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    console.log(values);
    dispatch(loginUser(values, history));
  };

  // componentDidMount()
  // {
  //     this.props.apiError("");
  // }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-white p-4">
                        <h5 className="text-white font-weight-bold">
                        Bienvenue
                        </h5>
                        <p>Enregistrez votre connexion</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-3">
                        <span className="avatar-title rounded-circle bg-white border-light border shadow">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="44"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={handleValidSubmit}
                    >
                      {/* {error && error ? (
                        <Alert color="danger">{error}</Alert>
                      ) : null} */}

                      <div className="form-group">
                        <AvField
                          name="email"
                          label="Email"
                          value=""
                          className="form-control"
                          placeholder="exemple@commune.gov.tn"
                          type="email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <AvField
                          name="password"
                          label="Mot de passe"
                          value=""
                          type="password"
                          required
                          placeholder="Mot de passe"
                        />
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                        >
                          Connexion
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i>Récupérer votre mot de passe
                        </Link>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                ©  Tous les droits sont réservés.Arsela {new Date().getFullYear()} 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

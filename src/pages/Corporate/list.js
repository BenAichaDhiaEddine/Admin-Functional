import React, { useState, useEffect ,Fragment   } from "react";
import { MDBDataTable } from "mdbreact";
import {Container, Row, Col, Card, CardBody, Table, UncontrolledTooltip, Pagination, PaginationItem,Form,Modal,
    ModalHeader, ModalBody, FormGroup, Label, Input, Button , PaginationLink ,Breadcrumb, BreadcrumbItem
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./datatables.scss";
import "./switch.css";
import { withNamespaces } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import {addNewCorporateAdmin ,updateCorporateAdmin,  deleteCorporateAdmin,getCorporateAdmins} from "../../store/corporateAdmin/action";
const CorporateAdmin = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const { errors, handleSubmit, control, reset, setError, clearErrors } = useForm();
    const [selectedId, setSelectedId] = useState(null);
    const { loading, corporateAdminList } = useSelector(({ CorporateAdmin }) => CorporateAdmin);
    const [mode, setMode] = useState("add");
    const [open, setOpen] = useState(false);
    const onSubmit = (data) => {
    if (mode === "add") {
        let dataToSubmit = {...data , "firstName":{
            "ar":data.fnamear,
            "fr":data.fnamefr
            },
        "lastName":{
            "ar":data.lnamear,
            "fr":data.lnamefr
            }
        }
    delete dataToSubmit.fnamear;
    delete dataToSubmit.fnamefr;
    delete dataToSubmit.lnamefr;
    delete dataToSubmit.lnamear;
    dispatch(addNewCorporateAdmin(dataToSubmit));
    } else if (mode === "edit") {
    let dataToSubmit = {...data,
        "firstName": {
                "ar": data.fnamear,
                "fr": data.fnamefr
            },
            "lastName": {
                "ar":  data.lnamear,
                "fr": data.lnamefr
            },
        "id": selectedId._id,
    };
    delete dataToSubmit.fnamear;
    delete dataToSubmit.fnamefr;
    delete dataToSubmit.lnamefr;
    delete dataToSubmit.lnamear;
    dispatch(updateCorporateAdmin(dataToSubmit));
    }
  };
  const toggleModal = () => {
    setMode("add");
    setOpen(!open);
    setSelectedId(null);
    reset({
        fnamear: "",
        fnamefr: "",
        lnamear: "",
        lnamefr: "",
        email: "",
        phone: "",
        date: "",
    });
  };
  useEffect(() => {
    dispatch(getCorporateAdmins());
  }, []);
 

  const mapDataToDisplay = () => {
    let rows = corporateAdminList?.map((elm) => {
      let i=0;
      return {
        fullName:elm?.firstName.ar +" " + elm?.lastName.ar,
        fnamear: elm?.firstName.ar,
        fnamefr: elm?.firstName.fr,
        lnamear: elm?.lastName.ar,
        lnamefr: elm?.lastName.fr,
        email: elm?.email,
        phone: elm?.phone,
        actions: (
          <Fragment>
              <ul className="list-inline font-size-20 contact-links mb-0">
                                            <li className="list-inline-item px-2">
                                                <Link  id={"profile" + elm?.id}
                                                onClick={() => {
                                                  dispatch(deleteCorporateAdmin(elm));
                                                }
                                                  }
                                                >
                                                    <i className="bx bx-x-circle"></i>
                                                    <UncontrolledTooltip placement="top" target={"profile" + elm?.id}>
                                                    Supprimer
                                                    </UncontrolledTooltip>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item px-2"
                                            onClick={() => {
                                              reset({
                                                fnamear: elm?.firstName?.ar,
                                                fnamefr: elm?.firstName?.fr,
                                                lnamear: elm?.lastName?.ar,
                                                lnamefr: elm?.lastName?.fr,
                                                email: elm?.email, 
                                                phone: elm?.phone,
                                              });
                                              setSelectedId(elm);
                                              setMode("edit");
                                              setOpen(true);
                                            }}
                                            value={elm?._id}>
                                                <Link  id={"disable" + elm?.id}
                                                
                                                >
                                                    <i color="success" className="bx bx-edit"></i>
                                                    <UncontrolledTooltip placement="top" target={"disable" + elm?.id}>
                                                    Modifier
                                                    </UncontrolledTooltip>
                                                </Link>
                                            </li>
                                        </ul>
          </Fragment>
        ),
      };
    });
    return {
      columns: [
        {
          label: " Nom complet ",
          field: "fullName",
          width: 150,
        },
        {
          label: "E-mail",
          field: "email",
          width: 150,
        },
        {
          label: "Numero de télèphone",
          field: "phone",
          width: 150,
        },
        {
          field: "actions",
          sort: "disabled",
          width: 150,
        },
      ],
      rows: rows,
    };
  };
  return (
    <React.Fragment>
      <div className="table-responsive">
              <Card>
                <CardBody>
                  <Row className="mb-2">
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <div className="text-sm-right">
                        <Button
                          onClick={toggleModal}
                          type="button"
                          color="primary"
                          className="btn-rounded waves-effect waves-light mb-2 mr-2"
                        >
                          <i className="bx bx-plus-circle font-size-16 align-middle mr-2"></i>Ajouter Agent bancaire &nbsp;&nbsp;{" "}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  {loading ?  (
                    <MDBDataTable
                      responsive
                      striped
                      bordered
                      data={mapDataToDisplay()}
                    />):
                    (
                        <MDBDataTable
                          responsive
                          striped
                          bordered
                          data={mapDataToDisplay()}
                        />)
                    }
                </CardBody>
              </Card>
            
      
      </div>

      <Modal
        size="lg"
        isOpen={open}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={toggleModal}
      >
        <div className="modal-content">
          <ModalHeader toggle={toggleModal}>
            {mode === "add" ? "Ajouter agent bancaire" : "Edit Corporate Admin"}
          </ModalHeader>
          <ModalBody>
            <div className="">
              <Form onSubmit={
                handleSubmit(onSubmit)
              }>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="fnamear">Prénom - Arabe</Label>
                      <Controller
                        control={control}
                        name="fnamear"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="fnamear"
                            name="fnamear"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.fnamear && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="lnamear">Nom - Arabe</Label>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="lnamear"
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="lnamear"
                            name="lnamear"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.lnamear && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="fnamefr">Prénom - Fr</Label>
                      <Controller
                        control={control}
                        name="fnamefr"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="fnamefr"
                            name="fnamefr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.fnamefr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="lnamefr">Nom - Fr</Label>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="lnamefr"
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="lnamefr"
                            name="lnamefr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.lnamefr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="date">Date de naissance</Label>
                      <Controller
                        control={control}
                        name="date"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="example-date-input"
                            name="date"
                            type="date"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />

                      {errors.date &&
                        <span className="my-2 text-danger">
                          {errors.date.message}
                        </span>
                      }
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />

                      {errors.email &&
                        <span className="my-2 text-danger">
                          {errors.email.message}
                        </span>
                      }
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="phone">Numéro de téléphone</Label>
                      <Controller
                        control={control}
                        name="phone"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="phone"
                            name="phone"
                            type="phone"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />

                      {errors.phone &&
                        <span className="my-2 text-danger">
                          {errors.phone.message}
                        </span>
                      }
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  type="submit"
                  color="primary"
                  className="mr-1 waves-effect waves-light"
                >
                  Sauvegarder
                </Button>
                <Button type="button" color="secondary" onClick={toggleModal}>
                  Fermer
                </Button>
              </Form>
            </div>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default withNamespaces()(CorporateAdmin);

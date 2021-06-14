import React, { useState, useEffect } from "react";
import {
  Row,
  Form,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { addNewCredit } from "../../store/credit/action";
import { getCategories } from "../../store/categories/actions";

const NewCredit = () => {
  const [modal, setModal] = useState(false);

  const togglemodal = () => {
    setModal(!modal);
  };

  const {
    errors,
    register,
    handleSubmit,
     control,
  } = useForm();
  const dispatch = useDispatch();

  const { categoriesList } = useSelector(
    ({ Categories }) => Categories
  );
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onSubmit = (data) => {
      
                let dataToSubmit = {
                name : data.name,
                creditType: data.creditType.value,
                enabled: data.enabled,
                };
                dispatch(addNewCredit(dataToSubmit));
                togglemodal(modal => !modal)
                 };

      
 

  return (
    <React.Fragment>
      <button
        onClick={togglemodal}
        className="btn btn-rounded btn-primary mb-2"
      >
        <i className="bx  bx-plus mr-2"></i>Ajouter crédit
      </button>

      <Modal
        isOpen={modal}
        role="dialog"
        size="lg"
        autoFocus={true}
        centered={true}
        id="verificationModal"
        tabIndex="-1"
        toggle={togglemodal}
      >
        <div className="modal-content">
          <ModalHeader toggle={togglemodal}>Crédit</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md="6">
                  <h4>Informations</h4>
                  <div className="mb-2">
                    <label className="">Nom</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <p className="text-danger">champ obligatoire</p>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="">Catégorie</label>
                    <Controller
                      control={control}
                      defaultValue={categoriesList.name}
                      name="creditType"
                      render={({ onChange }) => (
                        <Select
                          isClearable
                          onChange={onChange}
                          options={
                            Array.isArray(categoriesList) &&
                            categoriesList.map((item) => {
                              return {
                                label: item.name,
                                value: item.id,
                              };
                            })
                          }
                        />
                      )}
                    />
                     {errors.creditType && (
                        <p className="text-danger">champ obligatoire</p>
                      )}
                  </div>
                  <div className="custom-control custom-switch mb-2" dir="ltr">
                  <Controller
                      control={control}
                      name="enabled"
                      checked={false}
                      defaultValue={false}
                      render={({ onChange }) => (
                        <input type="checkbox"
                         
                        onChange={(e) => onChange(e.target.checked)}
                        name="enabled"
                         className="custom-control-input" 
                        id="customSwitch1" />
                      )}
                    />
                    <label className="custom-control-label" htmlFor="customSwitch1">Disponibilité</label>
                  </div>
                </Col>
              </Row>
              <button className="btn btn-success" type="submit" >
                Sauvgarder
              </button>
            </Form>
          </ModalBody>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default NewCredit;

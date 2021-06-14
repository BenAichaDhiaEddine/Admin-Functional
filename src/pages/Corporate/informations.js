import React, { useEffect } from 'react' ;

import {
  Col,
  Row,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getConfig, updateConfig } from "../../store/corporate/actions";
import { useForm } from "react-hook-form";

const Informations = () => {
  const dispatch = useDispatch();
  const { loading, config } = useSelector(({ Corporate }) => Corporate);
  useEffect(() => {
    dispatch(getConfig());
  }, []);
  const { register, handleSubmit, watch, errors, reset } = useForm();

  useEffect(() => {
    if (!loading) {
      reset({
        namear: config.name.ar,
        namefr: config.name.fr,
        cityar: config.city.ar,
        cityfr: config.city.fr,
        website: config.website,
        email: config.email,
        phone: config.phone,
        state: config.state.ar,
        codePostal: config.codePostal,
        street: config.street,
        number: config.number,
      });
    }
  }, [loading]);

  const onSubmit = (data ,e) => {
    let newData = { ...data , city:{
                                      ar:data.cityar,
                                      fr:data.cityfr
                                    },
                              name:{
                                ar:data.namear,
                                fr:data.namefr
                                }
    }
    delete newData.cityar;
    delete newData.cityfr;
    delete newData.namear;
    delete newData.namefr;

    let payload = {
      newData
    };
    dispatch(updateConfig(payload));
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md="4">
          <h4>Informations de la banque </h4>
          <div className="mb-2">
            <label className="">Nom du banque </label>
            <input
              name="namear"
              className="form-control"
              type="text"
              defaultValue={config?.name.fr}
              ref={register({ required: true })}
            />
            {errors.namear && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
          <div className="mb-2">
            <label className="">Gouvernorat</label>
            <input
              name="state"
              className="form-control mb-1"
              type="text"
              defaultValue={config?.state.ar}
              ref={register({ required: true })}
            />
            {errors.state && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
          <div className="mb-2">
            <label className="">Ville</label>
            <input
              className="form-control"
              type="text"
              name="cityar"
              ref={register({ required: true })}
            />
            {errors.namefr && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
        </Col>
        <Col md="4 ">
        <h4>Adresse </h4><br/>
          <div className="mb-2">
            <label className="">Rue</label>
            <input
              name="street"
              className="form-control"
              type="text"
              defaultValue={config?.street}
              ref={register({ required: true })}
            />
            {errors.street && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
          <div className="mb-2">
          <label className="">CodePostal</label>
            <input
              name="codePostal"
              className="form-control"
              type="text"
              defaultValue={config?.codePostal}
              ref={register({ required: true })}
            />
            {errors.codePostal && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
          <div className="mb-2">
          <label className="">Fax</label>
            <input
              name="fax"
              className="form-control"
              type="text"
              defaultValue={config?.fax}
              ref={register({ required: true })}
            />
            {errors.street && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
        </Col>
        <Col md="4 ">
          <h4>Contacts</h4><br/>
          <div className="mb-2">
            <label className="">E-mail</label>
            <input
              name="email"
              className="form-control"
              type="text"
              defaultValue={config?.email}
              ref={register({ required: true })}
            />
            {errors.website && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
          <div className="mb-2">
            <label className="">Télèphone</label>
            <input
              name="phone"
              className="form-control"
              type="tel"
              defaultValue={config?.phone}
              ref={register({ required: true })}
            />
            {errors.phone && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div> 
          <div className="mb-2">
            <label className="">Site web </label>
            <input
              name="website"
              className="form-control"
              type="text"
              defaultValue={config?.email}
              ref={register({ required: true })}
            />
            {errors.website && (
              <p className="text-danger">Le champ doit être rempli</p>
            )}
          </div>
        </Col>
      </Row>

      <hr></hr>
      <button className="btn btn-success">
        <i className="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
        Sauvegarder
    </button>
    </form>

  )
}

export default Informations

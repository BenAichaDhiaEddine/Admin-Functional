import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import { useForm } from "react-hook-form";

// redux
import { useSelector, useDispatch } from "react-redux";

import {useParams} from "react-router-dom";

// actions
import { addConditionConfig, updateConditionConfig , deleteCondition} from "../../../store/requestConfig/requestConfigComponents/settings/actions";
import { Link } from "react-router-dom";

const UpdatePrice = ({ toggle, modal, id, oldCondition  }) => {
  const {_id} = useParams();
  const { loading, condition } = useSelector(({ Conditions }) => Conditions);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    try {
      let condition = { 
        ...id , 
        IdRequest:_id
      
     }
      dispatch(updateConditionConfig(data, condition, oldCondition));
      toggle(modal => !modal)
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <Modal isOpen={modal} toggle={toggle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader toggle={toggle}>Modifier une condition</ModalHeader>
        <ModalBody>
        <Row data-repeater-item >
          <Col lg="4" className="form-group">
            <Label htmlFor="nameCondition">Nom </Label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Nom .." 
            name="nameCondition" 
            defaultValue={id?.nameCondition}
            ref={register({ required: true })}
            />
          </Col>
          <Col lg="6" className="form-group">
            <Label htmlFor="subject">Description</Label>
            <input 
            className="form-control" 
            rows="3" type="text" 
            placeholder="Description .." 
            name="description" 
            defaultValue={id?.description}
            ref={register({ required: true })} 
            />
          </Col>
          </Row>
        </ModalBody>
        <ModalFooter style={{ display: "block" }}>
          <Col lg="2" className="form-group align-self-center">
            <Button className="mt-3" color="primary">
              <i className="bx bx-plus-circle font-size-16 align-middle"></i>
              Enregistrer
            </Button>
          </Col>
        </ModalFooter>
      </form>
    </Modal>
  );
}

const Condition = ( {credit } ) => {
  const { loading, conditions } = useSelector(({ Conditions }) => Conditions);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);

  const onSubmit = data => {
    try {
      let dataa = { 
        ...data , 
        IdRequest:credit._id
      
}
      dispatch(addConditionConfig(dataa, conditions))
    } catch (error) {
      console.error(error);
    }
  }
  const toggle = (condition) => {
    setModal(!modal)
    setId(condition)

  }

 
  return (
    <React.Fragment>
      <UpdatePrice toggle={toggle} modal={modal} oldCondition={conditions} id={id}  />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row data-repeater-item>
          <Col lg="4" className="form-group">
            <Label htmlFor="nameCondition">Nom </Label>
            <input className="form-control" type="text" placeholder="Nom .." name="nameCondition" ref={register({ required: true })} />
          </Col>
          <Col lg="6" className="form-group">
            <Label htmlFor="subject">Description</Label>
            <input className="form-control" rows="3" type="text" placeholder="Description .." name="description" ref={register({ required: true })} />
          </Col>
          <Col lg="2" className="form-group align-self-center">
            <Button className="mt-3" color="primary">
              <i className="bx bx-plus-circle font-size-16 align-middle"></i>
              Ajouter condition 
            </Button>
          </Col>
        </Row>
      </form>

      <div className="table-responsive">
        <Table className="table-centered table-nowrap table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" style={{ width: "70px" }}>#</th>
              <th scope="col">Nom </th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              credit?.condition?.map((condition, key) =>
                <tr key={"_condition_" + key} >
                  <td>{key}</td>
                  <td>
                    {condition?.nameCondition}
                  </td>
                  <td>
                    {condition?.description}
                  </td>
                  <td>
                    <ul className="list-inline font-size-20 contact-links mb-0">
                      <li className="list-inline-item px-2" onClick={(key) => 
                          toggle(condition)}
                          >
                        <Link >
                          <i className="bx bx-pencil"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item px-2">
                        <Link to="#"
                        onClick={() => {
                          let data = { 
                            ...condition , 
                            IdRequest:credit._id
                            }
                          dispatch(deleteCondition(data));
                        }
                          }
                        >
                          <i className="bx bx-trash"></i>
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
  )
}

export default Condition
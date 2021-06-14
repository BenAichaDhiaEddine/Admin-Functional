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
import { addOptionConfig, updateOptionConfig , deleteOption} from "../../../store/requestConfig/requestConfigComponents/options/actions";
import { Link } from "react-router-dom";

const UpdatePrice = ({ toggle, modal, id, oldOption  }) => {
  const {_id} = useParams();
  const { loading, options  } = useSelector(({ Options }) => Options);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    try {
      let option = { 
        ...id , 
        IdRequest:_id
      
     }
      dispatch(updateOptionConfig(data, option, oldOption));
      toggle(modal => !modal)
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <Modal isOpen={modal} toggle={toggle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader toggle={toggle}>Modifier une option</ModalHeader>
        <ModalBody>
        <Row data-repeater-item >
          <Col lg="4" className="form-group">
            <Label htmlFor="nameOption">Nom </Label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Nom .." 
            name="nameOption" 
            defaultValue={id?.nameOption}
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

const Option = ( {credit } ) => {
  const { loading, options } = useSelector(({ Options }) => Options);
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
      dispatch(addOptionConfig(dataa, options))
    } catch (error) {
      console.error(error);
    }
  }
  const toggle = (option) => {
    setModal(!modal)
    setId(option)

  }

 
  return (
    <React.Fragment>
      <UpdatePrice toggle={toggle} modal={modal} oldOption={options} id={id}  />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row data-repeater-item>
          <Col lg="4" className="form-group">
            <Label htmlFor="nameOption">Nom </Label>
            <input className="form-control" type="text" placeholder="Nom .." name="nameOption" ref={register({ required: true })} />
          </Col>
          <Col lg="6" className="form-group">
            <Label htmlFor="subject">Description</Label>
            <input className="form-control" rows="3" type="text" placeholder="Description .." name="description" ref={register({ required: true })} />
          </Col>
          <Col lg="2" className="form-group align-self-center">
            <Button className="mt-3" color="primary">
              <i className="bx bx-plus-circle font-size-16 align-middle"></i>
              Ajouter option 
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
              credit?.options?.map((option, key) =>
                <tr key={"_option_" + key} >
                  <td>{key}</td>
                  <td>
                    {option?.nameOption}
                  </td>
                  <td>
                    {option?.description}
                  </td>
                  <td>
                    <ul className="list-inline font-size-20 contact-links mb-0">
                      <li className="list-inline-item px-2" onClick={(key) => 
                          toggle(option)}
                          >
                        <Link >
                          <i className="bx bx-pencil"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item px-2">
                        <Link to="#"
                        onClick={() => {
                          let data = { 
                            ...option , 
                            IdRequest:credit._id
                            }
                          dispatch(deleteOption(data));
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

export default Option
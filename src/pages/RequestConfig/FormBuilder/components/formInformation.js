import React, { Fragment } from "react";

import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addFormInformation,
  EditFormInformation
} from "../../../../store/forms/actions";
import { useEffect } from "react";

const Information = ({ nextTab, id }) => {
  const dispatch = useDispatch();
  const { errors, handleSubmit, control, reset } = useForm();
  const { editMode, form, editId } = useSelector(
    (state) => state.forms || {}
  );

  const onSubmit = (data) => {
    let forma = {
      name: data.name,
      description: data.description
    }
    // console.log(forma)

    if (editId === null) {
      dispatch(addFormInformation(forma));
    } else {
      dispatch(EditFormInformation(forma, editId));
    }
  };

  useEffect(() => {
    if (editMode === true) {
      reset({
        name: form.name,
        description: form.description,
      });

    }
  }, []);

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs="12">
            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.name && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">description</Label>
                  <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.description && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button
              type="submit"
              color="primary"
              className="mr-1 waves-effect waves-light"
            >
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default Information;

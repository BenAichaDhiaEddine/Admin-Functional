import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Tab, Button } from 'react-bootstrap';
import { ReactFormBuilder } from "../../../../components/FormBuilder";
import Nava from "../../../FormBuilder/NavBar";
import { editFormData } from "../../../../store/forms/actions";
import '../../../../assets/scss/formBuilder/application.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = (props) => {
  const params = useParams();
  const { id } = params;
  const { form, editId } = useSelector(
    ({ forms }) => forms
  );
  const [steps, setSteps] = useState(form.sections);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

  }, [form]);

  const addStep = () => {
    let data = {
      task_data: [],
      stepNbr: steps.length,
      sectionName: 'Step' + (steps.length + 1)
    }
    setSteps(steps => [...steps, data])
    form.sections = ([...form.sections, data])
  }
  const onPost = (data) => {
    let dat = {
      id: id,
      submitData: data
    };
    if (id == "create" && !editId) {
      dat.id = form._id;
      history.push(`/formbuilder/${form._id}`);
      dispatch(editFormData(dat));

    } else {
      dispatch(editFormData(dat));
    }
  };
  


  function ControlledTabs() {
    const [key, setKey] = useState("0");
    return (

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {steps.map((step, ka) =>
          <Tab eventKey={ka} title={step.sectionName}>
            <DndProvider backend={HTML5Backend}>
            <ReactFormBuilder key={key} data={steps[key].task_data} /></DndProvider>
          </Tab>
        )}
      </Tabs>
    );
  }
  return (
    <div>

      <Button
        onClick={() => {onPost(form)}}
        type="button"
        color="primary"
        className="btn-rounded waves-effect waves-light mb-2 mr-2"
      >
        <i className="mdi mdi-clipboard-check"></i> Save&nbsp;&nbsp;{" "}
      </Button>
      <Button
        onClick={() => {addStep()}}
        type="button"
        color="primary"
        className="btn-rounded waves-effect waves-light mb-2 mr-2"
      >
        <i className="mdi mdi-clipboard-check"></i> Add Step&nbsp;&nbsp;{" "}
      </Button>
      {ControlledTabs()}
      <Nava />
    </div>
  );

};
export default App;

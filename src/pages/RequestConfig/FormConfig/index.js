import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Label,
  CardHeader,
  Media, Input, FormText,
  Button,
  CardTitle,
  Container,
  Table,
  UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, ButtonGroup
} from "reactstrap";
import Select from "react-select";
import {Link} from "react-router-dom";

import RequestFormStep from "./FormStepConfig";
import RequestFormStandardStep from "./FormStandardStep";
import RequestPriceFormConfig from "./FormStandardStep/RequestPrice";


class FormConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardStepConfigs:{
        user:true,
        company:true,
        organization:false,
        address:"company",
      },


      col1: false,
      col2: false,
      col3: false,
      col5: false,

      selectedMulti: null,
      selectedGroup: null,
      selectedGroup1: null,
      popovertop: false,
    };

    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col5 = this.t_col5.bind(this);


    this.toggletop = this.toggletop.bind(this);

  }
  t_col1() {
    this.setState({ col1: !this.state.col1 });
  }
  t_col2() {
    this.setState({ col2: !this.state.col2 });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3 });
  }
  t_col5() {
    this.setState({ col5: !this.state.col5 });
  }

  handleSelectGroup = selectedGroup => {
    this.setState({ selectedGroup });
  };
  handleSelectGroup1 = selectedGroup1 => {
    this.setState({ selectedGroup1 });
  };
  handleMulti = selectedMulti => {
    this.setState({ selectedMulti });
  };
  toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
  render() {
    const { selectedGroup } = this.state;
    const { selectedGroup1 } = this.state;
    const { selectedMulti } = this.state;
    return (
      <React.Fragment>

        <Card className="email-leftbar mb-4 p-0 mr-0">
          <CardHeader>
            <h5 className="">Steps & Fields</h5>
          </CardHeader>

            <div className="mail-list">
              <input className="form-control border-0 " type="text" placeholder="إبحث..." />
              <Link className="border-top" to="#" ><i className="bx bx-user-circle font-size-16 align-middle mr-2"></i> User Infos </Link>
              <Link className="border-top" to="#" ><i className="bx bx-store font-size-16 align-middle mr-2"></i> Company Infos </Link>
              <Link className="border-top" to="#" ><i className="bx bx-building font-size-16 align-middle mr-2"></i> Org Infos </Link>
              <Link className="border-top" to="#" ><i className="bx bx-map font-size-16 align-middle mr-2"></i> Map </Link>
              <Link className="border-top" to="#" ><i className="bx bxs-star font-size-16 align-middle mr-2"></i> Items </Link>
              <Link className="border-top" to="#" ><i className="bx bx-heading font-size-16 align-middle mr-2"></i> Titre </Link>
              <Link className="border-top" to="#" ><i className="bx bx-code-alt font-size-16 align-middle mr-2"></i> Html </Link>
              <Link className="border-top" to="#" ><i className="bx bx-font font-size-16 align-middle mr-2"></i> Texte </Link>
              <Link className="border-top" to="#" ><i className="bx bx-paragraph font-size-16 align-middle mr-2"></i> Paragraphe </Link>
              <Link className="border-top" to="#" ><i className="bx bx-radio-circle-marked font-size-16 align-middle mr-2"></i> Boutons radio </Link>
              <Link className="border-top" to="#" ><i className="bx bx-checkbox-checked font-size-16 align-middle mr-2"></i> Case à cocher </Link>
              <Link className="border-top" to="#" ><i className="bx bx-image font-size-16 align-middle mr-2"></i> Image à cocher </Link>
              <Link className="border-top" to="#" ><i className="bx bx-chevron-down-square font-size-16 align-middle mr-2"></i> Liste déroulante </Link>
              <Link className="border-top" to="#" ><i className="bx bx-envelope font-size-16 align-middle mr-2"></i> Email </Link>
              <Link className="border-top" to="#" ><i className="bx bx-hash font-size-16 align-middle mr-2"></i> Nombre </Link>
              <Link className="border-top" to="#" ><i className="bx bx-calendar font-size-16 align-middle mr-2"></i> Date </Link>
              <Link className="border-top" to="#" ><i className="bx bx-time font-size-16 align-middle mr-2"></i> Heure </Link>
              <Link className="border-top" to="#" ><i className="bx bx-phone font-size-16 align-middle mr-2"></i> Téléphone </Link>
              <Link className="border-top" to="#" ><i className="bx bx-link font-size-16 align-middle mr-2"></i> Site Web/URL </Link>
              <Link className="border-top" to="#" ><i className="bx bx-file font-size-16 align-middle mr-2"></i> Fichier </Link>
              <Link className="border-top" to="#" ><i className="bx bx-lock font-size-16 align-middle mr-2"></i> Mot de passe </Link>
            </div>

        </Card>
        <div className="email-rightbar mb-3">
          <Row>
            <Col>
              <div className="float-right mr-2">
                <Button  className="mr-2" color="light">
                  <i className="bx bx-undo font-size-16 align-middle mr-2"></i>إلغاء
                </Button>
                <Button  className="mr-2" color="secondary">
                  <i className="bx bx-cloud-download font-size-16 align-middle mr-2"></i>تحميل نموذج
                </Button>
                <Button  className="mr-2" color="primary">
                  <i className="bx bx-show font-size-16 align-middle mr-2"></i>معاينة
                </Button>
                <Button  className="mr-2" color="success">
                  <i className="bx bx-save font-size-16 align-middle mr-2"></i>حفظ
                </Button>

              </div>
            </Col>
          </Row>



          <div className="my-3">

            <RequestFormStep/>




          </div>



        </div>





      </React.Fragment>
    );
  }
}

export default FormConfig;

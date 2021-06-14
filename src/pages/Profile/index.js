import React, { useEffect, useState } from "react";
import moment from 'moment';
import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
  CardDeck,
  Container,
  Badge,
  NavItem,
  NavLink,
  Nav,
  TabPane,
  TabContent,
} from "reactstrap";

import classnames from "classnames";
// import Replace from "./replace";
//Import Images
import avatar1 from "../../assets/images/users/admin.png";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getConfig } from "../../store/corporate/actions";
import { getProfile, EditProfile } from "../../store/profile/actions";

const optionGroup = [
  {
    options: [
      { label: "المصلحة الإقتصادية", value: "eco" },
      { label: "المصلحة الإدارية", value: "admi" },
      { label: "المصلحة الفنية", value: "techni" },
    ],
  },
];
const optionGroup1 = [
  {
    options: [
      { label: "رئيس", value: "prt" },
      { label: "كاتب عام", value: "sgl" },
      { label: "مشرف", value: "afl" },
      { label: "موضف", value: "emp" },
      { label: "رئيس مصلحة", value: "pgp" },
      { label: "شباك موّحد", value: "huq" },
    ],
  },
];

const FormElements = () => {
  const [selectedMulti, setSelectedMulti] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [activeTab, setActiveTab] = useState("1");
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [menu, setMenu] = useState([
    { name: "الخريطة", value: true, id: 1 },
    { name: "البلديّة", value: true, id: 2 },
    { name: "فريق العمل", value: true, id: 3 },
    { name: "معالجة", value: true, id: 4 },
    { name: "متابعة", value: true, id: 5 },
    { name: "مراحل", value: true, id: 6 },
    { name: "مؤسسات", value: true, id: 7 },
    { name: "مواطن", value: true, id: 8 },
    { name: "الرّخص", value: true, id: 9 },
    { name: "خلاص", value: true, id: 10 },
  ]);
  const [rbac, setRbac] = useState([
    {
      name: "مؤسسة",
      permissions: [
        { id: 1, name: "مشاهدة", value: true },
        { id: 2, name: "إضافة", value: true },
        { id: 3, name: "حذف", value: true },
        { id: 4, name: "تحيين", value: true },
      ],
    },
    {
      name: "مواطن",
      permissions: [
        { id: 5, name: "مشاهدة", value: true },
        { id: 6, name: "إضافة", value: true },
        { id: 7, name: "حذف", value: true },
        { id: 8, name: "تحيين", value: true },
      ],
    },
    {
      name: "رخصة",
      permissions: [
        { id: 9, name: "مشاهدة", value: true },
        { id: 10, name: "إضافة", value: true },
        { id: 11, name: "حذف", value: true },
        { id: 12, name: "تحيين", value: true },
      ],
    },
    {
      name: "طلب",
      permissions: [
        { id: 13, name: "مشاهدة", value: true },
        { id: 14, name: "إضافة", value: true },
        { id: 15, name: "حذف", value: true },
        { id: 16, name: "تحيين", value: true },
      ],
    },
  ]);


  const dispatch = useDispatch();
  const { loading, profileDetailes, loadingUpdate } = useSelector(({ Profile }) => Profile);
  const { register, handleSubmit, control, reset, setValue, errors } = useForm();
  const isSubmitting = () => {

    if (isButtonDisabled) {
      setTimeout(() => { setisButtonDisabled(false) }, 500);
      return <i className="bx bx-loader bx-spin font-size-16 align-middle mr-2" ></i>;
    }
    else {
      return <i className="bx  font-size-16 align-middle mr-2" ></i>;
    }
  }

  const onSubmit = (data) => {
    let payload = {
      dataToSubmit: data,
    };
    setisButtonDisabled(true)
    dispatch(EditProfile(payload));
  };

  const onChange = (event) => {
    profileDetailes.gender = event.target.value;
  };
  const onChangeDate = (event) => {
    profileDetailes.birthDay = moment(event.target.value).format('YYYY-MM-DD');
  };

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };
  const handleMulti = (selectedMulti) => {
    setSelectedMulti(selectedMulti);
  };
  const toggle = (tab) => {
    setActiveTab(tab);
  };


  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (profileDetailes) {
      setValue("firstName.ar", profileDetailes?.firstName?.ar);
      setValue("firstName.fr", profileDetailes?.firstName?.fr);
      setValue("lastName.ar", profileDetailes?.lastName?.ar);
      setValue("lastName.fr", profileDetailes?.lastName?.fr);
      setValue("email", profileDetailes?.email);
      setValue("birthDay", moment(profileDetailes?.birthDay).format('YYYY-MM-DD'));
      setValue("phone", profileDetailes?.phone);
      setValue("gender", profileDetailes?.gender);
    };
  }, [profileDetailes, setValue, loadingUpdate]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Paramétres" breadcrumbItem="Profil" />
          <CardDeck>
            <Card className="col-md-3">
              <CardBody>
                <div className="text-center">
                  <img
                    src={avatar1}
                    alt=""
                    className="mb-4 avatar-lg rounded-circle img-thumbnail"
                  />
                  <h4>{profileDetailes.firstName.fr + " " + profileDetailes.lastName.fr}</h4>
                  <p className="text-muted">Nom de la banque</p>
                  <Badge
                    color="secondary"
                    className="badge-soft-secondary font-size-14"
                    pill
                  >
                    Admin fonctionnel
                  </Badge>
                  <hr></hr>
                  <div className="text-lg-center mt-4 mt-lg-0">
                    {/* <p className="text-muted text-truncate mb-2">أدوار</p> */}
                    <Row>
                      <Col xs="6">
                        <div>
                          <h5 className="mb-2">40</h5>
                          <p>Nombre de demande</p>
                        </div>
                      </Col>
                      <Col xs="6">
                        <div>
                          <h5 className="mb-2">3</h5>
                          <p>Nb agents</p>
                        </div>
                      </Col>
                      {/* <Col xs="4">
                        <div>
                          <h5 className="mb-2">1</h5>
                          <p>مصلحة</p>
                        </div>
                      </Col> */}
                    </Row>
                  </div>
                  {/* <Replace /> */}
                  <hr></hr>
                  <button onClick={handleSubmit(onSubmit)} className="btn btn-success btn-block mt-4" disabled={isButtonDisabled}>
                    {isSubmitting()}Sauvegarder
                  </button>
                </div>
              </CardBody>
            </Card>
            <Card className="col-md-9">
              <Nav tabs className="nav-tabs-custom nav-justified">
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Informations personnelles
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    فرق العمل
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "4",
                    })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >Mot de passe
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "3",
                    })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Permissions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "5",
                    })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    Active Sessions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "6",
                    })}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    Authentication log
                  </NavLink>
                </NavItem> */}
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className="p-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col md="6">
                        <h4>Données Personnelles</h4>

                        {/* <div className="mb-2">
                          <label className="">الإسم - عربية</label>
                          <input
                            className="form-control"
                            type="text"
                            name="firstName.ar"
                            ref={register}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="">اللقب - عربية</label>
                          <input
                            className="form-control"
                            type="text"
                            name="lastName.ar"
                            ref={register}
                          />
                        </div> */}
                        <div className="mb-2">
                          <label className="">Prénom </label>
                          <input
                            className="form-control"
                            type="text"
                            name="firstName.fr"
                            ref={register}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="">Nom </label>
                          <input
                            className="form-control"
                            type="text"
                            name="lastName.fr"
                            ref={register}
                          />
                        </div>
                        <div className="mb-2">
                          <label>Genre</label>
                          <select
                            className="form-control"
                            name="gender"
                            defaulValue={profileDetailes.gender}
                            onChange={onChange}
                            ref={register}
                          >
                            <option></option>
                            <option label="Homme" value="male"></option>
                            <option label="Femme" value="female"></option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label className="">Date de naissance</label>
                          <input
                            className="form-control"
                            type="date"
                            onChange={onChangeDate}
                            defaultValue={profileDetailes.birthDay}
                            name="birthDay"
                            ref={register}
                          />
                        </div>
                      </Col>
                      <Col md="6 ">
                        <h4>Contacts</h4>
                        <div className="mb-2">
                          <label className="">E-mail</label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            ref={register}
                          />

                        </div>
                        <div className="mb-2">
                          <label className="">Télèphone</label>
                          <input
                            className="form-control"
                            type="tel"
                            name="phone"
                            ref={register}
                          />
                        </div>
                        {/* <button type="submit" className="btn btn-success btn-block mt-4" disabled={isButtonDisabled}>
                          {isSubmitting()}حفظ
                        </button> */}
                      </Col>
                    </Row>
                  </form>
                  <hr />
                </TabPane>
              </TabContent>
              {/* <TabContent activeTab={activeTab}>
                <TabPane tabId="2" className="p-3">
                  <h4>مصالح</h4>
                  <Row>
                    <Col md="6 mb-2">
                      <Select
                        value={selectedMulti}
                        isMulti={true}
                        onChange={handleMulti}
                        options={optionGroup}
                        classNamePrefix="select2-selection"
                        disabled={true}
                        placeholder="إختار"
                      />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent> */}
              <TabContent activeTab={activeTab}>
                <TabPane tabId="4" className="p-3">
                  <Row>
                    <Col md={6}>
                      <h4>Two-Factor Authentication</h4>
                      <p className="text-muted">
                        Increase your account's security by enabling Two-Factor
                        Authentication (2FA)
                      </p>
                      <Button color="danger">Enable</Button>
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <h4>Mot de passe</h4>
                      <p className="text-muted">Changer mot de passe</p>
                      <hr />
                      <div className="mb-2">
                        <label className="">Mot de passe actuel</label>
                        <input className="form-control" type="password" />
                      </div>
                      <div className="mb-2">
                        <label className="">Nouveau mot de passe</label>
                        <input className="form-control" type="password" />
                      </div>
                      <div className="mb-2">
                        <label className="">Confirmer mot de passe </label>
                        <input className="form-control" type="password" />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="3" className="p-3">
                  <h4>Role</h4>
                  <Row>
                    <Col md="6 mb-2">
                      <Select
                        value={selectedGroup}
                        onChange={handleSelectGroup}
                        options={optionGroup1}
                        classNamePrefix="select2-selection"
                      />
                    </Col>
                  </Row>
                  <hr></hr>
                  <h4>القائمة الرئيسية</h4>
                  <Row>
                    {menu.map((item) => (
                      <Col md="4">
                        <div
                          className="custom-control custom-switch mb-2"
                          dir="ltr"
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={"menu_" + item.id}
                            defaultChecked={item.value}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={"menu_" + item.id}
                          >
                            {item.name}
                          </label>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <hr></hr>
                  <h4>إدارة</h4>
                  <Row>
                    {rbac.map(({ name, permissions }) => (
                      <Col md="4">
                        <p>{name}</p>
                        {permissions.map((permission) => (
                          <div>
                            <div
                              className="custom-control custom-switch mb-2"
                              dir="ltr"
                            >
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={"perm_" + permission.id}
                                defaultChecked={permission.value}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={"perm_" + permission.id}
                              >
                                {permission.name}
                              </label>
                            </div>
                          </div>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              </TabContent>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="5" className="p-3">
                  <h4>Active Sessions</h4>
                  <Row>
                    <Col md={6}>
                      <p>
                        This is a list of devices that have logged into your
                        account.Revoke any sessions that you do not recognize.
                      </p>
                      <hr />
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5>
                            <i className=" bx bx-desktop mr-2"></i>134.102.8.75
                          </h5>
                          <p className="mb-1">Last accessed on 21 Jan 09:43</p>
                          <p className="mb-1">
                            <b>Chrome</b> on <b>Mac</b>
                          </p>
                          <p className="mb-1">Signed in on 18 Jan 13:22</p>
                        </div>
                        <Button color="danger">Revoke</Button>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5>
                            <i className=" bx bx-mobile mr-2"></i>134.102.8.75
                          </h5>
                          <p className="mb-1">Last accessed on 21 Jan 09:43</p>
                          <p className="mb-1">
                            <b>Chrome</b> on <b>Android</b>
                          </p>
                          <p className="mb-1">Signed in on 18 Jan 13:22</p>
                        </div>
                        <Button color="danger">Revoke</Button>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="6" className="p-3">
                  <Row>
                    <Col md={12}>
                      <h4>Authentication log</h4>
                      <p>
                        This is a security log of important events involving
                        your account.
                      </p>
                      <hr />
                    </Col>
                    <Col md={6}>
                      <div className="">
                        <p>
                          <i className="font-size-15 bx bx-key mr-2"></i>Login -
                          21 Jan 09:43
                        </p>
                        <p>
                          <i className="font-size-15 bx bx-key mr-2"></i>Logout
                          - 21 Jan 12:03
                        </p>
                        <p>
                          <i className="font-size-15 bx bx-key mr-2"></i>Login -
                          21 Jan 14:43
                        </p>
                        <p>
                          <i className="font-size-15 bx bx-key mr-2"></i>
                          Auto-logout - 21 Jan 15:43
                        </p>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormElements;

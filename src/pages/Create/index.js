import React, { Component } from 'react';
import  {
    Container,
    Row,Fade,
    Col,
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Label,
    Button,
    Input,
    Form,
    FormGroup,
    Progress, InputGroup, UncontrolledCollapse
} from "reactstrap";
import classnames from 'classnames';
import { Link } from "react-router-dom";

//Dropzone
import Dropzone from "react-dropzone";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import images
import verificationImg from "../../assets/images/verification-img.png";
import Select from "react-select";
import FormItemGeneralConfig from "../RequestConfig/FormConfig/FormStepConfig/FormItemConfigs/FormItemGeneralConfig";
import CardList from "./card-list";

const optionGroup = [
    {
        label: "البنك",
        options: [
            { label: "أحمد بن زينب", value: "Mustard" },
            { label: "أشرف بن وناس", value: "Ketchup" },
            { label: "إيناس الحافي", value: "Relish" },
            { label: "محمد صالح", value: "Re2lish" },
        ]
    },
];


class CryptoWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {

            categories:[
                {id:1, name:"أشخاص", description:"", icon:"bx bx-group"},
                {id:2, name:"إقتصادية", description:"", icon:"bx bx-money"},
                {id:3, name:"إداريّة", description:"", icon:"bx bx-file",},
                {id:4, name:"جمعيات", description:"", icon:"bx bx-building",},
            ],
            subcategories:[
                {id:21, name:"إشهار", description:"", icon:"bx bx-directions"},
                {id:22, name:"إستغلال رصيف", description:"", icon:"bx bx-chair"},
            ],
            items:[
                {id:21, name:"لافتة", description:"", icon:"bx bx-directions"},
                {id:22, name:"واقية", description:"", icon:"bx bx-chair"},
            ],

            modal: false,
            activeTabProgress: 1,
            totalSteps:8,
            progressValue : 0,
            selectedFiles: [],
            selectedGroup: null,
            selectedCategory: null,
            selectedSubCategory: null,

        };
        this.handleAcceptedFiles.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleTabProgress(tab) {
        if (this.state.activeTabProgress !== tab) {
            if(tab >= 1 && tab <= this.state.totalSteps ){
                this.setState({
                    activeTabProgress: tab
                });

                 this.setState({progressValue : tab / this.state.totalSteps *100});

            }
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    //Select
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };


    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );


        this.setState({ selectedFiles: files });
    };

      /**
       * Formats the size
       */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    render() {
        const { selectedGroup } = this.state;
        const { selectedCategory } = this.state;

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="إنشاء" breadcrumbItem="الشباك الالكتروني" />

                        <Row className="justify-content-center ">
                            <Col lg="6" sm="12">
                                <Card>
                                    <CardBody>
                                        <div id="kyc-verify-wizard" className="twitter-bs-wizard">
                                            <div id="bar" className="">
                                                <Progress color="soft-primary"  value={this.state.progressValue} />
                                                <div className="progress-bar bg-light "></div>
                                            </div>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                <li className={this.state.activeTabProgress === 1 ? "previous disabled " : "previous"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress - 1);} }><i className="bx bx-chevron-right"></i></Link></li>
                                                <li className={this.state.activeTabProgress === this.state.totalSteps ? "next disabled float-right" : "next float-right"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress + 1);} }>التالي<i className="bx bx-chevron-left"></i></Link></li>
                                            </ul>
                                            <TabContent activeTab={this.state.activeTabProgress} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1} id="personal-info">
                                                    <div className="text-center">

                                                    <Row className="justify-content-center">
                                                        <Col lg="10">
                                                            <h4 className=" font-weight-semibold">الشبّاك الإلكتروني</h4>
                                                            <p className="text-muted mt-3">إبدأ مطلب رخصة جديد لشخص أو مؤسسة عبر إختيار الفئة</p>

                                                            <Row>
                                                                {
                                                                    this.state.categories.map((category, i) =>
                                                                        <Col md="12"  key={"_category_" + i} >
                                                                            <div className="mb-3">

                                                                                <label className="card-radio-label mb-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        name="selectedCategory"
                                                                                        defaultChecked={category.id === this.state.selectedCategory}
                                                                                        onChange={this.handleInputChange}
                                                                                        value={category.id}
                                                                                        className="card-radio-input"  />

                                                                                    <div className="card-radio">
                                                                                        <div>
                                                                                            <i className={"mr-2 " + category.icon + " font-size-24 text-primary align-middle"}></i>
                                                                                            <span>{category.name}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </label>

                                                                            </div>

                                                                        </Col>
                                                                    )
                                                                }



                                                            </Row>

                                                        </Col>
                                                    </Row>

                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={2} id="sub-cat">
                                                    <div className="text-center">

                                                    <Row className="justify-content-center">
                                                        <Col lg="10">
                                                            <h4 className=" font-weight-semibold">نوع الرّخصة</h4>
                                                            <p className="text-muted mt-3">إختر الرّخصة</p>

                                                            <Row>
                                                                {
                                                                    this.state.subcategories.map((category, i) =>
                                                                        <Col md="12"  key={"_category_" + i} >
                                                                            <div className="mb-3">
                                                                                <label className="card-radio-label mb-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        name="selectedSubCategory"
                                                                                        defaultChecked={category.id === this.state.selectedSubCategory}
                                                                                        onChange={this.handleInputChange}
                                                                                        value={category.id}
                                                                                        className="card-radio-input"  />
                                                                                    <div className="card-radio">
                                                                                        <div>
                                                                                            <i className={"mr-2 " + category.icon + " font-size-24 text-primary align-middle"}></i>
                                                                                            <span>{category.name}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </label>

                                                                            </div>
                                                                        </Col>
                                                                    )
                                                                }



                                                            </Row>

                                                        </Col>
                                                    </Row>

                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={3} id="citizen">
                                                    <div>

                                                        <Row className="justify-content-center text-center">
                                                            <Col lg="10">
                                                                <h4 className=" font-weight-semibold">المواطن</h4>
                                                                <p className="text-muted "><i className="bx bx-search mr-1"></i>البحث في قاعدة البيانات</p>
                                                            </Col>
                                                        </Row>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="12">
                                                                    <FormGroup className="select2-container">

                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={this.handleSelectGroup}
                                                                            options={optionGroup}
                                                                            placeholder="اسم و لقب المواطن"
                                                                            classNamePrefix="select2-selection"
                                                                        />

                                                                    </FormGroup>
                                                                    <hr />
                                                                    <div className="text-center">
                                                                        <Button
                                                                            id={"NewCitizenCollapse"} Toggle onClick={this.collapse}
                                                                            color="secondary" outline><i className="bx bx-plus-circle mr-2"></i>
                                                                            أو إضافة مواطن
                                                                        </Button>
                                                                    </div>

                                                                    <UncontrolledCollapse className="" toggler={"NewCitizenCollapse"}>
                                                                        <CardBody>
                                                                            <p className="text-muted text-center">في صورة عدم وجود المستخدم في البحث</p>
                                                                        </CardBody>
                                                                    </UncontrolledCollapse>

                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4} id="company">
                                                    <div>

                                                        <Row className="justify-content-center text-center">
                                                            <Col lg="10">
                                                                <h4 className=" font-weight-semibold">الشركة</h4>
                                                                <p className="text-muted "><i className="bx bx-search mr-1"></i>البحث في قاعدة البيانات</p>
                                                            </Col>
                                                        </Row>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="12">
                                                                    <FormGroup className="select2-container">

                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={this.handleSelectGroup}
                                                                            options={optionGroup}
                                                                            placeholder="اسم الشركة"
                                                                            classNamePrefix="select2-selection"
                                                                        />

                                                                    </FormGroup>
                                                                    <hr />
                                                                    <div className="text-center">
                                                                        <Button
                                                                            id={"NewCitizenCollapse"} Toggle onClick={this.collapse}
                                                                            color="secondary" outline><i className="bx bx-plus-circle mr-2"></i>
                                                                            أو إضافة شركة
                                                                        </Button>
                                                                    </div>

                                                                    <UncontrolledCollapse className="" toggler={"NewCitizenCollapse"}>
                                                                        <CardBody>
                                                                            <p className="text-muted text-center">في صورة عدم إمتلاك المستخدم لشركة</p>
                                                                        </CardBody>
                                                                    </UncontrolledCollapse>

                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={5} id="company">
                                                    <div>

                                                        <Row className="justify-content-center text-center">
                                                            <Col lg="10">
                                                                <h4 className=" font-weight-semibold">العنوان</h4>
                                                                <p className="text-muted "><i className="bx bx-search mr-1"></i>البحث في قاعدة البيانات</p>
                                                            </Col>
                                                        </Row>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="12">
                                                                    <FormGroup className="select2-container">

                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={this.handleSelectGroup}
                                                                            options={optionGroup}
                                                                            placeholder="عنوان الشركة"
                                                                            classNamePrefix="select2-selection"
                                                                        />

                                                                    </FormGroup>
                                                                    <hr />
                                                                    <div className="text-center">
                                                                        <Button
                                                                            id={"NewCitizenCollapse"} Toggle onClick={this.collapse}
                                                                            color="secondary" outline><i className="bx bx-plus-circle mr-2"></i>
                                                                            أو إضافة عنوان للشركة
                                                                        </Button>
                                                                    </div>

                                                                    <UncontrolledCollapse className="" toggler={"NewCitizenCollapse"}>
                                                                        <CardBody>
                                                                            <p className="text-muted text-center">في صورة عدم إمتلاك المستخدم لشركة</p>
                                                                        </CardBody>
                                                                    </UncontrolledCollapse>

                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={20} id="doc-verification">
                                                    <h5 className="font-size-14 mb-3">Upload document file for a verification</h5>
                                                    <div className="kyc-doc-verification mb-3">
                                                        <Dropzone
                                                            onDrop={acceptedFiles =>
                                                                this.handleAcceptedFiles(acceptedFiles)
                                                            }
                                                        >
                                                            {({ getRootProps, getInputProps }) => (
                                                                <div className="dropzone">
                                                                    <div
                                                                        className="dz-message needsclick"
                                                                        {...getRootProps()}
                                                                    >
                                                                        <input {...getInputProps()} />
                                                                        <div className="mb-3">
                                                                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                                                        </div>
                                                                        <h3>Drop files here or click to upload.</h3>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Dropzone>
                                                        <div
                                                            className="dropzone-previews mt-3"
                                                            id="file-previews"
                                                        >
                                                            {this.state.selectedFiles.map((f, i) => {
                                                                return (
                                                                    <Card
                                                                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                        key={i + "-file"}
                                                                    >
                                                                        <div className="p-2">
                                                                            <Row className="align-items-center">
                                                                                <Col className="col-auto">
                                                                                    <img
                                                                                        data-dz-thumbnail=""
                                                                                        height="80"
                                                                                        className="avatar-sm rounded bg-light"
                                                                                        alt={f.name}
                                                                                        src={f.preview}
                                                                                    />
                                                                                </Col>
                                                                                <Col>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="text-muted font-weight-bold"
                                                                                    >
                                                                                        {f.name}
                                                                                    </Link>
                                                                                    <p className="mb-0">
                                                                                        <strong>{f.formattedSize}</strong>
                                                                                    </p>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                    </Card>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </TabPane>

                                            </TabContent>
                                        </div>


                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} sm="12">
                                <CardList/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default CryptoWallet;

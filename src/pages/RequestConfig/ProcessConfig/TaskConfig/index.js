import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Label,
  Input,
  Button,
  CardTitle,
  Container,
  Table,
  UncontrolledTooltip, PopoverHeader, PopoverBody, Popover, CardHeader, Badge
} from "reactstrap";
import Select from "react-select";
import {Link} from "react-router-dom";

//Import Images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import ChecklistItemConfig from "./TaskItemConfigs/ChecklistItemConfig";
import AffectItemConfig from "./TaskItemConfigs/AffectItemConfig";
import CommitteeItemConfig from "./TaskItemConfigs/CommitteeItemConfig";
import TaskItemConfig from "./TaskItemConfigs";

const optionGroup = [
  {
    label: "أنواع المهمّات",
    options: [
      { label: "إختار مكلّف بالمهمة التّالية", value: "1" },
      { label: "رأي", value: "2" },
      { label: "برمجة لجنة", value: "3" },
      { label: "رفع ملف", value: "4" },
      { label: "قائمة تدقيق", value: "5" },
      { label: "إمضاء رخصة", value: "6" },
      { label: "موافقة / رفض", value: "7" },
    ]
  }
];

const userList = [
  {
    options: [
      { label: "سامية بن صالح", value: "1" },
      { label: "أمير العكروت", value: "2" },
      { label: "سمير الباروني", value: "3" },
      { label: "فادية صالح", value: "4" },
      { label: "كريم نوار", value: "5" },
      { label: "سالم الأسود", value: "7" }
    ]
  },

];

class TaskConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: false,
      col2: false,
      col3: false,
      taskItemConfigs:[
        {
          name:"إختار مكلّف بالمهمة التّالية",
          description:"إختر من يقوم بالمرحلة القادمة",
          type:"assign",
          alert:"warning",
        },
        {
          name:"برمجة لجنة",
          description:"إختر تاريخ انعقاد اللجنة",
          type:"committee",
          alert:"",
        },
        {
          name:"رفع ملف",
          description:"الرجاء رفع تقرير عدد 5",
          type:"upload",
          alert:"danger",
        },
        {
          name:"قائمة تدقيق",
          description:"الرجاء التثبت من صحة الوثائق المرفقة",
          type:"checklist",
          alert:"success",
        },
        {
          name:"إمضاء الرخصى",
          description:"بعد التثبت من سلامة المراحل",
          type:"sign",
          alert:"",
        },
        {
          name:"موافقة / رفض",
          description:"قرار اللّجنة",
          type:"decision",
        },
      ],
      task:{
        id: 82,
        date:"20.07.2020",
        deadline:"20.08.2020",
        assignee:{
          id:"a1",
          name:"سامية بن صالح",
          image: avatar1
        },
        viewers:[
          {id: "v1", name:"أمير العكروت", image: avatar2},
          {id: "v2", name:"فيصل الحمام الأنفي", image: avatar3}
        ]  ,
        taskItems:[
          {id: 1, type:"assign", name:"إختار مكلّف بالمهمة التّالية", description:"فحص وثائق"},
          {id: 2, type:"note", name:"رأي", description:"هل الإستغلال للرصيف مطابق للقانون"},
          {id: 3, type:"upload", name:"أرفق ملف", description:"وصل الخلاص"},
          {id: 4, type:"checklist", name:"التحقق من صحة القائمة", description:"يجب تاكيد كل النقاط",
            items:[
              {id:"checklist1", name:"الوثائق مطابقة للشروط" },
              {id:"checklist2", name:"المعطيات مطابقة للشروط" },
            ]},
          {id: 5, type:"sign", name:"إمضاء الرخصة", description:""},
        ],

        submit: { name:"أرسل",  value:true},
        approve: { name:"موافق",  value:true},
        reject: { name:"ارفض", value:true},

      },

      selectedMulti: null,
      selectedGroup: null,
      selectedAssignee: null,
      popovertop: false,
    };

    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.toggletop = this.toggletop.bind(this);

  }
  t_col1() {
    this.setState({ col1: !this.state.col1 });
  };
  t_col2() {
    this.setState({ col2: !this.state.col2 });
  };
  t_col3() {
    this.setState({ col3: !this.state.col3 });
  };

  handleSelectGroup = selectedGroup => {
    this.setState({ selectedGroup });
  };
  handleSelectedAssignee = selectedAssignee => {
    this.setState({ selectedAssignee });
  };

  handleMulti = selectedMulti => {
    this.setState({ selectedMulti });
  };
  toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
  render() {

    const { selectedGroup } = this.state;
    const { selectedAssignee } = this.state;
    const { selectedMulti } = this.state;
    return (
      <React.Fragment>

        <Card className="mb-2">
          <CardHeader className="bg-white">
            <div  className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link onClick={this.t_col3} className="m-1" id={(this.state.task.assignee.id)+"1"}>
                  <img src={this.state.task.assignee.image} className="rounded-circle avatar-xs" alt="" />
                  <UncontrolledTooltip placement="top" target={(this.state.task.assignee.id)+"1"}>
                    المكلّف : {this.state.task.assignee.name}
                  </UncontrolledTooltip>
                </Link>

                <h4 className="font-size-14 mb-0 ml-2">1 - فحص الوثائق </h4>
              </div>

              <div  className="d-flex align-items-center">
                <Link onClick={this.t_col3}  className="m-1" id="litecoin">
                  <div className="avatar-xs">
                      <span className="avatar-title rounded-circle bg-soft-info text-info font-size-18">
                          <i className="bx bx-cog"></i>
                      </span>
                  </div>
                  <UncontrolledTooltip placement="top" target="litecoin">
                    إعدادات
                  </UncontrolledTooltip>
                </Link>
              </div>


              <div style={{ cursor: "pointer" }} onClick={this.t_col1}  className="d-flex align-items-center">
                {
                  this.state.taskItemConfigs.map((taskItemConfig, key) =>
                      <div className="">
                        { taskItemConfig.type == "assign" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-user-circle"></i>
                      </span>
                        </div>                }
                        { taskItemConfig.type == "committee" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-calendar-check"></i>
                      </span>
                        </div>                }
                        { taskItemConfig.type == "checklist" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-list-check"></i>
                      </span>
                        </div>                }
                        { taskItemConfig.type == "note" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-message-dots"></i>
                      </span>
                        </div>                }
                        { taskItemConfig.type == "upload" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-cloud-upload"></i>
                      </span>
                        </div>                }
                        { taskItemConfig.type == "sign" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-pen"></i>
                      </span>
                        </div>                }
                        { taskItemConfig.type == "decision" &&
                        <div className="avatar-xs mr-1">
                      <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                          <i className="bx bx-x-circle"></i>
                      </span>
                        </div>                }

                      </div>
                  )
                }
              </div>


              <div className="float-right">
                    <span className="ml-2">
                      <Link to="#">
                        <i className="bx bx-error text-danger"></i>
                      </Link>
                    </span>
                <span className="ml-2 ">
                      <Link to="#">
                        <i className="bx bx-copy"></i>
                      </Link>
                    </span>
                <span className="ml-2 ">
                      <Link to="#">
                        <i className="bx bx-trash"></i>
                      </Link>
                    </span>
                <span className="ml-2 float-right">
                      <Link to="#" style={{ cursor: "move" }}>
                        <i className="bx bx-move"></i>
                      </Link>
                    </span>
              </div>
            </div>
          </CardHeader>
          <Collapse className="" isOpen={this.state.col3}>
            <CardBody>
              <Row className="pt-0">
                <Col md="6">
                  <p className="text-muted mb-1">إسم المرحلة</p>
                  <input className="form-control" type="text" value="فحص وثائق" />
                </Col>
                <Col md="3">
                  <p className="text-muted mb-1">Icone</p>
                  <input className="form-control" type="text" value="bx-file" />
                </Col>
                <Col md="3">
                  <p className="text-muted mb-1">الأجل الأقصى (أيام)</p>
                  <input className="form-control" type="number" value="3" />
                </Col>
              </Row>
              <Row className="border-top pt-2">
                <Col md={12}>
                  <FormGroup className="ajax-select mt-3 mt-lg-0 select2-container">
                    <p className="text-muted mb-1">المكلّف :</p>
                    <Select
                        value={selectedAssignee}
                        isMulti={false}
                        onChange={this.selectedAssignee}
                        options={userList}
                        placeholder="إختيار عضو"
                        classNamePrefix="select2-selection"
                        isLoading={true}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="ajax-select mt-3 mt-lg-0 select2-container">
                    <p className="text-muted mb-1">المتابعين :</p>
                    <Select
                        value={selectedMulti}
                        isMulti={true}
                        onChange={this.handleMulti}
                        placeholder="إختيار الأعضاء"
                        options={userList}
                        classNamePrefix="select2-selection"
                        isLoading={true}
                    />
                  </FormGroup>
                </Col>

              </Row>
              <Row className="">


              </Row>
              <Row className="border-top mt-2 pt-2">
                <Col>
                  <Button  onClick={this.t_col1}  className="" size="sm" color="link" >
                    المهمّات (3)
                  </Button>
                </Col>
              </Row>

            </CardBody>

          </Collapse>
          <div>
            <Collapse className="" isOpen={this.state.col1}>
              <TaskItemConfig taskItemConfigs={this.state.taskItemConfigs} />
              <CardBody className="py-0">
                <Row className="">
                  <Col md="8">
                    <FormGroup className="select2-container">
                      <Select
                          placeholder="نوع المهمّة"
                          value={selectedGroup}
                          onChange={this.handleSelectGroup}
                          options={optionGroup}
                          classNamePrefix="select2-selection"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" className="">
                    <Button className=" mb-3" block size="" color="secondary" outline>
                      <i className="bx bx-plus-circle font-size-16 align-middle mr-2"></i>إضافة مهمّة
                    </Button>
                  </Col>
                </Row>
              </CardBody>

            </Collapse>
          </div>
        </Card>



      </React.Fragment>
    );
  }
}

export default TaskConfig;

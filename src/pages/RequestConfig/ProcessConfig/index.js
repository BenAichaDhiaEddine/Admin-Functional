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
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import ChecklistItemConfig from "./TaskConfig/TaskItemConfigs/ChecklistItemConfig";
import AffectItemConfig from "./TaskConfig/TaskItemConfigs/AffectItemConfig";
import CommitteeItemConfig from "./TaskConfig/TaskItemConfigs/CommitteeItemConfig";
import TaskConfig from "./TaskConfig";

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

const optionGroup1 = [
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

class ProcessConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: false,
      col2: false,
      col3: false,
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
      tasks: [
        {
          id:"1",
          name:"فحص الوثائق",
          assignee:{name:"سامية بن صالح", image:avatar1},
          viewers:[
            {name:"أمير العكروت", image:avatar2},
            {name:"فادية صالح", image:avatar3},
          ],
        }
      ],
      selectedMulti: null,
      selectedGroup: null,
      selectedGroup1: null,
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

  handleMulti = selectedMulti => {
    this.setState({ selectedMulti });
  };
  toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
  render() {

    const { selectedGroup } = this.state;
    const { selectedMulti } = this.state;
    return (
      <React.Fragment>

        <Card className="email-leftbar mb-4 p-0 mr-0">
          <CardHeader>
            <h5 className="">مهمّات</h5>
          </CardHeader>

          <div className="mail-list">
            <input className="form-control border-0 " type="text" placeholder="إبحث..." />
            <Link className="border-top" to="#" ><i className="bx bx-user-circle font-size-16 align-middle mr-2"></i> إختار مكلّف بالمهمة التّالية </Link>
            <Link className="border-top" to="#" ><i className="bx bx-message-dots font-size-16 align-middle mr-2"></i> رأي </Link>
            <Link className="border-top" to="#" ><i className="bx bx-calendar-check font-size-16 align-middle mr-2"></i> برمجة لجنة </Link>
            <Link className="border-top" to="#" ><i className="bx bx-cloud-upload font-size-16 align-middle mr-2"></i> رفع ملف </Link>
            <Link className="border-top" to="#" ><i className="bx bx-list-check font-size-16 align-middle mr-2"></i> قائمة تدقيق </Link>
            <Link className="border-top" to="#" ><i className="bx bx-pen font-size-16 align-middle mr-2"></i> إمضاء الرخصة </Link>
            <Link className="border-top" to="#" ><i className="bx bx-x-circle font-size-16 align-middle mr-2"></i> موافقة / رفض </Link>
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
                <Button  className="mr-2" color="success">
                  <i className="bx bx-save font-size-16 align-middle mr-2"></i>حفظ
                </Button>

              </div>
            </Col>
          </Row>

          <div className="my-3">
            <TaskConfig/>

            <Row className="ml-2 mt-3">
              <Col>
                <Button className="ml-3 mb-3 float-right"  color="primary" outline>
                  <i className="bx bx-plus-circle font-size-16 align-middle mr-2"></i>إضافة مرحلة
                </Button>
              </Col>
            </Row>

          </div>


        </div>





      </React.Fragment>
    );
  }
}

export default ProcessConfig;

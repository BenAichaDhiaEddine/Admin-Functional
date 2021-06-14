import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledTooltip,
    Label, FormGroup, Input, Dropdown
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import Select from "react-select";

const optionGroup = [
    {
        label: "رئاسة البنك",
        options: [
            { label: "فتحي مراد", value: "1" }
        ]
    },
    {
        label: "المصلحة الإقتصادية",
        options: [
            { label: "أمير العكروت", value: "2" },
            { label: "فيصل الحمام الأنفي", value: "3" },
        ]
    }
];



class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task:{
                id: "2021/082",
                date:"22.01.2021",
              assignee:{
                id:"a1",
                name:"سامية بن صالح",
                image: avatar1
              },
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
            isMenu: false,
            selectedGroup: null,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    //Setting Menu
    toggleMenu() {
        this.setState(prevState => ({
            isMenu: !prevState.isMenu
        }));
    }


    //Select
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };
    render() {
        const { selectedGroup } = this.state;

        return (
            <React.Fragment>
                <Card>
                    <CardHeader className="border-bottom bg-transparent">
                        <Dropdown style={{ cursor: "pointer" }} isOpen={this.state.isMenu} toggle={this.toggleMenu} className="float-right ml-2">
                            <DropdownToggle tag="i" className="text-muted">
                                <i className="mdi mdi-circle text-warning font-size-18"></i>
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem href="#"><i className="bx bxs-save font-size-14 mr-2"></i>حفظ مسودّة</DropdownItem>
                                <DropdownItem href="#"><i className="bx bxs-x-circle font-size-14 mr-2"></i>إلغاء المطلب</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <h5 className="font-weight-bold">مطلب جديد</h5>
                    </CardHeader>
                    <CardBody>
                        <div>

                            <Row>
                                <Col md="6">
                                    <p className="text-muted mb-1"><i className="bx bx-map align-middle mr-2"></i>البنك </p>
                                    <p className="text-muted mb-0"><i className="bx bx-user align-middle mr-2"></i>سامية بن صالح</p>
                                </Col>
                                <Col md="6">
                                    <p className="text-muted mb-1"><i className="bx bx-calendar align-middle mr-2"></i>{this.state.task.date}</p>
                                    <p className="text-muted mb-1"><i className="bx bx-hash align-middle mr-2"></i>{this.state.task.id}</p>
                                </Col>

                            </Row>

                        </div>
                    </CardBody>
                    <CardFooter className="bg-transparent border-top">
                        <p className="mb-1 font-weight-bold">نوع المطلب</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="text-muted mb-1">إقتصادية</p>
                                <p className="text-muted mb-0">رخصة إشهار</p>
                            </div>
                            <div className="avatar-xs mr-1">
                              <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-20">
                                  <i className="bx bx-question-mark"></i>
                              </span>
                            </div>

                        </div>


                    </CardFooter>

                    <CardFooter className="bg-transparent border-top">

                        <Row className="justify-content-center">
                            <Col md="12">
                                <div className="text-center">
                                    <Link to="#"  id={this.state.task.assignee.id}>
                                        <img src={this.state.task.assignee.image} className="rounded-circle avatar-sm" alt="" />
                                    </Link>
                                    <p className="text-muted mt-2 mb-1">المواطن : {this.state.task.assignee.name}<i style={{ cursor: "pointer" }} className="bx text-primary font-size-15 ml-2 bx-pencil"></i></p>
                                    <p className="mb-0">إسم الشّركة<i style={{ cursor: "pointer" }} className="bx text-primary font-size-15 ml-2 bx-pencil"></i></p>
                                </div>
                            </Col>

                        </Row>
                    </CardFooter>

                    <CardFooter className="bg-transparent border-top">
                        <p className="mb-1 font-weight-bold">المعدات</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <Label className=" mb-2">2 لافتة</Label>
                            <div>
                                <span className="mr-2 align-middle">
                                  <Link to="#">
                                    <i className="bx text-success font-size-15 bx-check-circle"></i>
                                  </Link>
                                </span>
                                <Label className="text-muted mb-2">200 دت</Label>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Label className=" mb-2">1 واقية</Label>
                            <div>
                                <span className="mr-2 align-middle">
                                  <Link to="#">
                                    <i className="bx text-primary font-size-15 bx-pencil"></i>
                                  </Link>
                                </span>
                                <Label className="text-muted mb-2">200 دت</Label>
                            </div>

                        </div>

                    </CardFooter>
                    <CardFooter className="rounded border-top">
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-1 font-weight-bold">المبلغ الجملي</p>
                            <h5 className="text-muted mb-2">358 دت</h5>

                        </div>



                    </CardFooter>


                </Card>
            </React.Fragment>
        );
    }
}

export default CardList;

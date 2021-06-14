import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledTooltip,
    Label, FormGroup, Input
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import Select from "react-select";
import ProfilePic from "../../Profile/profilePic";

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



class CardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                decision: true,
                approve: { name:"موافق",  value:false},
                reject: { name:"ارفض", value:false},

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
                    <CardBody>
                        <Dropdown isOpen={this.state.isMenu} toggle={this.toggleMenu} className="float-right ml-2">
                            <DropdownToggle style={{ cursor: "pointer" }} tag="i" className="text-muted">
                                <i  className="mdi mdi-circle text-warning font-size-18"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#"><i className="bx bxs-save font-size-14 mr-2"></i>حفظ</DropdownItem>
                                <DropdownItem href="#"><i className="bx bxs-error-circle font-size-14 mr-2"></i>تعليق</DropdownItem>
                                <DropdownItem href="#"><i className="bx bxs-user-plus font-size-14 mr-2"></i>طلب تعويض</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <div>
                            <div className="mb-2 mr-3 d-inline-flex align-items-center">
                                <i className="bx bx-task text-primary h1 mr-2"></i>
                                <h5>مهمّة عدد {this.state.task.id}</h5>
                            </div>

                            <Row>
                                <Col md="6">
                                    <p className="text-muted mb-1">تاريخ البدأ</p>
                                    <p className="text-muted mb-0">{this.state.task.date}</p>
                                </Col>
                                <Col md="6">
                                    <p className="text-muted mb-1">الأجل الأقصى</p>
                                    <p className="text-muted mb-0">{this.state.task.date}</p>
                                </Col>

                            </Row>

                        </div>
                    </CardBody>

                    <CardBody className="border-top">
                        <Row>
                            <Col md="4">
                                <div>
                                    <p className="text-muted mb-1">المكلّف :</p>
                                    <div className="d-inline-flex align-items-center">
                                    <Link to="#" className="m-1" >
                                        <ProfilePic id={this.state.task.assignee.id} color="primary" tooltip img={this.state.task.assignee.image} name={this.state.task.assignee.name} />
                                    </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="">
                                    <p className="text-muted mb-1">المتابعين :</p>
                                    <div className="d-inline-flex align-items-center">
                                        {
                                            this.state.task.viewers.map((viewer) =>
                                                <Link to="#" className="m-1" id={viewer.id}>
                                                    <ProfilePic id={viewer.id} color="secondary" tooltip img={viewer.image} name={viewer.name} />
                                                </Link>
                                            )
                                        }
                                        <Link to="#" className="m-1" id="litecoin">
                                            <div className="avatar-xs">
                                                <span className="avatar-title rounded-circle bg-soft-secondary text-secondary font-size-18">
                                                    <i className="bx bx-plus"></i>
                                                </span>
                                            </div>
                                            <UncontrolledTooltip placement="top" target="litecoin">
                                                إضافة
                                            </UncontrolledTooltip>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>


                    {
                        this.state.task.taskItems.map((taskItem) =>
                    <CardFooter className="bg-transparent border-top">
                        <p className="mb-1 font-weight-bold">{taskItem.name}</p>
                        <Label className="text-muted mb-2">{taskItem.description}</Label>


                        { taskItem.type == "checklist" &&
                        taskItem.items.map((item) =>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id={item.name} />
                            <label className="form-check-label" htmlFor={item.id}>
                                {item.name}
                            </label>
                        </div>
                            )
                        }
                        { taskItem.type == "upload" &&
                                <div className="custom-file mb-3">
                                    <input type="file" className="custom-file-input" placeholder="افتح" id="customFile" />
                                    <label className="custom-file-label " htmlFor="customFile"></label>
                                </div>
                        }
                        { taskItem.type == "note" &&
                                <Input className="mb-3"
                                       type="textarea"
                                       id="textarea"
                                       rows="3"
                                       placeholder="أكتب هنا..."
                                />
                        }
                        { taskItem.type == "assign" &&
                                <FormGroup className="select2-container">
                                    <Select
                                        placeholder="اختر"
                                        value={selectedGroup}
                                        onChange={this.handleSelectGroup}
                                        options={optionGroup}
                                        classNamePrefix="select2-selection"
                                    />
                                </FormGroup>
                        }
                        { taskItem.type == "sign" &&
                        <button className="btn btn-block btn-warning  ">{taskItem.name}</button>
                        }

                    </CardFooter>
                        )
                    }
                    <CardFooter className="bg-transparent border-top">
                        <Row>
                            { this.state.task.submit.value &&
                                <Col xs="12">
                                    <button  className="btn btn-block btn-primary ">{this.state.task.submit.name}</button>
                                </Col>
                            }
                            { this.state.task.approve.value &&
                                <Col xs="12">
                                    <button  className="btn btn-block btn-success mt-2">{this.state.task.approve.name}</button>
                                </Col>
                            }
                            { this.state.task.decision &&
                                <Col xs="12">
                                        <div
                                            className="btn-group btn-group-example mt-3 d-flex align-items-center justify-content-between"
                                            role="group"
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                            >
                                                رفض
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-success "
                                            >
                                                موافقة
                                            </button>

                                        </div>

                                </Col>
                            }
                            {this.state.task.reject.value &&
                                <Col xs="12">
                                    <button className="btn btn-block btn-danger mt-2">{this.state.task.reject.name} </button>
                                </Col>
                            }
                        </Row>
                    </CardFooter>
                </Card>
            </React.Fragment>
        );
    }
}

export default CardUser;

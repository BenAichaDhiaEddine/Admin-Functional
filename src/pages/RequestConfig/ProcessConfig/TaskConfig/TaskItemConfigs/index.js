import React, {Component} from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Collapse,
    UncontrolledCollapse,
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
import AffectItemConfig from "./AffectItemConfig";
import ChecklistItemConfig from "./ChecklistItemConfig";
import CommitteeItemConfig from "./CommitteeItemConfig";


class TaskItemConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectedGroup: null,
            task: {
                taskItems: [
                    {id: 1, type: "assign", name: "إختار مكلّف بالمهمة التّالية", description: "فحص وثائق"},
                    {id: 2, type: "note", name: "رأي", description: "هل الإستغلال للرصيف مطابق للقانون"},
                    {id: 3, type: "upload", name: "أرفق ملف", description: "وصل الخلاص"},
                    {
                        id: 4, type: "checklist", name: "التحقق من صحة القائمة", description: "يجب تاكيد كل النقاط",
                        items: [
                            {id: "checklist1", name: "الوثائق مطابقة للشروط"},
                            {id: "checklist2", name: "المعطيات مطابقة للشروط"},
                        ]
                    },
                    {id: 5, type: "sign", name: "إمضاء الرخصة", description: ""},
                ],

                submit: {name: "أرسل", value: true},
                approve: {name: "موافق", value: true},
                reject: {name: "ارفض", value: true},

            },

        };

    }


    handleSelectGroup = selectedGroup => {
        this.setState({selectedGroup});
    };


    render() {
        const {selectedGroup} = this.state;
        return (
            <React.Fragment>
                {
                    this.props.taskItemConfigs.map((taskItemConfig, key) =>
                        <Card className={ 'mb-3 border-' + taskItemConfig.alert } key={key}>
                            <CardHeader className={ 'bg-soft-' + taskItemConfig.alert } >
                                <div className="d-flex align-items-center justify-content-between">
                                    <div style={{ cursor: "pointer" }} id={"toggler" + taskItemConfig.type} Toggle onClick={this.collapse} className="d-flex align-items-center">
                                        <h5 className="font-size-14 mb-0">
                                            { taskItemConfig.type == "assign" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-user-circle "></i>
                                            }
                                            { taskItemConfig.type == "committee" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-calendar-check" ></i>
                                            }
                                            { taskItemConfig.type == "checklist" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-list-check" ></i>
                                            }
                                            { taskItemConfig.type == "note" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-message-dots" ></i>
                                            }
                                            { taskItemConfig.type == "upload" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-cloud-upload" ></i>
                                            }
                                            { taskItemConfig.type == "sign" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-pen" ></i>
                                            }
                                            { taskItemConfig.type == "decision" &&
                                            <i className="font-size-16 align-middle mr-2 bx bx-x-circle" ></i>
                                            }
                                            {taskItemConfig.name}</h5>
                                    </div>
                                    <div className="float-right">

                                        <span className="ml-2 ">
                                            <Link to="#" style={{ cursor: "pointer" }}>
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
                            <UncontrolledCollapse className="" toggler={"toggler" + taskItemConfig.type}>
                                <CardBody>

                                    <Row>
                                        <Col>
                                            <p className="text-muted mb-1">تفسير المهمّة</p>
                                            <input className="form-control" type="text"
                                                   value={taskItemConfig.description}/>
                                        </Col>
                                    </Row>
                                    <Row className="border-top mt-3 pt-3">
                                        { taskItemConfig.type == "assign" &&
                                            <AffectItemConfig/>
                                        }
                                        { taskItemConfig.type == "checklist" &&
                                            <ChecklistItemConfig/>
                                        }
                                        { taskItemConfig.type == "committee" &&
                                            <CommitteeItemConfig/>
                                        }
                                    </Row>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    )
                }


            </React.Fragment>
        );
    }
}

export default TaskItemConfig;

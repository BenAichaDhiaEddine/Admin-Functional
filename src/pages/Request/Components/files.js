import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Badge,
    Label,
    Input,
    Media,
    UncontrolledTooltip, Table, UncontrolledDropdown, DropdownToggle, DropdownMenu
} from "reactstrap";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
//Import Images
import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img4 from "../../../assets/images/small/img-4.jpg";

class Files extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files:{
                citizen:[
                    { id: "1", version:3, image: img1, type:"pdf", name: "ملف 1", size: "2", date:"23.01.2019", approved:false, uploader:"مواطن" },
                    { id: "2", version:2,  image: img2, type:"png", name: "ملف 12", size: "123", date:"24.01.2019", approved:true , uploader:"البنك" }
                ],
                corporate:[
                    { id: "1", image: img3, type:"jpg", name: " إيداع المطلب", size: "4", date:"02.05.2019", ready:true },
                    { id: "3", image: img4, type:"pdf", name: "رأي اللجنة", size: "200", date:"05.03.2019", ready:true },
                    { id: "2", image: img3, type:"jpg", name: "فاتورة", size: "4", date:"02.05.2019", ready:true },
                    { id: "4", image: img4, type:"pdf", name: "رخصة", size: "200", date:"05.03.2019", ready:false },

                ]
            },
            isEffects: false,
        };
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isEffects ? (
                    <Lightbox
                        mainSrc={img1}
                        enableZoom={false}
                        onCloseRequest={() => this.setState({ isEffects: false })}
                    />
                ) : null}


                <div className="table-responsive rounded  shadow bg-white file-manager">
                    <Table className="table table-sm table-bordered border-secondary rounded table-centered table-nowrap table-hover mb-0">
                        <thead className="thead-light rounded">
                        <tr>
                            <th className="">وثائق المطلب</th>
                            <th>الايداع</th>
                            <th><i className="bx bx-sync"></i> </th>
                            <th>الحالة</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody className="">

                        {this.state.files.citizen.map((file, key) => (
                            <tr key={key}>
                                <td>
                                    <Link to="#" className="text-dark ">
                                        <i className={"mdi mdi-file font-size-18 align-middle text-primary mr-2"}></i>
                                        <span>{file.name} - </span>
                                        <small className="text-muted ml-2">{file.size}KB</small>
                                    </Link>
                                </td>
                                <td>
                                    <span>{file.uploader}</span>
                                    <small className="text-muted ml-2">{file.date}</small>
                                </td>
                                <td>
                                    {file.version}
                                </td>
                                <td className="">
                                    <Badge dir="ltr" color={ file.approved ? "success" : "danger"} className="font-size-14" pill>
                                        { file.approved ? "مطابق" : "غير مطابق"}
                                    </Badge>
                                </td>
                                <td>
                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                        { file.approved &&
                                        <li className="list-inline-item">
                                            <Link to="#" id={"c_refuse_" + file.id}>
                                                <i className="bx bx-x-circle text-danger ml-2"></i>
                                                <UncontrolledTooltip placement="top" target={"c_refuse_" + file.id}>
                                                    رفض
                                                </UncontrolledTooltip>
                                            </Link>
                                        </li>
                                        }
                                        { !file.approved &&
                                        <li className="list-inline-item">
                                            <Link to="#" id={"c_app_" + file.id}>
                                                <i className="bx bx-check-circle text-success ml-2"></i>
                                                <UncontrolledTooltip placement="top" target={"c_app_" + file.id}>
                                                    قبول
                                                </UncontrolledTooltip>
                                            </Link>
                                        </li>
                                        }

                                        <li className="list-inline-item">
                                            <Link to="#" id={"c_down_" + file.id}>
                                                <i className="bx bx-download ml-2"></i>
                                                <UncontrolledTooltip placement="top" target={"c_down_" + file.id}>
                                                    تحميل
                                                </UncontrolledTooltip>
                                            </Link>
                                        </li>

                                    </ul>


                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>

                <div className="custom-file mt-3">
                    <input type="file" className="custom-file-input" placeholder="افتح" id="customFile" />
                    <label className="custom-file-label " htmlFor="customFile">أضف ملف </label>
                </div>
                <hr/>
                <div className="table-responsive  rounded shadow bg-white file-manager">
                    <Table className="table table-sm table-bordered  rounded table-centered table-nowrap table-hover mb-0">
                        <thead className=" thead-light rounded">
                        <tr>
                            <th>وثائق بلديتي</th>
                            <th>التاريخ</th>
                            <th>حجم</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody className="">

                        {this.state.files.corporate.map((file, key) => (
                            <tr key={key}>
                                <td>
                                    <Link to="#" className="text-dark ">
                                        {file.ready &&
                                        <i className={"mdi mdi-file font-size-18 align-middle text-danger mr-2"}></i>
                                        }
                                        { !file.ready &&
                                        <i className={"bx bx-loader bx-spin-hover font-size-18 align-middle text-secondary mr-2"}></i>
                                        }
                                         {file.name}
                                    </Link>
                                </td>
                                <td>{file.date}</td>
                                <td>
                                    <small className="text-muted">{file.size}KB</small>
                                </td>
                                <td>
                                    <ul className="list-inline font-size-20 contact-links mb-0">
                                        <li className="list-inline-item px-2">
                                            <Link to="#" id={"m_down_" + file.id}>
                                                <i className="bx bx-download ml-2"></i>
                                                <UncontrolledTooltip placement="top" target={"m_down_" + file.id}>
                                                    تحميل
                                                </UncontrolledTooltip>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>

            </React.Fragment>
        );
    }
}

export default Files;

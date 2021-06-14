import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, Badge } from "reactstrap";

//Import Images
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

class CardTaskBox extends Component {

    render() {
        return (
            <React.Fragment>
                <Card className="task-box">
                    <CardBody className="borad-width">
                        <div className="float-right ml-2">
                            <Badge color="secondary" className="badge-soft-secondary font-size-12" pill>{this.props.data['id']}</Badge>
                        </div>
                        <div>
                            <h5 className="font-size-15 font-weight-bold"><Link to="#" className="text-dark">{this.props.data['category']}</Link></h5>
                            <h5 className="font-size-15"><Link to="#" className="text-dark">{this.props.data['type']}</Link></h5>
                            <p className="text-muted mb-3">{this.props.data['organization']} - {this.props.data['citizen']}</p>

                        </div>
                        <div className="float-left">
                            <span className="mb-0 text-muted d-inline-block">{this.props.data['date']}</span>
                        </div>
                        <div className="text-right">
                            <span className="mb-0 text-muted d-inline-block">{this.props.data['deadline']} أيّام متبقيّة</span>
                        </div>

                        <hr></hr>
                        <div className="team float-left">
                            <Link to="#" className="team-member d-inline-block">
                                <img src={this.props.data['assigneeImg']} className="rounded-circle avatar-xs m-1" alt="" />
                            </Link>

                        </div>


                        <div className="text-right">
                            <Link to="#" style={{ cursor: "pointer" }} className="team-member ml-2 d-inline-block">
                                <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-secondary text-secondary">
                                        <label>3</label><i className="bx bxs-message"></i>
                                    </span>
                                </div>
                            </Link>
                            <Link to="#" style={{ cursor: "pointer" }} className="team-member ml-2 d-inline-block">
                                <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-secondary text-secondary">
                                       <label>5</label><i className='bx bxs-message-square-detail'></i>
                                    </span>
                                </div>
                            </Link>
                            <Link to="#" style={{ cursor: "pointer" }} className="team-member ml-2 d-inline-block">
                                <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-secondary text-secondary">
                                        <label>1</label><i className="bx bxs-file-blank"></i>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default CardTaskBox;

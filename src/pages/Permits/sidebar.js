import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Card, Media, Col, Row} from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Card className="col-md-3 border-0 bg-transparent shadow-none">
                    <div className="search-box chat-search-box pb-3">
                        <div className="position-relative">
                            <Input type="text" className="form-control" placeholder="بحث..." />
                            <i className="bx bx-search-alt search-icon"></i>
                        </div>
                    </div>

                    <h6 className="">الحالة</h6>
                    <div className="mail-list mt-1">
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>صالحة</Link>
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>منتهية</Link>
                    </div>
                    <hr></hr>
                    <h6 className="">النوع</h6>
                    <div className="mail-list mt-1">
                        <Link to="#">إشهار</Link>
                        <Link to="#">رخصة بناء</Link>
                    </div>

                </Card>

            </React.Fragment>
        );
    }
}

export default Sidebar;

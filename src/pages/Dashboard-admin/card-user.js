import React, { useState, useEffect  } from "react";
import { Row, Col, Card, CardBody, Media} from "reactstrap";

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import profileImg from "../../assets/images/logos/logo-bizerte.png";
import { getProfile } from "../../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function CardUser (){
    const dispatch = useDispatch();
    const {  reset  } = useForm();
    const { loading, profileDetailes } = useSelector(({ Profile }) => Profile );
    useEffect(() => {
        dispatch(getProfile());
        }, []);

    useEffect(() => {
        if (!loading) {
            reset({
            namear: profileDetailes?.firstName?.ar,
            namefr: profileDetailes?.lastName?.fr,
            });
        }
        }, [loading]);

        const [settings_Menu,setSettings_Menu] = useState(false);

    //Setting Menu
const toggleSettings= () => {
        setSettings_Menu(!settings_Menu);
    }


        return (
            <React.Fragment>


                                <Card className="">
                                    <CardBody>
                                        <div>
                                            <div >
                                                <Media>
                                                    <div className="mr-3">
                                                        <img src={avatar1} alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                    </div>
                                                    <Media className="align-self-center" body>
                                                        <div className="text-muted">
                                                            <h4 className="mb-1 font-weight-bold">{profileDetailes?.firstName?.fr + " " + profileDetailes?.lastName?.fr}</h4>
                                                            <p className="mb-1">ا- عضو بالمصلحة الاقتصادية</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </div>
                                            <hr/>
                                            <Row >
                                                <Col md={8} className="">
                                                    <h5 className="font-weight-bold mb-3">23 جانفي 2021</h5>
                                                    <ul className="mb-0" style={{listStyleType:"none"}}>
                                                        <li className="py-1"><span className="badge badge-success px-1 mr-2">7+</span> مطالب للمعالجة</li>
                                                        <li className="py-1"><span className="badge badge-primary px-1 mr-2">3+</span> مطالب للمتابعة</li>
                                                        <li className="py-1"><span className="badge badge-secondary px-1 mr-2">1+</span> مطالب معلّقة</li>
                                                    </ul>
                                                </Col>

                                                    <Col md="3" className="align-self-center mr-3 mini-stats-wid">
                                                        <div className="mini-stat-icon">
                                                            <img src={profileImg} alt="" className="img-fluid" />
                                                        </div>

                                                    </Col>

                                            </Row>


                                        </div>
                                    </CardBody>
                                </Card>


            </React.Fragment>
        );
    
}

export default CardUser;

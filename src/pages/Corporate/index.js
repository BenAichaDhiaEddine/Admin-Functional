import React, {useState , useEffect} from 'react';
import {Card,
  CardBody,
  Col,
  Row,
  CardDeck,
  Container,
  NavItem,
  NavLink,
  Nav,
  TabPane,
  TabContent} from 'reactstrap';
import Informations from './informations';
import Employees from "./list";
import Features from "./list";
import CreditsList from "./features-list";
import logo1 from "../../assets/images/logos/uib.png";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getConfig } from "../../store/corporate/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {useParams, useHistory} from "react-router-dom";

function Corporate (){
    const DEFAULT_ACTIVE_TAB = "configuration";
    const tabs = {
        "configuration": {
            title: "Configuration",
            content: (
                <Informations />
            )
        },
          "corporate_Admin": {
            title: "Corporate Admin",
            content: (
                <Employees />
            )
        },
        "credit": {
            title: "Crédit",
            content: (
                <CreditsList />
            )
        }
    }

    const {active_tab} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
const { reset } = useForm();

  const { loading, config } = useSelector(({ Corporate }) => Corporate);
  useEffect(() => {
    dispatch(getConfig());
  }, []);
  
useEffect(() => {
    if (!loading) {
      reset({
        namear: config.name.ar,
        namefr: config.name.fr,
      });
    }
  }, [loading]);

    useEffect(() => {
        if(!active_tab  || !["configuration","credit","corporate_Admin"].includes(active_tab)){
            history.push(`corporate/${DEFAULT_ACTIVE_TAB}`);
        }
        
    }, []);

    const toggle = tab => {
      if (active_tab !== tab) {
        history.push(`corporate`);
        history.push(`${tab}`);
      }
    }

    return (
        <React.Fragment>
<div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Banque" breadcrumbItem="Paramètres" />
          <CardDeck>
            <Card className="col-md-4">
              <CardBody>
                <div className="text-center">
                  <img
                    src={logo1}
                    alt=""
                    className="mb-4 avatar-lg rounded-circle img-thumbnail"
                  />
                  <h4>{config?.name.fr}</h4>
                  <p className="text-muted">{config?.name.ar}</p>
                  <hr></hr>
                  <div className="text-lg-center mt-4 mt-lg-0">
                    <Row>
                      <Col xs="3">
                        <div>
                          <h5 className="mb-2">3</h5>
                          <p>Admins</p>
                        </div>
                      </Col>
                      <Col xs="3">
                        <div>
                          <h5 className="mb-2">20</h5>
                          <p>Agents</p>
                        </div>
                      </Col>
                      <Col xs="3">
                        <div>
                          <h5 className="mb-2">350</h5>
                          <p>Clients</p>
                        </div>
                      </Col>
                      <Col xs="3">
                        <div>
                          <h5 className="mb-2">110</h5>
                          <p>Crédits</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="col-md-9">
            
              <Nav tabs className="nav-tabs-custom nav-justified">
                    {
                        Object.entries(tabs).map((tab) => (
                            <NavItem key={tab[0]}>
                                <NavLink
                                    className={active_tab === tab[0] ? "active" : ""}
                                    onClick={() => {
                                        toggle(tab[0]);
                                        console.log(tab)
                                    }}
                                    role="button"
                                    style={{ cursor: "pointer" }}
                                >
                                    {tab[1].title}
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </Nav>

              <TabContent activeTab={active_tab}>
                    {
                        Object.entries(tabs).map((tab) => (
                      <TabPane key={tab[0]} tabId={tab[0]} className="p-3">
                                {tab[1].content}
                            </TabPane>
                        ))
                    }
                </TabContent>
            </Card>
          </CardDeck>
        </Container>
      </div>
</React.Fragment>
    );
}

export default Corporate;
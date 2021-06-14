import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  Card,
  CardBody, CardDeck, Col, Container, Nav, NavItem,
  NavLink, Row, TabContent, TabPane
} from 'reactstrap';
//Import Images
import logo1 from '../../assets/images/logos/logo.png';
//Import Components
// import ProcessConfig from "./ProcessConfig";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { getCreditById } from '../../store/credit/action';
import FormConfig from './FormBuilder/components/home';
import { Option, Settings } from './RequestConfigComponents';




function FormElements() {
  const DEFAULT_ACTIVE_TAB = 'conditions';
  const { active_tab } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { reset } = useForm();
  const { _id } = useParams();
  const { loading: creditLoading, credit } = useSelector(
    ({ Credit }) => Credit
  );

  useEffect(() => {
    dispatch(getCreditById(_id));
  }, []);

  useEffect(() => {
    if (credit) {
      reset({
        name: credit.name,
        description: credit.description,
        options: credit.options
      });
    }
  }, [credit]);
  useEffect(() => {
    if (
      !active_tab ||
      !['conditions', 'options', 'form_builder'].includes(active_tab)
    ) {
      history.push(`request-config/${DEFAULT_ACTIVE_TAB}`);
    }
  }, []);

  const toggle = tab => {
    if (active_tab !== tab) {
      history.push(`request-config`);
      history.push(`${tab}`);
    }
  };

  const tabs = {
    conditions: {
      title: 'Conditions',
      content: <Settings credit={credit} />
    },
    options: {
      title: 'Options',
      content: <Option credit={credit} />
    },
    form_builder: {
      title: 'Form builder',
      content: <FormConfig />
    }
    // "credit_list": {
    //     title: "Les demandes de crédit",
    //     content: (
    //         <Logs />
    //     )
    // },
    // "collect": {
    //     title: "Collect",
    //     content: (
    //         <ProcessConfig />
    //     )
    // }
  };

  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid={true}>
          <Breadcrumbs title='Banque' breadcrumbItem='Paramètres' />
          <CardDeck>
            <Card className='col-md-4'>
              <CardBody>
                <div className='text-center'>
                  <img
                    src={logo1}
                    alt=''
                    className='mb-4 avatar-lg rounded-circle img-thumbnail'
                  />
                  <h4>{credit?.name}</h4>
                  <b className='text-muted'>{credit?.creditType?.name?.ar}</b>
                  <p className='text-muted'>
                    {credit?.creditType?.description}
                  </p>
                  <hr></hr>
                  <div className='text-lg-center mt-4 mt-lg-0'>
                    <Row>
                      <Col xs='3'>
                        <div>
                          <h5 className='mb-2'>3</h5>
                          <p>Admins</p>
                        </div>
                      </Col>
                      <Col xs='3'>
                        <div>
                          <h5 className='mb-2'>20</h5>
                          <p>Agents</p>
                        </div>
                      </Col>
                      <Col xs='3'>
                        <div>
                          <h5 className='mb-2'>350</h5>
                          <p>Clients</p>
                        </div>
                      </Col>
                      <Col xs='3'>
                        <div>
                          <h5 className='mb-2'>110</h5>
                          <p>Crédits</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className='col-md-9'>
              <Nav tabs className='nav-tabs-custom nav-justified'>
                {Object.entries(tabs).map(tab => (
                  <NavItem key={tab[0]}>
                    <NavLink
                      className={active_tab === tab[0] ? 'active' : ''}
                      onClick={() => {
                        toggle(tab[0]);
                      }}
                      role='button'
                      style={{ cursor: 'pointer' }}
                    >
                      {tab[1].title}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>

              <TabContent activeTab={active_tab}>
                {Object.entries(tabs).map(tab => (
                  <TabPane key={tab[0]} tabId={tab[0]} className='p-3'>
                    {tab[1].content}
                  </TabPane>
                ))}
              </TabContent>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default FormElements;

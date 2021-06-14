
import React, { Component } from "react";
import NavBar from './NavBar';

// eslint-disable-next-line no-unused-vars
// import FormBuilder from './compentents/ReactFormBuilder/index';
// import FormBuilder from '../../components/FormBuilder/index';
import * as variables from './variables';
import '../../assets/scss/formBuilder/application.scss';
import { TabPane, TabContent, Card, Container, CardDeck } from "reactstrap";
import FormBuilder from '../RequestConfig/FormBuilder';
import Breadcrumbs from "../../components/Common/Breadcrumb";

const url = 'https://safe-springs-35306.herokuapp.com/api/formdata?cid=2';
const saveUrl = 'https://safe-springs-35306.herokuapp.com/api/formdata?cid=2';



class Index extends Component {
    render() {
        return (
            <React.Fragment>






                {/* <div id='formBuilder' >
                    <FormBuilder.ReactFormBuilder
                        variables={variables}
                        url={url}
                        saveUrl={saveUrl}
                    />
                      <NavBar  variables={variables}/>
                </div> */}
                {/* <TabContent >
                <TabPane className="p-3">
                  <FormBuilder />
                </TabPane>
              </TabContent> */}



<FormBuilder />
                               

                                   
                   


            </React.Fragment>

        );
    }
}
export default Index;

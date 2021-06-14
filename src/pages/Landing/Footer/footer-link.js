import React, { Component } from "react"
import { Row, Col } from "reactstrap"

//Import Images
import logolight from "../../../assets/images/logo-light.png"

class FooterLink extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <div className="mb-4">
              <img src={logolight} alt="" height="20" />
            </div>

            <p className="mb-2">
              2021 © بلديتي. ARSELA TECHNOLOGIES
            </p>
            <p>
              مشروع بلديتي لإدارة ذكية ورقمية
            </p>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default FooterLink

import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import FooterLink from "./footer-link"

class Features extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <footer className="landing-footer">
          <Container>
            <FooterLink />
          </Container>
        </footer>
      </React.Fragment>
    )
  }
}

export default Features

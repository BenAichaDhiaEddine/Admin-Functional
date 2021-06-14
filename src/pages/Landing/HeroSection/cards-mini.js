import React, { Component } from "react"
import {Col,Card, CardBody, Container, Row} from "reactstrap"

//Import Components
import CardBox from "./card-box"
import profileImg from "../../../assets/images/logos/logo-bizerte.png";

class CardsMini extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: [
        {
          title: "Bitcoin",
          color: "warning",
          icon: "mdi mdi-bitcoin",
          value: "9134.39",
          rate: "0.0012.23 ( 0.2 % )",
          isIncrease: true,
        },
        {
          title: "Ethereum",
          color: "primary",
          icon: "mdi mdi-ethereum",
          value: "245.44",
          rate: "004.12 ( 0.1 % )",
          isIncrease: false,
        },
        {
          title: "Litecoin",
          color: "info",
          icon: "mdi mdi-litecoin",
          value: "63.61",
          rate: "0.0001.12 ( 0.1 % ) ",
          isIncrease: true,
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pb-0 bg-white p-0">
          <Container>
            <div className="currency-price">
              <Row>
                <Col md="2">
                  <Card>
                    <CardBody  className="mini-stats-wid">
                      <div className="mini-stat-icon">
                        <img src={profileImg} alt="" className="img-fluid" />
                      </div>
                    </CardBody>
                  </Card>
                </Col>

              </Row>
            </div>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default CardsMini
import React, { Component } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Countdown
import Countdown from "react-countdown"

class Section extends Component {
  constructor() {
    super()
    this.renderer.bind(this)
  }

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>إنتهت !</span>
    } else {
      // Render a countdown
      return (
        <>
          <div className="coming-box">
            {days}
            <span>يوم</span>
          </div>
          <div className="coming-box">
            {hours}
            <span>ساعة</span>
          </div>
          <div className="coming-box">
            {minutes}
            <span>دقيقة</span>
          </div>
          <div className="coming-box">
            {seconds}
            <span>ثانية</span>
          </div>
        </>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section hero-section bg-ico-hero" id="home">
          <div className=" bg-overlay section-bg-nav"/>
          <Container>
            <Row className="align-items-center">
              <Col lg="5">
                <div className="text-white-50">
                  <h1 className="text-white font-weight-semibold mb-2 hero-title">
                    مركز معلومات بلديتي
                  </h1>
                  <p className=" text-white ">
                   منظومة بلديتي لرقمنة الخدمات الادارية
                  </p>
                </div>
              </Col>
              <Col lg="5" md="8" sm="10" className="ml-lg-auto mt-5">
                <Card className="overflow-hidden mb-0 mt-5 mt-lg-0">
                  <CardHeader className="text-center">
                    <h4 className="mb-0 font-weight-bold">برنامج التكوين القادم</h4>
                  </CardHeader>
                  <CardBody>
                    <div className="text-center">
                      <h5>الوقت المتبقي :</h5>
                      <div className="mt-4">
                        <div className="counter-number ico-countdown">
                          <Countdown
                            date="2021/3/31"
                            renderer={this.renderer}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button type="button" color="primary" outline size="lg" className="w-md">
                          حجز مقعد
                        </Button>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-weight-semibold">
                          2021/3/31 <i className="bx bx-map"></i> سوسة
                        </h4>
                        <div className="clearfix mt-4">
                          <h5 className="float-right font-size-14">53 مكان متبقي</h5>
                        </div>
                        <div className="progress p-1 progress-xl softcap-progress">
                          <div
                            className="progress-bar rounded progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-label">40 %</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default Section

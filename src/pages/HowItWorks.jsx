import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const steps = [
  {
    icon: "/public/images/meet.png",
    title: "Meet a designer",
    desc: "",
  },
  {
    icon:  "/public/images/payment.png",
    title: "(5% payment⁴)",
    desc: "Book a renovation",
  },
  {
    icon:  "/public/images/payment2.png",
    title: "(60% payment)",
    desc: "Execution begins",
  },
  {
    icon:  "/public/images/payment3.png",
    title: "(100% payment)",
    desc: "Final installations",
  },
  {
    icon:  "/public/images/move.png",
    title: "Move in and enjoy!",
    desc: "",
  },
];

const HowItWorks = () => {
  return (
    <Container className="how-it-works text-center my-5">
      <h2 className="how-title">How it works</h2>
      <Row className="justify-content-center align-items-center step-wrapper">
        {steps.map((step, index) => (
          <Col key={index} xs="6" md="2" className="step-item">
            <div className="icon-circle">
              <img src={step.icon} alt={step.title} />
            </div>
            <p className="step-title">{step.title}</p>
            <p className="step-desc">{step.desc}</p>
            {index !== steps.length - 1 && (
              <div className="dotted-line d-none d-md-block"></div>
            )}
          </Col>
        ))}
      </Row>
      <Button className="consult-btn mt-4">BOOK FREE CONSULTATION</Button>
    </Container>
  );
};

export default HowItWorks;

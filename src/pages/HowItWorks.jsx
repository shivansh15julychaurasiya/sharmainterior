import {useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import QuoteModal from "./QuoteModel";
const steps = [
  {
    icon: "/images/meet.png",
    title: "Meet a designer",
    desc: "",
  },
  {
    icon:  "/images/payment.png",
    title: "(5% payment⁴)",
    desc: "Book a renovation",
  },
  {
    icon:  "/images/payment2.png",
    title: "(60% payment)",
    desc: "Execution begins",
  },
  {
    icon:  "/images/payment3.png",
    title: "(100% payment)",
    desc: "Final installations",
  },
  {
    icon:  "/images/move.png",
    title: "Move in and enjoy!",
    desc: "",
  },
];

const HowItWorks = () => {
 const [showModal, setShowModal] = useState(false);



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
       <div className="App text-center p-2">
           <button
             className="btn btn-primary"
             onClick={() => setShowModal(true)}
           >
             BOOK FREE CONSULTATION
           </button>
     
           <QuoteModal show={showModal} handleClose={() => setShowModal(false)} />
         </div>
    </Container>
  );
};

export default HowItWorks;

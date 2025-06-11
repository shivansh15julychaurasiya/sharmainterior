import {useState} from 'react';
import QuoteModal from './QuoteModel';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

const interiorStyles = [
  {
    img: "/images/bank.png",
    title: "Elegant & Secure Bank Interiors",
    subtitle: "Classic and crisp geometric designs.",
  },
  {
    img: "/images/saloon.jpg",
    title: "Elevate Your Salon Experience Through Interior Design",
    subtitle: "Designed for creativity, comfort, and client satisfaction.",
  },
  {
    img: "/images/office.png",
    title: "Modern Office Interiors That Boost Productivity",
    subtitle: "Tailor-made office spaces that reflect your brand and foster employee engagement",
  },
  {
    img: "/images/commercial.png",
    title: "Commercial Interiors That Drive Business",
    subtitle: "Functional, stylish, and brand-aligned interiors for every commercial need.",
  },
];

const InteriorOfEveryStyle = () => {
 const [showModal, setShowModal] = useState(false);


  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Interior of Every Style</h2>
      <Row className="g-4 justify-content-center">
        {interiorStyles.map((style, index) => (
          <Col key={index} xs="12" sm="6" md="4" lg="3">
            <Card className="shadow-sm h-100 d-flex flex-column justify-content-between">
              <CardImg
                top
                width="100%"
                height="180px"
                src={style.img}
                alt={style.title}
                style={{ objectFit: 'cover' }}
              />
              <CardBody className="d-flex flex-column justify-content-between">
                <div>
                  <CardTitle tag="h5" className="fw-bold text-center">
                    {style.title}
                  </CardTitle>
                  <CardText className="text-muted text-center">
                    {style.subtitle}
                  </CardText>
                </div>
                <div className="text-center mt-3">
                  <div className="App text-center p-2">
                       <button
                         className="btn btn-danger"
                         onClick={() => setShowModal(true)}
                       >
                         Get Free Quote
                       </button>
                 
                       <QuoteModal show={showModal} handleClose={() => setShowModal(false)} />
                     </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InteriorOfEveryStyle;

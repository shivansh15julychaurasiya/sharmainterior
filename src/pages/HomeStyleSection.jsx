import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import QuoteModal from "./QuoteModel";
const homesData = [
  {
    img: "/images/image.png", // replace with your actual image
    title: "Contemporary & Classy 3 BHK",
    subtitle: "Add the cloudy hues to your space.",
  },
  {
    img: "/images/image3.png",
    title: "Royal & Elegant 3 BHK",
    subtitle: "Add textural and magnificent touch.",
  },
  {
    img: "/images/image3.png",
    title: "Contemporary & Classy 4 BHK",
    subtitle: "Classic and crisp geometric designs.",
  },
];

function HomesStyleSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="homes-style-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Homes for every style</h2>
          <p className="section-subtitle">
            Superior finishes, trendy designs and quality modules at affordable
            prices.
          </p>
        </div>
        <Row>
          {homesData.map((home, index) => (
            <Col md="4" sm="6" xs="12" key={index} className="mb-4">
              <Card className="home-card">
                <CardImg top width="100%" src={home.img} alt={home.title} />
                <CardBody>
                  <CardTitle tag="h5" className="card-title">
                    {home.title}
                  </CardTitle>
                  <CardText className="card-subtitle">{home.subtitle}</CardText>
                  <div className="App text-center p-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => setShowModal(true)}
                    >
                      Get Free Quote
                    </button>

                    <QuoteModal
                      show={showModal}
                      handleClose={() => setShowModal(false)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomesStyleSection;

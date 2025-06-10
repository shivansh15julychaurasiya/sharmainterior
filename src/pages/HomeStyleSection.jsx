import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const homesData = [
  {
    img: '../../public/images/image.png', // replace with your actual image
    title: 'Contemporary & Classy 3 BHK',
    subtitle: 'Add the cloudy hues to your space.',
  },
  {
    img: '../../public/images/image3.png',
    title: 'Royal & Elegant 3 BHK',
    subtitle: 'Add textural and magnificent touch.',
  },
  {
    img: '../../public/images/image3.png',
    title: 'Contemporary & Classy 4 BHK',
    subtitle: 'Classic and crisp geometric designs.',
  },
];

function HomesStyleSection() {
  return (
    <div className="homes-style-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Homes for every style</h2>
          <p className="section-subtitle">
            Superior finishes, trendy designs and quality modules at affordable prices.
          </p>
          <Button className="quote-btn">GET FREE QUOTE</Button>
        </div>
        <Row>
          {homesData.map((home, index) => (
            <Col md="4" sm="6" xs="12" key={index} className="mb-4">
              <Card className="home-card">
                <CardImg top width="100%" src={home.img} alt={home.title} />
                <CardBody>
                  <CardTitle tag="h5" className="card-title">{home.title}</CardTitle>
                  <CardText className="card-subtitle">{home.subtitle}</CardText>
                  <Button outline color="danger" className="quote-card-btn mt-2">GET FREE QUOTE</Button>
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

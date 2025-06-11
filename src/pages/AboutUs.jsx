import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

const AboutUs = () => {
  return (
    <div className="about-page mt-5">
      {/* Hero Section */}
      <div className="hero-section text-dark text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Sharma Interior</h1>
          <p className="lead">
            Transforming spaces into luxurious, functional homes and offices with a touch of elegance.
          </p>
        </Container>
      </div>

      {/* About Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/images/image.png"
              alt="Interior Design"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">Who We Are</h2>
            <p>
              Sharma Interior is a creative interior design company based in India,
              specializing in transforming residential and commercial spaces into stylish,
              practical environments. Our experienced team ensures every project is delivered with passion, precision, and a personal touch.
            </p>
            <p>
              Whether it's modern minimalism, classic luxury, or innovative office design, we craft spaces that reflect your personality and meet your needs.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <CardBody>
                <CardTitle tag="h4">Our Mission</CardTitle>
                <CardText>
                  To create beautiful, sustainable, and functional spaces that enhance the quality of life for our clients while delivering outstanding customer service.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <CardBody>
                <CardTitle tag="h4">Our Vision</CardTitle>
                <CardText>
                  To be a leading name in the interior design industry, known for innovation, quality, and client satisfaction.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="text-center shadow-sm mb-4">
              <CardBody>
                <CardTitle tag="h5">Residential Design</CardTitle>
                <CardText>
                  Custom home interiors tailored to your lifestyle and preferences.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm mb-4">
              <CardBody>
                <CardTitle tag="h5">Commercial Spaces</CardTitle>
                <CardText>
                  Innovative and functional design for office and retail environments.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm mb-4">
              <CardBody>
                <CardTitle tag="h5">Renovation</CardTitle>
                <CardText>
                  Breathe new life into your existing spaces with our renovation expertise.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Call to Action */}
      <div className="footer-cta py-5 text-white text-center">
        <Container>
          <h2>Ready to transform your space?</h2>
          <p>Contact Sharma Interior for a free consultation today!</p>
          <Button color="light" size="lg" outline>
            Contact Us
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;

import React, { useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="aboutus-wrapper mt-5">
      {/* Hero */}
      <div
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/herobackground.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
        data-aos="fade-down"
      >
        <Container>
          <h1 className="display-4 fw-bold">Elevate Your Everyday Spaces</h1>
          <p className="lead">Sharma Interior crafts beautiful, functional interiors that reflect your unique lifestyle and taste.</p>
          <Button color="light" size="lg" outline>
            Get a Quote
          </Button>
        </Container>
      </div>

      {/* About */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <img
              src="/images/image.png"
              alt="Interior"
              className="img-fluid rounded-4 shadow-lg"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="section-title">Who We Are</h2>
            <p>At Sharma Interior, we blend luxury and functionality to craft spaces that reflect your personality and aspirations. From modern to traditional, our work balances beauty with practicality.</p>
            <p>We’re not just designers—we’re storytellers shaping your environment to feel like home.</p>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <Container className="my-5">
        <Row>
          <Col md={6} data-aos="zoom-in-up">
            <Card className="info-card">
              <CardBody>
                <CardTitle tag="h4" className="text-primary">🎯 Our Mission</CardTitle>
                <CardText>To create beautiful, sustainable, and intelligent spaces that enhance lifestyles and elevate comfort.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} data-aos="zoom-in-up" data-aos-delay="100">
            <Card className="info-card">
              <CardBody>
                <CardTitle tag="h4" className="text-primary">🚀 Our Vision</CardTitle>
                <CardText>To be a nationally trusted brand that redefines how people experience their homes and workplaces.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Services */}
      <Container className="my-5">
        <h2 className="text-center section-title mb-5">🛠️ Our Services</h2>
        <Row>
          {[
            { icon: '🏡', title: 'Residential Design', desc: 'Stylish homes that blend comfort, elegance, and personalization.' },
            { icon: '🏢', title: 'Commercial Spaces', desc: 'Modern offices, studios, and retail spaces that inspire productivity.' },
            { icon: '🔧', title: 'Renovation', desc: 'Transform outdated spaces into stunning, functional masterpieces.' },
            { icon: '🎨', title: '3D Visualization', desc: 'Immersive 3D models that help you visualize your dream space before execution.' },
            { icon: '🏠', title: 'Modular Kitchen', desc: 'Customized kitchen interiors that combine functionality with premium style.' },
            { icon: '🧑‍💼', title: 'Interior Consultation', desc: 'Expert advice to help you make informed interior design decisions.' }
          ].map((item, i) => (
            <Col md={4} className="mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <Card className="service-card">
                <CardBody className="text-center">
                  <div className="icon">{item.icon}</div>
                  <CardTitle tag="h5" className="fw-bold">{item.title}</CardTitle>
                  <CardText>{item.desc}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA */}
      <div className="cta-section text-white text-center" data-aos="fade-up">
        <Container>
          <h2 className="mb-3">Let's design something beautiful together.</h2>
          <p>Book your free design consultation now!</p>
          <Button color="light" size="lg" outline>Contact Us</Button>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const services = [
  {
    title: 'Residential Interior Design',
    description: 'We craft cozy, stylish homes tailored to your vision and lifestyle.',
    icon: 'bi-house-door-fill'
  },
  {
    title: 'Modular Kitchen Design',
    description: 'Ergonomic, modern, and elegant kitchen setups with smart storage solutions.',
    icon: 'bi-cup-straw'
  },
  {
    title: 'Living Room Makeovers',
    description: 'Transform your living space with innovative lighting and layout ideas.',
    icon: 'bi-lightbulb-fill'
  },
  {
    title: 'Office Interior Design',
    description: 'Boost productivity with professional yet creative workspace design.',
    icon: 'bi-building'
  },
  {
    title: '3D Design & Visualization',
    description: 'See your dream space come alive with stunning 3D renders before execution.',
    icon: 'bi-vector-pen'
  },
  {
    title: 'Custom Furniture Solutions',
    description: 'Unique furniture pieces made to fit your space and style perfectly.',
    icon: 'bi-tools'
  }
];

const Services = () => {
  return (
    <div className="services-section py-5 bg-light mt-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Our Services</h2>
        <p className="text-center text-muted mb-5">
          At Sharma Interior, we offer a full range of interior design services to bring your dream space to life.
        </p>
        <Row>
          {services.map((service, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 text-center shadow-sm border-0 service-card">
                <CardBody>
                  <div className="service-icon mb-3 text-primary">
                    <i className={`bi ${service.icon} display-5`}></i>
                  </div>
                  <CardTitle tag="h5" className="mb-2">{service.title}</CardTitle>
                  <CardText className="text-muted">{service.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;

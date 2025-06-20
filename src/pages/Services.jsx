import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const services = [
  {
    title: 'Residential Interior Design',
    desc: 'Stylish, modern homes that reflect your taste and enhance your comfort.',
    img: '/images/residential.jpg',
  },
  {
    title: 'Modular Kitchen Design',
    desc: 'Space-saving and elegant kitchen designs for the modern family.',
    img: '/images/Kitchen.jpg',
  },
  {
    title: 'Living Room Makeovers',
    desc: 'Beautiful and functional living spaces tailored to your lifestyle.',
    img: '/images/livingroom.png',
  },
  {
    title: 'Office Interior Design',
    desc: 'Smart, professional workspaces that inspire productivity and focus.',
    img: '/images/Office.jpg',
  },
  {
    title: '3D Visualization',
    desc: 'Visualize your dream space with realistic 3D renders before building.',
    img: '/images/Visualization.jpg',
  },
  {
    title: 'Custom Furniture',
    desc: 'Hand-crafted furniture that fits your style and room perfectly.',
    img: '/images/furniture.png',
  },
];

const Services = () => {
  return (
    <section className="services-wrapper">
      <div className="overlay"></div>
      <Container className="position-relative text-white z-2 py-5">
        <h2 className="text-center fw-bold display-5 mb-4">Our Services</h2>
        <p className="text-center fs-5 mb-5">
          We design beautiful and functional interiors that elevate everyday living.
        </p>
        <Row className="g-4">
          {services.map((s, i) => (
            <Col lg={4} md={6} key={i}>
              <div className="service-card">
                <img src={s.img} alt={s.title} className="card-image-static" />
                <div className="card-content p-4">
                  <h5 className="fw-bold">{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

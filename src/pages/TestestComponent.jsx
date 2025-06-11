import React, { useState } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const testData = [
  {
    title: "Drawer Cyclic Test",
    videoUrl: "/video/v1.mp4",
    description: "Ensures drawers withstand frequent usage without failures.",
  },
  {
    title: "Shutter Cyclic Test",
    videoUrl:"/video/v1.mp4",
    description: "Verifies the shutter's durability over repeated use.",
  },
  {
    title: "Vertical Force Test",
    videoUrl: "/video/v1.mp4",
    description: "Ensures superior hinge quality and avoids accidents.",
  },
  {
    title: "Shelf Load Test",
    videoUrl: "/video/v1.mp4",
    description: "Tests shelf strength under heavy loads to ensure safety.",
  },
];

function TestedComponent() {
  const [activeTab, setActiveTab] = useState(2); // Start with Vertical Force Test

  return (
    <Container className="tested-section mt-5">
      <h2 className="section-title">Tested to be the best</h2>
      <p className="section-subtitle">
        A lot of our success in modular strength hinges on testing our cabinets.
      </p>

      <Nav tabs className="custom-tabs mb-4">
        {testData.map((item, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({ active: activeTab === index })}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <Row className="align-items-center fade-in">
        <Col md={6}>
          <video width="100%" controls autoPlay muted key={activeTab}>
            <source src={testData[activeTab].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col md={6}>
          <h4 className="video-title">{testData[activeTab].title}</h4>
          <p className="video-description">{testData[activeTab].description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TestedComponent;

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import DesignBanner from "./DesignBanner";
import HomeDesignSection from "./HomeDesignSection";
import HomesStyleSection from "./HomeStyleSection";
import InteriorPriceEstimator from "./InteriorPriceEstimator";
import WhatWeOffer from "./WhatOffer";
import TrustedPartners from "./TrustedPartner";
import InteriorGuide from "./InteriorGuide";
import TestedComponent from "./TestestComponent";
import InteriorIdeas from "./InteriorIdeas";
import HowItWorks from "./HowItWorks";
import ConnectWithUs from "./ConnectWithUs";
import InTheNews from "./InTheNews";
export default function Home() {

  const highlights = [
    {
      icon: '/public/images/icon10.png',
      text: 'Personalised designs',
    },
    {
      icon: '/public/images/icon11.png',
      text: 'Flat 10-year warranty¹',
    },
    {
      icon: '/public/images/icon12.png',
      text: 'Transparent pricing',
    },
  ];
  

  return (
    <>
      <div className="home-section">
        <div className="overlay">
          <Container className="text-center text-light banner-text">
            <Row className="justify-content-center">
              <Col lg="8">
                <h1 className="display-4 fw-bold">
                  Transform Your Home into a Dream Space
                </h1>
                <p className="lead">
                  Experience award-winning interiors with Sharma-Interior like
                  speed and quality
                </p>
                <Button color="light" size="lg" tag={Link} to="/estimate">
                  Get Free Estimate
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* highlight*/}
      <div className="highlights-container">
      {highlights.map((item, index) => (
        <div className="highlight-item" key={index}>
          <img src={item.icon} alt={item.text} className="highlight-icon" />
          <p className="highlight-text">{item.text}</p>
        </div>
      ))}
    </div>
      {/* Designer  banner */}
      <div className="mt-1">
        <HomeDesignSection />

        <HomesStyleSection />
        <InteriorPriceEstimator />
        <WhatWeOffer />
        <TrustedPartners />
        <InteriorGuide />
        <TestedComponent />
        <InteriorIdeas />
        <ConnectWithUs />
        <HowItWorks />
        <InTheNews />

        <DesignBanner />
      </div>
      {/* HOME DESIGN SECTION */}
      <div className=""></div>
    </>
  );
}

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import QuoteModal from "./QuoteModel";
import InteriorOfEveryStyle from "./InteriorOfEveryStyle";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const highlights = [
    {
      icon: "/images/icon10.png",
      text: "Personalised designs",
    },
    {
      icon: "/images/icon11.png",
      text: "Flat 10-year warranty¹",
    },
    {
      icon: "/images/icon12.png",
      text: "Transparent pricing",
    },
  ];

  return (
    <>
      <div className="home-section">
        <div className="overlay">
          <Container className="text-center text-light banner-text" data-aos="fade-down">
            <Row className="justify-content-center">
              <Col lg="8">
                <h1 className="display-4 fw-bold">
                  Transform Your Home into a Dream Space
                </h1>
                <p className="lead">
                  Experience award-winning interiors with Sharma-Interior like speed and quality
                </p>
                <div className="App text-center p-2">
                  <button className="btn btn-danger" onClick={() => setShowModal(true)}>
                    Get Free Quote
                  </button>
                  <QuoteModal show={showModal} handleClose={() => setShowModal(false)} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights-container" data-aos="fade-up">
        {highlights.map((item, index) => (
          <div className="highlight-item" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <img src={item.icon} alt={item.text} className="highlight-icon" />
            <p className="highlight-text">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Content Sections with AOS animations */}
      <div className="mt-1">
        <div data-aos="fade-up"><HomeDesignSection /></div>
        <div data-aos="fade-up"><HomesStyleSection /></div>
        <div data-aos="fade-up"><InteriorOfEveryStyle /></div>
        <div data-aos="fade-up"><InteriorPriceEstimator /></div>
        <div data-aos="fade-up"><WhatWeOffer /></div>
        <div data-aos="fade-up"><TrustedPartners /></div>
        <div data-aos="fade-up"><InteriorGuide /></div>
        <div data-aos="fade-up"><TestedComponent /></div>
        <div data-aos="fade-up"><InteriorIdeas /></div>
        <div data-aos="fade-up"><ConnectWithUs /></div>
        <div data-aos="fade-up"><HowItWorks /></div>
        <div data-aos="fade-up"><TestimonialCarousel /></div>
        <div data-aos="fade-up"><InTheNews /></div>
        <div data-aos="fade-up"><DesignBanner /></div>
      </div>
    </>
  );
}

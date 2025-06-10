import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaDownload } from "react-icons/fa";


const InteriorIdeas = () => {
  return (
    <Container  className="my-5">
      <div
        style={{
          backgroundColor: "#FAE7B0",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Row className="align-items-center">
          <Col md="6">
            <img
              src="/public/images/image9.png"
              alt="Interior Guide"
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Col>
          <Col md="6">
            <h2 style={{ color: "#2B2B2B", fontWeight: "bold" }}>
              Download home interior guide
            </h2>
            <p style={{ marginTop: "15px", fontSize: "16px", color: "#333" }}>
              Don’t forget to consider these fundamental design guidelines to
              know before you start interior designing!
            </p>
            <Button
              color="danger"
              style={{
                marginTop: "20px",
                borderRadius: "30px",
                padding: "10px 25px",
                fontSize: "16px",
              }}
            >
              <FaDownload style={{ marginRight: "8px" }} />
              DOWNLOAD NOW
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default InteriorIdeas;
